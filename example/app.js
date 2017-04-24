import Vue from 'vue'
import Example from './Example.vue'

const VueAlert = process.env.NODE_ENV === 'production' ? require('../dist/vuealert.common.js').default : require('../src/index.js').default

Vue.use(VueAlert)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<Example/>',
  components: { Example }
})
