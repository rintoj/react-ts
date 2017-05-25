#!/usr/bin/env node

const chalk = require('chalk')
const packageJson = require('../package.json');
const program = require('commander').version(packageJson.version || '0.0.1');
const createApp = require('./create-app');

function registerCommand(command, description, callback, options) {
  const cmd = program.command(command);
  cmd.description(description);

  (options || []).forEach(option => cmd.option(option[0], option[1]))

  cmd.action(callback);
}

registerCommand('create <name> -s', `Create react application with TypeScript and WebPack

  ${chalk.gray(`Options:
      -s, --skip-git     Skip git initialization
      -i, --install      Install node modules
  `)}`, (name, options) => {
  createApp(name, {
    installModules: options.install,
    noUsageInfo: false,
    skipGit: options.skipGit
  })
}, [
  ['-s,--skip-git', 'Skip git initialization'],
  ['-i,--install', 'Install node modules']
]);
registerCommand('serve [port]', 'Serve the project', port => require('./serve')(port));
registerCommand('build [environment]', 'Build the project', environment => require('./build')(environment));

program.action(() => {
  program.help();
});

program.parse(process.argv);

if (program.args.length === 0) {
  program.help();
}