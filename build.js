const { build } = require('esbuild');
const pkg = require('./package.json');

const sharedConfig = {
    entryPoints: ['src/index.ts'],
    bundle: true,
    minify: true,
    external: [
        ...Object.keys(pkg.dependencies),
        ...Object.keys(pkg.peerDependencies || {}),
    ],
};

// commonjs
build({
    ...sharedConfig,
    platform: 'node',
    outfile: 'dist/index.js',
});

// esm
build({
    ...sharedConfig,
    platform: 'neutral',
    outfile: 'dist/index.es.js',
    format: 'esm',
});
