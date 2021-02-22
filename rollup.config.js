import graphql from '@rollup/plugin-graphql';
import typescript from '@rollup/plugin-typescript';

const config = {
  context: 'undefined',
  input: 'api/index.ts',
  output: {
    file: 'api/dist/bundle.js',
    format: 'cjs',
    sourcemap: true,
  },
  plugins: [typescript(), graphql()],
};

export default config;
