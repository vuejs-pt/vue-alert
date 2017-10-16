import VueAlert from '../index'
import { createLocalVue, mount } from 'vue-test-utils'

/* global global */
describe('vuealert.min.js', () => {
  it('should install correctly with vue-test-utils', () => {
    const localVue = createLocalVue()
    localVue.use(VueAlert)
    const vm = mount({template: '<div id="app"><vue-alert></vue-alert></div>'}, {
      localVue
    }).vm
    expect(vm.$alert).toBeDefined()
  })
  
  it('should warn if there is no vue-alert component with vue-test-utils', () => {
    global.console = { warn: jest.fn() }
    const localVue = createLocalVue()
    localVue.use(VueAlert)
    const vm = mount({template: '<div></div>'}, {
      localVue
    }).vm
    expect(vm.$alert).toBeNull()
    expect(console.warn).toBeCalledWith('Vue-alert component must be part of this component scope or any of the parents scope.')
  })
})
