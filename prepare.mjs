#!/usr/bin/env node

// Simple prepare script for GitHub Actions
// This script can be extended to modify package.json or other build metadata

const runNumber = process.argv[2];

if (runNumber) {
  console.log(`Preparing build for run number: ${runNumber}`);
  console.log(`Build version: 0.0.0-alpha.${runNumber}`);
} else {
  console.log('No run number provided, using default version');
}

console.log('Build preparation complete');
