/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
/* eslint-disable no-console */
const fs = require('fs-extra');
const path = require('path');
const npm = require('./npm');
const chalk = require('chalk');

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

function printMessage(message) {
  console.log();
  console.log(chalk.gray(message));
}

function printError(error) {
  console.log();
  console.log(chalk.red(`ERROR: ${error}`));
}

module.exports = function createApp(name) {
  const source = resolvePath(`${__dirname}/../project`);
  const target = resolvePath(name);

  printMessage(`Creating application ${chalk.green(name)}`);

  isExists(target)
    .then(createTargetDir.bind(this, target))
    .then(copyDirectory.bind(this, source))
    .then(printMessage.bind(this, `${chalk.green('Installing node modules...')} This may take time.`))
    .then(npm.install.bind(this, target))
    .catch(printError);
};