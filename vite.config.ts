import { defineConfig, type Plugin, runnerImport } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Runs the content validator (src/data/validation.ts):
 * - `vite build`: fails the build on data errors;
 * - `vite` (dev): reports in the terminal on start and whenever src/data changes.
 */
function atlasContentValidation(): Plugin {
  const run = async (): Promise<number> => {
    const { module } = await runnerImport<{ main: (args: string[]) => Promise<number> }>(
      '/scripts/content-cli.ts',
      { configFile: false, logLevel: 'error' },
    );
    return module.main([]);
  };
  let timer: ReturnType<typeof setTimeout> | undefined;
  return {
    name: 'atlas-content-validation',
    async buildStart() {
      if (this.environment?.config.command !== 'build') return;
      const errors = await run();
      if (errors > 0) this.error(`Content validation failed with ${errors} error(s) — see the list above.`);
    },
    configureServer(server) {
      const schedule = () => {
        clearTimeout(timer);
        timer = setTimeout(() => void run().catch((e) => server.config.logger.error(String(e))), 300);
      };
      server.httpServer?.once('listening', schedule);
      server.watcher.on('change', (file) => {
        if (file.replaceAll('\\', '/').includes('/src/data/')) schedule();
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), atlasContentValidation()],
  server: { port: 5173, open: false },
});
