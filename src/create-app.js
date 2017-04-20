/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
/* eslint-disable no-console */
const fs = require('fs-extra');
const path = require('path');
const npm = require('./npm');
const chalk = require('chalk');
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

function printProgress(message) {
  progress.tick({
    message: chalk.gray(message),
  });

  return new Promise(resolve => setTimeout(resolve, 1000));
}

function printError(error) {
  console.log(chalk.red(`ERROR: ${error}`));
}

function usage() {
  console.log();
  console.log(`
  You may use the following commands:

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

module.exports = function createApp(name) {
  const source = resolvePath(`${__dirname}/../project`);
  const target = resolvePath(name);

  console.log('');
  printProgress(`Creating application ${chalk.green(name)}`)
    .then(isExists.bind(this, target))
    .then(createTargetDir.bind(this, target))
    .then(copyDirectory.bind(this, source))
    .then(printProgress.bind(this, `${chalk.green('Installing node modules...')} This may take time.`))
    // .then(npm.install.bind(this, target))
    .then(printProgress.bind(this, chalk.green('Installing node modules... Done')))
    .then(usage)
    .catch(printError);
};
