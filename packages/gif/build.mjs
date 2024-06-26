import esbuild from 'esbuild';
import {execSync} from 'node:child_process';
import fs from 'node:fs';

const tmp = 'bundled-worker.js';

esbuild.buildSync({
	entryPoints: ['src/worker/worker.ts'],
	platform: 'browser',
	bundle: true,
	outfile: tmp,
	minify: true,
	target: 'es2018',
});

const content = fs.readFileSync(tmp, 'utf8');

fs.writeFileSync(
	'src/worker/source.ts',
	`
// Auto-generated by build.mjs
export const src =
// eslint-disable-next-line no-template-curly-in-string
  ${JSON.stringify(content)};
`.trim()
);

execSync('pnpm exec prettier --write src/worker/source.ts');

fs.unlinkSync(tmp);
