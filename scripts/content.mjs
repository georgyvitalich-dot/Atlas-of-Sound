// Entry point for `npm run validate:data` and `npm run content:report`.
// Uses Vite's module runner so the app's TS data modules load unchanged.
import { runnerImport } from 'vite';

const args = process.argv.slice(2);
const entry = args.includes('--selftest') ? '/scripts/validation-selftest.ts' : '/scripts/content-cli.ts';
const { module } = await runnerImport(entry, {
  configFile: false,
  logLevel: 'error',
});
const errors = await module.main(args);
process.exit(errors > 0 ? 1 : 0);
