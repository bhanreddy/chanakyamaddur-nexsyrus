#!/usr/bin/env node
'use strict';

// Full release entry point: GitHub push, clean Android prebuild and EAS upload.
const { main } = require('./release-schools.cjs');

if (require.main === module) {
  main(process.argv.slice(2), { requiredMode: 'build', entrypoint: 'github-eas-release.cjs' })
    .catch(error => { console.error(`\nStopped: ${error.message}`); process.exitCode = 1; });
}
