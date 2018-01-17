import Example from '../Example.vue'
import { mount, shallow } from '@vue/test-utils'

describe('Example.vue', () => {
  it('has correct name', () => {
    expect(Example).toBeDefined()
    expect(Example.name).toBe('example')
  })

  it('should have a data with transitions and types', () => {
    const defaultData = Example.data()
    expect(defaultData).toMatchObject({
      transitions: ['fade', 'smooth'],
      types: ['success', 'info', 'warning', 'danger']
    })
  })

  describe('instance', () => {
    describe('methods', () => {
      let vm
      const $alert = {
        clearDefault: jest.fn(),
        setDefault: jest.fn(),
        success: jest.fn(),
        hide: jest.fn()
      }

      beforeEach(() => {
        for (const value of Object.values($alert)) {
          value.mockReset()
        }
        vm = shallow(Example, {
          mocks: {
            $alert
          }
        }).vm
      })

      describe('mounted', () => {
        it('should exist', () => {
          expect(Example.mounted).toBeDefined()
        })
        it('should trigger this.$alert.setDefault and this.$alert.success', () => {
          vm = mount(Example, {
            mocks: {
              $alert
            }
          }).vm
          expect(vm.$alert.setDefault).toBeCalledWith({ message: 'Default message' })
          expect(vm.$alert.success).toBeCalledWith({ message: 'Component mounted!' })
        })
      })

      describe('show', () => {
        it('should exist', () => {
          expect(vm.show).toBeDefined()
        })
        it('should trigger this.$alert[success] when receiving an HTML event with innerHTML "success"', () => {
          vm.show({
            target: {
              innerHTML: 'success'
            }
          })
          expect(vm.$alert['success']).toBeCalledWith({ message: 'Alert type success' })
        })
      })

      describe('setTransition', () => {
        it('should exist', () => {
          expect(vm.setTransition).toBeDefined()
        })
        it('should trigger this.$alert.setDefault with the transition received from an HTML event', () => {
          vm.setTransition({
            target: {
              innerHTML: 'foo'
            }
          })
          expect(vm.$alert.setDefault).toBeCalledWith({ transition: 'foo', forceRender: false })
        })
        it('should trigger $his.$alert.setDefault with the transition and forceRender true if received from an HTML event with "fade"', () => {
          vm.setTransition({
            target: {
              innerHTML: 'fade'
            }
          })
          expect(vm.$alert.setDefault).toBeCalledWith({ transition: 'fade', forceRender: true })
        })
      })

      describe('callSetDefault', () => {
        it('should exist', () => {
          expect(vm.callSetDefault).toBeDefined()
        })
        it('should trigger this.$alert.setDefault with message and type', () => {
          vm.callSetDefault()
          expect(vm.$alert.setDefault).toBeCalledWith({ message: 'Default message', type: 'info' })
        })
      })

      describe('callClearDefault', () => {
        it('should exist', () => {
          expect(vm.callClearDefault).toBeDefined()
        })
        it('should trigger this.$alert.setDefault', () => {
          vm.callClearDefault()
          expect(vm.$alert.setDefault).toBeCalled()
        })
      })

      describe('callHide', () => {
        it('should exist', () => {
          expect(vm.callHide).toBeDefined()
        })
        it('should trigger this.$alert.hide', () => {
          vm.callHide()
          expect(vm.$alert.hide).toBeCalled()
        })
      })
    })
  })
})
