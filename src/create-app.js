/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
/* eslint-disable no-console */
const fs = require('fs-extra');
const path = require('path');
const npm = require('./npm');
const git = require('./git');
const chalk = require('chalk');
const nameUtil = require('name-util');
const packageJson = require('../project/package.json');
const ProgressBar = require('progress');

const progress = new ProgressBar(':message', {
  total: Infinity,
});

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

ReactDOM.render(<App />, document.getElementById('root'))

// hot load application state when in development mode
if (process.env.NODE_ENV === 'development') {
  require('../node_modules/react-ts/src/hot-load')('${name}')
}
`, err => (err ? reject(err) : resolve()));
  });
}

function createGitIgnore(target, files) {
  return new Promise((resolve, reject) => {
    fs.writeFile(`${target}/src/index.tsx`, files.join('\n'), err => (err ? reject(err) : resolve()));
  });
}

function printProgress(message) {
  progress.tick({
    message: chalk.gray(message),
  });

  return new Promise(resolve => setTimeout(resolve, 1500));
}

function printError(error) {
  console.log();
  console.log();
  console.log(chalk.red(`ERROR: ${error}`));
}

function usage(name) {
  console.log();
  console.log(`
  You may use the following commands:

  ${chalk.gray('# go to the project folder')}
  ${chalk.yellow(`cd ${name}`)}

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

function initGit(target) {
  return new Promise((resolve) => {
    if (git.isAvailable()) {
      return Promise.resolve()
        .then(() => printProgress(`${chalk.green('Initialize git...')}`))
        .then(() => git.init(target))
        .then(() => git.addAll(target))
        .then(() => git.commit('Initial commit'))
        .then(() => printProgress(`Initialize git... ${chalk.green('done')}`))
        .then(resolve);
    }
    return printProgress(`Git not available... ${chalk.yellow('skipping init git')}`).then(resolve);
  });
}

module.exports = function createApp(name) {
  const projectName = nameUtil.toDashedName(name.replace(/^[^a-z0-9]$/gi, ''));
  const source = resolvePath(`${__dirname}/../project`);
  const target = resolvePath(projectName);

  console.log('');
  Promise.resolve()
    .then(() => printProgress(`Creating application ${chalk.green(projectName)}`))
    .then(() => isExists(target))
    .then(() => createTargetDir(target))
    .then(() => copyDirectory(source, target))
    .then(() => copyPackageJson(target, name))
    .then(() => createGitIgnore(target, ['node_modules/', 'coverage/', 'dist/']))
    .then(() => copyIndex(target, name))
    .then(() => initGit(target))
    .then(() => printProgress(`${chalk.green('Installing node modules...')} This may take time.`))
    .then(() => npm.install(target))
    .then(() => printProgress(`Installing node modules... ${chalk.green('Done')}`))
    .then(() => printProgress(`Created application ${chalk.green('successfully')}`))
    .then(() => usage(projectName))
    .catch(printError);
};
