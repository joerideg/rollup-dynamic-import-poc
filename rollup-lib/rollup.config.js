import typescript from 'rollup-plugin-typescript2';
import dts from 'rollup-plugin-dts';
import { terser } from '@wwa/rollup-plugin-terser';

export default [
  {
    input: 'src/index.ts',
    output: [{ dir: 'dist', format: 'es', entryFileNames: '[name].d.ts' }],
    plugins: [
      dts(),
    ]
  },
  {
    input: 'src/index.ts',
    output: [{ dir: 'dist', format: 'es' }],
    plugins: [
      typescript({ clean: true }),
      terser(),
    ]
  }
];
