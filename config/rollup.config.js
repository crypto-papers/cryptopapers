import graphql from '@rollup/plugin-graphql';
import typescript from 'rollup-plugin-typescript2';

const config = {
  context: 'undefined',
  input: 'api/src/index.ts',
  output: {
    file: 'api/dist/bundle.js',
    format: 'cjs',
    sourcemap: true,
  },
  plugins: [typescript(), graphql()],
};

export default config; // eslint-disable-line import/no-unused-modules -- Used in build script
