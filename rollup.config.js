import vue from 'rollup-plugin-vue'
import buble from 'rollup-plugin-buble'
// import uglify from 'rollup-plugin-uglify'
import babel from 'rollup-plugin-babel'

import { default as vueConfig, pack } from './config/rollup-plugin-vue.config'

const config = {
  entry: 'src/index.js',
  dest: `dist/${pack.name}.min.js`,
  format: 'iife',
  moduleName: pack.name,
  plugins: [
    vue(vueConfig),
    babel(),
    buble()
    // uglify()
  ],
  useStrict: false
}

export default config
