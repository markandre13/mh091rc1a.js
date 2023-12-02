import typescript from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

export default {
    input: './src/main.ts',
    output: {
      name: 'makehuman',
      file: 'dist/mh091rc1a.js',
      format: 'iife',
      sourcemap: true
    },
    plugins: [
        typescript({
            tsconfigOverride: {
                compilerOptions: {
                    module: "esnext",
                    declaration: true
                },
                include: [ "src" ]
            },
            "useTsconfigDeclarationDir": true,
            sourceMap: true
        }),
        nodeResolve(),
        commonjs(),
        terser()
    ]
}
