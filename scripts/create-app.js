/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
/* eslint-disable no-console */
const fs = require('fs-extra');
const path = require('path');
const npm = require('./npm');
const git = require('./git');
const chalk = require('chalk');
const nameUtil = require('name-util');
const progress = require('print-progress');
const packageJson = require('../src/package.json');

progress.configure({ delay: 200 });

function resolvePath(target) {
  return path.resolve(/^\.\.?\//.test(target) ? `../${target}` : target);
}

function isExists(target, expect) {
  return new Promise((resolve, reject) => {
    fs.access(target, fs.constants.R_OK, (err) => {
      if (expect) {
        if (err) {
          return reject(`Invalid path ${target}`);
        }
      } else if (!err) {
        return reject(`Path exists ${target}`);
      }
      return resolve(target);
    });
  });
}

function createTargetDir(target) {
  return new Promise((resolve, reject) => {
    fs.ensureDir(target, err => (err ? reject(err) : resolve(target)));
  });
}

function copyDirectory(source, target) {
  return new Promise((resolve, reject) => {
    fs.copy(source, target, err => (err ? reject(err) : resolve(target)));
  });
}

function copyPackageJson(target, name) {
  const updatedPackageJson = [
    'name', 'version',
  ].reduce((a, key) => {
    const update = {};
    if (key === 'name') {
      update[key] = name;
    } else if (key === 'version') {
      update[key] = '0.0.1';
    }
    return Object.assign({}, a, update);
  }, packageJson);

  return new Promise((resolve, reject) => {
    fs.writeJson(`${target}/package.json`, updatedPackageJson, err => (err ? reject(err) : resolve(target)));
  });
}

function copyIndex(target, name) {
  return new Promise((resolve, reject) => {
    fs.writeFile(`${target}/src/index.tsx`, `
import './style/app.scss'

import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { App } from './app'
import { INITIAL_STATE } from './state'
import { initialize } from 'statex'

initialize(INITIAL_STATE, {
  hotLoad: process.env.NODE_ENV !== 'production',
  domain: '${name}'
})

ReactDOM.render(<App />, document.getElementById('root'))
`, err => (err ? reject(err) : resolve()));
  });
}

function createGitIgnore(target, files) {
  return new Promise((resolve, reject) => {
    fs.writeFile(`${target}/.gitignore`, files.join('\n'), err => (err ? reject(err) : resolve()));
  });
}

function usage(name, noUsageInfo) {
  if (noUsageInfo) {
    console.log();
    console.log(chalk.green('Completed'));
    return;
  }

  console.log(`

  Use the following commands to get started:

  ${chalk.gray('# go to the project folder')}
  ${chalk.yellow(`cd ${name}`)}

  ${chalk.gray('# install modules')}
  ${chalk.yellow('npm install')}          ${chalk.green('Install')} modules (run once)

  ${chalk.gray('# development')}
  ${chalk.yellow('npm start')}            ${chalk.green('Serve')} the project

  ${chalk.gray('# test')}
  ${chalk.yellow('npm test')}             Run ${chalk.green('test')} suite
  ${chalk.yellow('npm run tdd')}          Run ${chalk.green('test')} suite in watch mode
  ${chalk.yellow('npm run lint')}         Test for ${chalk.green('lint')} error

  ${chalk.gray('# build')}
  ${chalk.yellow('npm run build')}        Create ${chalk.green('production')} build
  ${chalk.yellow('npm run build:dev')}    Create ${chalk.green('development')} build

  `);
}

function initGit(target, skipGit) {
  return new Promise((resolve) => {
    if (skipGit) {
      return Promise.resolve()
        .then(() => progress.done(chalk.gray('Skip git initialization...')))
        .then(resolve);
    }
    return git.isGitDirectory().then(() => Promise.resolve()
        .then(() => progress.done(`${chalk.gray('Skip git initialization... The folder is under git already')}`))
        .then(resolve), () => {
      if (git.isAvailable()) {
        return Promise.resolve()
          .then(() => progress.doing(`${chalk.green('Initialize git...')}`))
          .then(() => git.init(target))
          .then(() => git.addAll(target))
          .then(() => git.commit('Initial commit'))
          .then(() => progress.done('Initialize git'))
          .then(resolve);
      }
      return progress.done(`Git not available... ${chalk.yellow('skipping init git')}`).then(resolve);
    });
  });
}

function installNodeModules(target, run) {
  if (!run) return Promise.resolve();

  return Promise.resolve()
    .then(() => progress.doing(`${chalk.green('Installing node modules...')} This may take time.`))
    .then(() => npm.install(target))
    .then(() => progress.done('Installing node modules'));
}

module.exports = function createApp(name, options) {
  const config = Object.assign({
    installModules: false,
    noUsageInfo: true,
    skipGit: false,
  }, options);

  const projectName = nameUtil.toDashedName(name.replace(/^[^a-z0-9]$/gi, ''));
  const source = resolvePath(`${__dirname}/../src`);
  const target = resolvePath(projectName);

  console.log('');
  return Promise.resolve()
    .then(() => isExists(target))
    .then(() => progress.doing('Creating target directory...'))
    .then(() => createTargetDir(target))
    .then(() => progress.done('Creating target directory'))
    .then(() => progress.doing('Creating project files... '))
    .then(() => copyDirectory(source, target))
    .then(() => copyPackageJson(target, name))
    .then(() => copyIndex(target, name))
    .then(() => progress.done('Creating project files... '))
    .then(() => createGitIgnore(target, ['node_modules/', 'coverage/', 'dist/']))
    .then(() => initGit(target, config.skipGit))
    .then(() => installNodeModules(target, config.installModules))
    .then(() => usage(projectName, config.noUsageInfo))
    .catch(error => progress.fail(error));
};
