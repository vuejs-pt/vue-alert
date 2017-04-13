/**
 * Install plugin.
 */
import VueAlert from './VueAlert.vue'

function plugin (Vue, options) {
  if (plugin.installed) return
  plugin.installed = true
  Object.assign(VueAlert.options, options)
  Vue.component('vue-alert', VueAlert)
  Object.defineProperties(Vue.prototype, {
    $alert: {
      get () {
        let el = this
        while (el) {
          for (let i = 0; i < el.$children.length; i++) {
            const child = el.$children[i]
            if (child.$options._componentTag === 'vue-alert') {
              return child
            }
          }
          el = el.$parent
        }
        if (process.env.NODE_ENV !== 'production') {
          console.warn('Vue-alert component must be part of this component scope or any of the parents scope.')
        }
        return null
      }
    }
  })
}

export default plugin

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}
