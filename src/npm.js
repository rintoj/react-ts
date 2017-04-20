/* eslint-disable no-console */
const shell = require('shelljs');
const path = require('path');
const chalk = require('chalk');

module.exports = (function npmCommands() {
  const npm = {};

  const projectRootDir = path.normalize(`${__dirname}/../..`);

  function run(command, target) {
    return new Promise((resolve, reject) => {
      if (target != null) {
        shell.cd(target);
      }
      shell.exec(`npm ${command}`, {
        silent: true,
      }, (code, stdout, stderr) => {
        if (code !== 0) {
          console.log(chalk.red(`${shell.pwd().replace(projectRootDir, '')} > npm ${command} <== FAILED`));
          console.log(chalk.red(`${stderr}`));
          console.log();
          return reject({
            exitCode: code,
          });
        }
        console.log(chalk.green(`${shell.pwd().replace(projectRootDir, '')} > npm ${command} <== COMPLETED`));
        return resolve();
      });
    });
  }
  npm.run = run;

  function link(source, target) {
    return run(`link ${source}`, target);
  }
  npm.link = link;

  function unlink(source, target) {
    return run(`unlink ${source}`, target);
  }
  npm.unlink = unlink;

  function install(target) {
    return run('install', target);
  }
  npm.install = install;

  function build(target) {
    return run('run build', target);
  }
  npm.build = build;

  return npm;
}());
