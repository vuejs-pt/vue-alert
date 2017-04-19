<template>
  <transition :name="alertTransition">
    <div class="vue-alert alert" :class="alertType">
      <p>{{alertMessage}}</p>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'vue-alert',
  data () {
    return {
      alertMessage: '',
      alertType: '',
      alertTransition: '',
      default: {
        message: '',
        type: 'info',
        transition: 'fade',
        delay: 5000
      }
    }
  },
  methods: {
    setDefault ({ message = this.default.message, type = this.default.type, delay = this.default.delay, transition = this.default.transition } = {}) {
      this.default.message = message
      this.default.type = type
      this.default.delay = delay
      this.default.transition = transition
      return this
    },
    show ({ message = this.default.message, type = this.default.type, delay = this.default.delay, transition = this.default.transition } = {}) {
      this.alertShow = true
      this.alertMessage = message
      this.alertType = `alert-${type}`
      this.alertTransition = transition
      if (this.alertTimeout) {
        clearTimeout(this.alertTimeout)
      }
      if (delay) {
        this.alertTimeout = setTimeout(() => {
          this.show({
            delay: false
          })
        }, delay)
      }
    },
    hide () {
      this.alertShow = false
    },
    danger (args) {
      this.show({ type: 'danger', ...args })
    },
    info (args) {
      this.show({ type: 'info', ...args })
    },
    success (args) {
      this.show({ type: 'success', ...args })
    },
    warning (args) {
      this.show({ type: 'warning', ...args })
    }
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to {
  opacity: 0
}
</style>
