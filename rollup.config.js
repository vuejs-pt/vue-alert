import vue from 'rollup-plugin-vue'
import buble from 'rollup-plugin-buble'
import uglify from 'rollup-plugin-uglify'
import babel from 'rollup-plugin-babel'
import { minify } from 'uglify-js-harmony'

import { default as vueConfig, name } from './config/rollup-plugin-vue.config'

let cache

const config = {
  entry: 'src/index.js',
  targets: [
    { format: 'es', dest: `dist/${name}.js` },
    { format: 'cjs', dest: `dist/${name}.common.js` },
    { format: 'iife', dest: `dist/${name}.min.js`, moduleName: name }
  ],
  moduleName: name,
  plugins: [
    vue(vueConfig),
    babel(),
    buble(),
    uglify({}, minify)
  ],
  useStrict: false,
  cache
}

export default config
