import Vue from 'vue'
import VueAlert from '../dist/vuealert.common.js'
import Example from './Example.vue'

/* eslint-env node */
if (process.env.NODE_ENV !== 'production') {
  const VueAlertDev = require('../src/index.js').default
  Vue.use(VueAlertDev)
} else {
  Vue.use(VueAlert)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { Example },
  template: '<Example/>'
})
