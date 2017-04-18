import Vue from 'vue'
import VueAlert from '../VueAlert.vue'

Vue.config.productionTip = false

describe('VueAlert.vue', () => {
  it('has correct name', () => {
    expect(VueAlert).toBeDefined()
    expect(VueAlert.name).toBe('vue-alert')
  })

  it('should have a data with empty entries and loading true', () => {
    const defaultData = VueAlert.data()
    expect(defaultData).toMatchObject({
      alertMessage: '',
      alertType: '',
      alertTransition: '',
      default: {
        message: '',
        type: 'info',
        transition: 'fade',
        delay: 5000
      }
    })
  })

  describe('instance', () => {
    describe('methods', () => {
      let vm

      beforeEach(() => {
        const Ctor = Vue.extend(VueAlert)
        vm = new Ctor().$mount()
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
        it('should set delay', () => {
          vm.setDefault({ delay: 'mockDelay' })
          expect(vm.default.delay).toEqual('mockDelay')
        })
        it('should set transition', () => {
          vm.setDefault({ transition: 'mockTransition' })
          expect(vm.default.transition).toEqual('mockTransition')
        })
        it('should use defaults', () => {
          vm.default.message = 'mockMessage'
          vm.default.type = 'mockType'
          vm.default.delay = 'mockDelay'
          vm.default.transition = 'mockTransition'
          vm.setDefault()
          expect(vm.default.message).toEqual('mockMessage')
          expect(vm.default.type).toEqual('mockType')
          expect(vm.default.delay).toEqual('mockDelay')
          expect(vm.default.transition).toEqual('mockTransition')
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
            message: 'mockMessage',
            type: 'mockType',
            delay: 'mockDelay',
            transition: 'mockTransition'
          })
          expect(vm.alertMessage).toEqual('mockMessage')
          expect(vm.alertType).toEqual('alert-mockType')
          expect(vm.alertTransition).toEqual('mockTransition')
        })
        it('should use defaults', () => {
          vm.setDefault({
            message: 'mockMessage',
            type: 'mockType',
            delay: 'mockDelay',
            transition: 'mockTransition'
          })
          vm.show()
          expect(vm.alertMessage).toEqual('mockMessage')
          expect(vm.alertType).toEqual('alert-mockType')
          expect(vm.alertTransition).toEqual('mockTransition')
        })
        it('should clearTimeout if already set', () => {
          vm.alertTimeout = 'mockTimeout'
          vm.show()
          expect(clearTimeout).toBeCalledWith('mockTimeout')
        })
        it('should setTimeout', () => {
          vm.show({
            delay: 1000
          })
          expect(setTimeout).toBeCalled()
          expect(setTimeout.mock.calls[0][1]).toBe(1000)
          vm.show = jest.fn()
          jest.runAllTimers()
          expect(vm.show).toBeCalledWith({
            delay: false
          })
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
