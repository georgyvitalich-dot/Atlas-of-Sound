// Builds review/atlas-of-sound-source.md — the whole source code in one file,
// convenient to upload to an external reviewer (e.g. ChatGPT).
// Usage: npm run review
import { readdirSync, readFileSync, statSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, relative, extname } from 'node:path';

const root = process.cwd();
const INCLUDE_DIRS = ['src'];
const INCLUDE_FILES = [
  'package.json', 'tsconfig.json', 'vite.config.ts', 'index.html', 'README.md', 'CREDITS.md',
];
const EXT_LANG = { '.ts': 'ts', '.tsx': 'tsx', '.css': 'css', '.json': 'json', '.html': 'html', '.md': 'md', '.mjs': 'js' };

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}

const files = [
  ...INCLUDE_FILES.map((f) => join(root, f)),
  ...INCLUDE_DIRS.flatMap((d) => walk(join(root, d))).sort(),
];

let out = `# Atlas of Sound — full source code\n\n`;
out += `Generated ${new Date().toISOString()}. ${files.length} files.\n`;
out += `Not included: node_modules, dist, public/textures (NASA JPEG textures, see CREDITS.md).\n\n`;
out += `## File tree\n\n\`\`\`\n${files.map((f) => relative(root, f).replaceAll('\\', '/')).join('\n')}\n\`\`\`\n\n`;

for (const f of files) {
  const rel = relative(root, f).replaceAll('\\', '/');
  const lang = EXT_LANG[extname(f)] ?? '';
  const fence = rel.endsWith('.md') ? '````' : '```';
  out += `## ${rel}\n\n${fence}${lang}\n${readFileSync(f, 'utf8').trimEnd()}\n${fence}\n\n`;
}

mkdirSync(join(root, 'review'), { recursive: true });
writeFileSync(join(root, 'review', 'atlas-of-sound-source.md'), out);
console.log(`review/atlas-of-sound-source.md — ${files.length} files, ${(out.length / 1024).toFixed(0)} KB`);
