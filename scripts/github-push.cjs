#!/usr/bin/env node
'use strict';

// GitHub-only entry point. The shared runner enforces this mode on resume too.
const { main } = require('./release-schools.cjs');

if (require.main === module) {
  main(process.argv.slice(2), { requiredMode: 'git-only', entrypoint: 'github-push.cjs' })
    .catch(error => { console.error(`\nStopped: ${error.message}`); process.exitCode = 1; });
}
