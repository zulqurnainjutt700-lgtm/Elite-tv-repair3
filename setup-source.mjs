import { readFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { gunzipSync } from 'node:zlib';
import { resolve, dirname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = dirname(fileURLToPath(import.meta.url));
const encoded = readFileSync(resolve(root, 'site-source.base64'), 'utf8').trim();
const files = JSON.parse(gunzipSync(Buffer.from(encoded, 'base64')).toString('utf8'));
for (const [relative, value] of Object.entries(files)) {
  const target = resolve(root, relative);
  if (!target.startsWith(root + sep)) throw new Error('Invalid source path');
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, Buffer.from(value, 'base64'));
}
console.log(`Prepared ${Object.keys(files).length} website source files.`);
