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
* [___API___](#api)
* [___Usage___](#usage)
* [___License___](#license)

# Demo
[__Demo__](https://vuejs-pt.github.io/vue-alert/example/dist/)

# Requirements
- [Vue.js](https://github.com/vuejs/vue) `2.x`  

# Installation
```bash
# npm
$ npm install @vuejs-pt/vue-alert

# yarn
$ yarn add @vuejs-pt/vue-alert
```

# API

Available methods inside a VueJS component

The same parameters apply to all the methods in `$alert` expect the method `hide` and `clearDefault`

Parameter | Type |Default| Description
--------- | ---- | ------|-----------
duration | `number` | 5000 | The duration for which the alert will be shown
forceRender | `boolean` | `true` | Force render when alert contents are changed
message | `string` | _empty_ | Message to be shown
transition | `string` | `fade` | Transition fade when switching between alerts, can be [user defined](https://vuejs.org/v2/guide/transitions.html)
type | `string` | `fade` | Type of transition

If any of the values is not present on the method call then the default values will be used.

## Set default values
```javascript
this.$alert.setDefault({
  duration,
  forceRender,
  message,
  transition,
  type
})
```

## Clear default values
```javascript
this.$alert.clearDefault()
```

## Show an alert
```javascript
this.$alert.show({
  duration,
  forceRender,
  message,
  transition,
  type
})
```

## Show an alert type info
```javascript
this.$alert.info({
  duration,
  forceRender,
  message,
  transition
})
```

## Show an alert type success
```javascript
this.$alert.success({
  duration,
  forceRender,
  message,
  transition
})
```

## Show an alert type warning
```javascript
this.$alert.warning({
  duration,
  forceRender,
  message,
  transition
})
```

## Show an alert type danger
```javascript
this.$alert.danger({
  duration,
  forceRender,
  message,
  transition
})
```

## Hide alert
```javascript
this.$alert.hide()
```

# Usage

The component `vue-alert` must be included either in the component using the `vue-alert` or a parent of this component, for example if there's a `vue-alert` instance at the root of the app.

It is possible to access the `vue-alert` component using the `$alert` variable on the component instance as shown in the below example.

The default bootstrap style are applied to the alert but this can be overriden by applying a new style to the following classes:
- alert
- alert-info
- alert-success
- alert-warning
- alert-danger

The following transitions are available:
- fade with force render
- smooth without force render

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
  <div>
    <h1>Example component</h1>
    <button class="btn btn-default" @click="showAlert">Click to use vue-alert</button>
  </div>
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