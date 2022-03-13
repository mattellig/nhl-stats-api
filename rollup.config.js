import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'
import pkg from './package.json'

export default {
    input: './src/index.ts',
    output: [
        {
            file: pkg.main,
            format: 'cjs',
        },
        {
            file: pkg.module,
            format: 'es',
        },
    ],
    external: [
        ...Object.keys(pkg.peerDependencies || {}),
    ],
    watch: {
        include: './src/**',
    },
    plugins: [
        json(),
        typescript({
            typescript: require('typescript'),
        }),
        commonjs(),
        resolve({ preferBuiltins: true }),
    ],
}
