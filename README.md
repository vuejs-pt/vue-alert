# @vuejs-pt/vue-alert 
[![CircleCI](https://img.shields.io/circleci/project/github/vuejs-pt/vue-alert.svg)](https://circleci.com/gh/vuejs-pt/vue-alert)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/vuejs-pt/vue-alert/master/LICENSE)
[![Vue 2.x](https://img.shields.io/badge/vue-2.x-green.svg)](https://vuejs.org/)
[![npm](https://img.shields.io/npm/v/@vuejs-pt/vue-alert.svg)](https://www.npmjs.com/package/@vuejs-pt/vue-alert)
[![GitHub issues](https://img.shields.io/github/issues/vuejs-pt/vue-alert.svg)](https://github.com/vuejs-pt/vue-alert/issues)

# Table of Contents
* [___Demo___](#demo)
* [___Requirements___](#requirements)
* [___Installation___](#installation)
* [___Usage___](#usage)
* [___License___](#license)

# Demo
[__Demo__](https://vuejs-pt.github.io/vue-alert/dist/example/)

# Requirements
- [Vue.js](https://github.com/vuejs/vue) `2.x`  

# Installation
```bash
# npm
$ npm install @vuejs-pt/vue-alert

# yarn
$ yarn add @vuejs-pt/vue-alert
```


# Usage

The component vue-alert must be included either in the component using the vue-alert or a parent of this component, for example if there's a vue-alert instance at the root of the app.

It is possible to access the vue-alert component using the $alert variable on the component instance as shown below

main.js

```javascript
import Vue from 'vue'
import VueAlert from 'vue-alert'
import App from './App'

Vue.use(VueAlert)

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})


```

App.vue

```html
<template>
    <div id="app">
        <vue-alert></vue-alert>
        <example></example>
    </div>
</template>

<script>
import Example from './Example'

export default {
  components: {
    Example
  },
  mounted () {
    this.$alert.success({ message: 'Component mounted!' })
  }
}
</script>

<style>
.vue-alert {
  margin-top: 10px;
}
</style>
```

Example.vue

```html
<template>
  <h1>Example component</h1>
        <button class="btn btn-default" @click="showAlert">Click to use vue-alert</button>
</template>

<script>
export default {
  methods: {
    showAlert () {
      this.$alert.show({
        message: 'Clicked the button!'
      })
    }
  }
}
</script>
```

# License

[The MIT License](http://opensource.org/licenses/MIT)