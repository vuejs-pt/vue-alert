import VueAlert from '../VueAlert.vue'
import { shallow } from '@vue/test-utils'

describe('VueAlert.vue', () => {
  it('has correct name', () => {
    expect(VueAlert).toBeDefined()
    expect(VueAlert.name).toBe('VueAlert')
  })

  it('should have a data with empty entries and loading true', () => {
    const defaultData = VueAlert.data()
    expect(defaultData).toMatchObject({
      alertForceRender: false,
      alertMessage: '',
      alertTransition: '',
      alertType: '',
      default: {
        duration: 5000,
        forceRender: true,
        message: '',
        transition: 'fade',
        type: 'hide'
      }
    })
  })

  describe('instance', () => {
    describe('methods', () => {
      let vm

      beforeEach(() => {
        vm = shallow(VueAlert).vm
      })
      describe('clearDefault', () => {
        it('should exist', () => {
          expect(vm.clearDefault).toBeDefined()
        })
        it('should set alertShow to hide', () => {
          vm.clearDefault()
          expect(vm.default.type).toEqual('hide')
        })
      })

      describe('setDefault', () => {
        it('should exist', () => {
          expect(vm.setDefault).toBeDefined()
        })
        it('should set message', () => {
          vm.setDefault({ message: 'mockMessage' })
          expect(vm.default.message).toEqual('mockMessage')
        })
        it('should set type', () => {
          vm.setDefault({ type: 'mockType' })
          expect(vm.default.type).toEqual('mockType')
        })
        it('should set duration', () => {
          vm.setDefault({ duration: 'mockDuration' })
          expect(vm.default.duration).toEqual('mockDuration')
        })
        it('should set transition', () => {
          vm.setDefault({ transition: 'mockTransition' })
          expect(vm.default.transition).toEqual('mockTransition')
        })
        it('should set forceRender', () => {
          vm.setDefault({ forceRender: 'mockForceRender' })
          expect(vm.default.forceRender).toEqual('mockForceRender')
        })
        it('should use defaults', () => {
          vm.default.message = 'mockMessage'
          vm.default.type = 'mockType'
          vm.default.duration = 'mockDuration'
          vm.default.transition = 'mockTransition'
          vm.default.forceRender = 'mockForceRender'
          vm.setDefault()
          expect(vm.default.message).toEqual('mockMessage')
          expect(vm.default.type).toEqual('mockType')
          expect(vm.default.duration).toEqual('mockDuration')
          expect(vm.default.transition).toEqual('mockTransition')
          expect(vm.default.forceRender).toEqual('mockForceRender')
        })
        it('should return itself', () => {
          expect(vm.setDefault()).toEqual(vm)
        })
      })

      describe('show', () => {
        beforeEach(() => {
          jest.useFakeTimers()
        })
        beforeEach(() => {
          jest.clearAllTimers()
        })
        it('should exist', () => {
          expect(vm.show).toBeDefined()
        })
        it('should set alertShow to true', () => {
          vm.show()
          expect(vm.alertShow).toEqual(true)
        })
        it('should use args', () => {
          vm.show({
            duration: 'mockDuration',
            forceRender: 'mockForceRender',
            message: 'mockMessage',
            transition: 'mockTransition',
            type: 'mockType'
          })
          expect(vm.alertMessage).toEqual('mockMessage')
          expect(vm.alertType).toEqual('alert-mockType')
          expect(vm.alertTransition).toEqual('mockTransition')
          expect(vm.alertForceRender).toEqual('mockForceRender')
        })
        it('should use defaults', () => {
          vm.setDefault({
            duration: 'mockDuration',
            forceRender: 'mockForceRender',
            message: 'mockMessage',
            transition: 'mockTransition',
            type: 'mockType'
          })
          vm.show()
          expect(vm.alertMessage).toEqual('mockMessage')
          expect(vm.alertType).toEqual('alert-mockType')
          expect(vm.alertTransition).toEqual('mockTransition')
          expect(vm.alertForceRender).toEqual('mockForceRender')
        })
        it('should clearTimeout if already set', () => {
          vm.alertTimeout = 'mockTimeout'
          vm.show()
          expect(clearTimeout).toBeCalledWith('mockTimeout')
        })
        it('should show if default.type !== hide', () => {
          vm.default.type = 'info'
          vm.show({
            duration: 1000
          })
          expect(setTimeout).toBeCalled()
          expect(setTimeout.mock.calls[0][1]).toBe(1000)
          vm.show = jest.fn()
          jest.runAllTimers()
          expect(vm.show).toBeCalledWith({
            duration: false
          })
        })
        it('should not show if default.type === hide', () => {
          vm.default.type = 'hide'
          vm.show({
            duration: 1000
          })
          expect(setTimeout).toBeCalled()
          expect(setTimeout.mock.calls[0][1]).toBe(1000)
          vm.show = jest.fn()
          vm.hide = jest.fn()
          jest.runAllTimers()
          expect(vm.show).not.toBeCalled()
          expect(vm.hide).toBeCalled()
        })
        it('should toggle triggerTransition if forceRender === true', () => {
          vm.triggerTransition = false
          vm.show({
            forceRender: true
          })
          expect(vm.triggerTransition).toEqual(true)
          vm.show({
            forceRender: true
          })
          expect(vm.triggerTransition).toEqual(false)
        })
        it('should not toggle triggerTransition if alertForceRender === false', () => {
          vm.triggerTransition = false
          vm.show({
            forceRender: false
          })
          expect(vm.triggerTransition).toEqual(false)
          vm.show({
            forceRender: false
          })
          expect(vm.triggerTransition).toEqual(false)
        })
      })

      describe('hide', () => {
        it('should exist', () => {
          expect(vm.hide).toBeDefined()
        })
        it('should set alertShow to false', () => {
          vm.hide()
          expect(vm.alertShow).toEqual(false)
        })
        it('should clearTimeout if already set', () => {
          vm.alertTimeout = 'mockTimeout'
          vm.hide()
          expect(clearTimeout).toBeCalledWith('mockTimeout')
        })
      })

      describe('danger', () => {
        it('should exist', () => {
          expect(vm.danger).toBeDefined()
        })

        it('should call show', () => {
          vm.show = jest.fn()
          vm.danger({
            message: 'mockMessage'
          })
          expect(vm.show).toBeCalledWith({
            type: 'danger',
            message: 'mockMessage'
          })
        })
      })

      describe('info', () => {
        it('should exist', () => {
          expect(vm.info).toBeDefined()
        })

        it('should call show', () => {
          vm.show = jest.fn()
          vm.info({
            message: 'mockMessage'
          })
          expect(vm.show).toBeCalledWith({
            type: 'info',
            message: 'mockMessage'
          })
        })
      })

      describe('success', () => {
        it('should exist', () => {
          expect(vm.success).toBeDefined()
        })

        it('should call show', () => {
          vm.show = jest.fn()
          vm.success({
            message: 'mockMessage'
          })
          expect(vm.show).toBeCalledWith({
            type: 'success',
            message: 'mockMessage'
          })
        })
      })

      describe('warning', () => {
        it('should exist', () => {
          expect(vm.warning).toBeDefined()
        })

        it('should call show', () => {
          vm.show = jest.fn()
          vm.warning({
            message: 'mockMessage'
          })
          expect(vm.show).toBeCalledWith({
            type: 'warning',
            message: 'mockMessage'
          })
        })
      })
    })
  })
})
