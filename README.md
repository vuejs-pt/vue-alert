# vue-alert

<a href="https://circleci.com/gh/vuejs-pt/vue-alert/tree/master"><img src="https://circleci.com/gh/vuejs-pt/vue-alert.png?style=shield&circle-token=:circle-token" alt="Build Status"></a>

# Table of Contents
* [___Requirements___](#requirements)
* [___Installation___](#installation)
* [___Usage___](#usage)
* [___License___](#license)

# Requirements
- [Vue.js](https://github.com/vuejs/vue) `2.x`  

# Installation
```bash
# npm
$ npm install vue-alert

# yarn
$ yarn add vue-alert
```
# Usage

main.js

```javascript
import Vue from 'vue'
import VueAlert from 'vue-alert'
import App from './App'

Vue.use(VueAlert)

new Vue({
  ...App
}).$mount('#app')


```

App.vue

```html
<template>
    <div id="app">
        <vue-alert></vue-alert>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  mounted () {
    this.$alert.show({
      message: 'Component mounted!',
      type: 'success'
    })
  }
}
</script>
```

# License

[The MIT License](http://opensource.org/licenses/MIT)