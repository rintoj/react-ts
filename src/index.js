#!/usr/bin/env node

const serve = require('./serve');
const build = require('./build');
const program = require('commander').version('0.0.1');
const createApp = require('./create-app');

function registerCommand(command, description, callback) {
  program.command(command).description(description).action(callback);
}

registerCommand('create <name>', 'Create react application with TypeScript and WebPack', name => createApp(name));
registerCommand('serve [port]', 'Serve the project', port => serve(port));
registerCommand('build [environment]', 'Build the project', environment => build(environment));

program.action(function() {
  program.help();
})

program.parse(process.argv);
// console.log(program)
if (program.args.length === 0) {
  program.help();
}