#!/usr/bin/env node

const program = require('commander');
// const createApp = require('./create-app');

program
  .version('0.0.1')
  .command('create <name>', 'Create new React application with TypeScript and WebPack')
  // .action(createApp)
  .command('command2', 'command2 description')
  .command('command3', 'command3 description')
  .parse(process.argv);
