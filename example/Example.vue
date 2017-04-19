<template>
  <div id="app" class="container">
    <div class="row">
      <h1>Example vue-alert</h1>
      <vue-alert></vue-alert>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    this.$alert.setDefault({ message: 'Default message' })
    this.$alert.success({ message: 'Component mounted!' })
  }
}
</script>
