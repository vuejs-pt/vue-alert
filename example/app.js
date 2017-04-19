import Vue from 'vue'
import VueAlert from '../dist/vuealert.common.js'
import Example from './Example.vue'

Vue.use(VueAlert)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<Example/>',
  components: { Example }
})
