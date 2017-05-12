import Vue from 'vue/dist/vue.js'
import VueAlert from '../index'

describe('vuealert.min.js', () => {
  it('should install correctly', () => {
    Vue.use(VueAlert)
    const vm = new Vue({
      template: '<div id="app"><vue-alert></vue-alert></div>'
    }).$mount()
    expect(vm.$alert).not.toBeNull()
  })
  it('should warn if there is no vue-alert component', () => {
    global.console = { warn: jest.fn() }
    Vue.use(VueAlert)
    const vm = new Vue({
      template: '<div></div>'
    }).$mount()
    expect(vm.$alert).toBeNull()
    expect(console.warn).toBeCalledWith('Vue-alert component must be part of this component scope or any of the parents scope.')
  })
})
