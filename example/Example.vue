<template>
  <div id="app" class="container">
    <h1>Example @vuejs-pt/vue-alert</h1>
    <button class="btn btn-default" v-for="buttonType in this.types" @click="show">{{ buttonType }}</button>
    <vue-alert></vue-alert>
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

.container {
  color: #333;
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 14px;
  width: 1170px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  line-height: 1.42857143;
}

h1 {
  font-size: 36px;
  margin-bottom: 10px;
  font-weight: 500;
}

button {
  padding: 6px 12px;
  margin: 5px;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  color: #333;
  background-color: #fff;
  border-color: #ccc;
}

button:hover {
  color: #333;
  background-color: #e6e6e6;
  border-color: #adadad;
}

p {
  margin: 0;
}

.alert-info {
  color: purple;
}
</style>
