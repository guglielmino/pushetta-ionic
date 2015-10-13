#!/usr/bin/env node

var exec = require('child_process').exec;
var sys = require('sys');
var argv = require('yargs').argv;


function puts(error, stdout, stderr) {
	sys.puts(stdout);
}

exec("gulp env_config --env=prod", puts);