import VueAlert from '../index'
import { createLocalVue, mount } from '@vue/test-utils'

/* global global */
describe('vuealert.min.js', () => {
  it('should install correctly', () => {
    const localVue = createLocalVue()
    localVue.use(VueAlert)
    const vm = mount({template: '<div id="app"><vue-alert></vue-alert></div>'}, {
      localVue
    }).vm
    expect(vm.$alert).toBeDefined()
  })

  it('should warn if there is no vue-alert component', () => {
    global.console = { warn: jest.fn() }
    const localVue = createLocalVue()
    localVue.use(VueAlert)
    const vm = mount({template: '<div></div>'}, {
      localVue
    }).vm
    expect(vm.$alert).toBeNull()
    expect(console.warn).toBeCalledWith('VueAlert component must be part of this component scope or any of the parents scope.')
    console.warn.mockRestore()
  })

  it('should NOT warn if there is no vue-alert component AND NODE_ENV is "production"', () => {
    global.console = { warn: jest.fn() }
    process.env.NODE_ENV = 'production'
    const localVue = createLocalVue()
    localVue.use(VueAlert)
    const vm = mount({template: '<div></div>'}, {
      localVue
    }).vm
    expect(vm.$alert).toBeNull()
    expect(console.warn).not.toBeCalled()
    process.env.NODE_ENV = 'test'
    console.warn.mockRestore()
  })

  it('should install only once', () => {
    VueAlert.installed = true
    const localVue = createLocalVue()
    VueAlert.install(localVue)
    expect(localVue.component('vue-alert')).not.toBeDefined()
    VueAlert.installed = false
  })
})
