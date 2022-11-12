const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

function main() {
    core.notice("Hello from custom javascript action");
}

main();