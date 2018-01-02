import path from 'path'
import fs from 'fs'
import vue from 'rollup-plugin-vue'
import buble from 'rollup-plugin-buble'
import uglify from 'rollup-plugin-uglify'
import babel from 'rollup-plugin-babel'
import { minify } from 'uglify-es'

const pack = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../package.json'), 'utf8'))
const name = pack.name.replace(/^.*\/(.*)$/, '$1').replace('-', '')

let cache

const config = {
  input: 'src/index.js',
  output: [
    { format: 'cjs', file: `dist/${name}.common.js`, name }
  ],
  plugins: [
    vue({
      compileTemplate: true,
      css: true
    }),
    babel(),
    buble(),
    uglify({}, minify)
  ],
  strict: false,
  cache
}

export default config
