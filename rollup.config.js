import vue from 'rollup-plugin-vue'
import buble from 'rollup-plugin-buble'
import uglify from 'rollup-plugin-uglify'
import babel from 'rollup-plugin-babel'

import { default as vueConfig, name } from './config/rollup-plugin-vue.config'

const config = {
  entry: 'src/index.js',
  dest: `dist/${name}.min.js`,
  format: 'iife',
  moduleName: name,
  plugins: [
    vue(vueConfig),
    babel(),
    buble(),
    uglify()
  ],
  useStrict: false
}

export default config
