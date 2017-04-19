<template>
  <div id="app" class="container">
    <div class="row">
      <h1>Example vue-alert</h1>
      <button class="btn btn-default" v-for="buttonType in this.types" @click="show">{{ buttonType }}</button>
      <vue-alert></vue-alert>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      types: ['success', 'info', 'warning', 'danger']
    }
  },
  mounted () {
    this.$alert.setDefault({ message: 'Default message' })
    this.$alert.success({ message: 'Component mounted!' })
  },
  methods: {
    show (event) {
      const type = event.target.innerHTML
      this.$alert[type]({ message: `Alert type ${type}` })
    }
  }
}
</script>

<style>
.vue-alert {
  margin-top: 10px;
}
</style>
