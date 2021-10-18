// 处理vue文件插件
import vue from 'rollup-plugin-vue'
// 处理css文件插件
import css from 'rollup-plugin-css-only'
// 处理ts插件
import typescript from 'rollup-plugin-typescript2'
// 用于在节点单元模块中使用第三方模块
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { name } from './package.json'
// 输出打包后的文件名称type 1.esm 2.umd
const file = (type) => `dist/${name}.${type}.js`

const overrides = {
  compilerOptions: { declaration: true }, // 生成.d.ts的文件
  exclude: ['tests/**/*.ts', 'tests/**/*.tsx', 'docs/**/*.ts', 'docs/**/*.tsx']
  // include: ['packages']
}

export { name, file }
export default {
  input: 'packages/index.ts',
  output: {
    name,
    file: file('esm'),
    format: 'es'
  },
  plugins: [
    nodeResolve(),
    typescript({ tsconfigOverride: overrides }),
    vue(),
    css({ output: 'bundle.css' }) // 可自行修改output文件名
  ],
  external: ['vue', 'element-plus'] // 规定哪些是外部引用的模块
}
