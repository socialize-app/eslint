import { createBasicConfig } from '@open-wc/building-rollup';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import merge from 'deepmerge';
import typescript from '@rollup/plugin-typescript';
import multi from '@rollup/plugin-multi-entry';


const baseConfig = createBasicConfig();

export default merge(baseConfig, {
  input: './src/**/*.ts',
  output: [
    {
      dir: 'dist',
      format: 'cjs',
      entryFileNames: 'index.cjs',
    },
    {
      dir: 'dist',
      format: 'esm',
      entryFileNames: 'index.mjs',
    },
  ],
  plugins: [
    typescript({
      outDir: 'dist',
      declaration: true,
      declarationDir: 'dist',
      rootDir: 'src',
    }),
    nodeResolve(),
    commonjs(),
    json(),
    multi(),
  ],
});
