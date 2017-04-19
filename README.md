# vue-alert [![Build Status](https://circleci.com/gh/vuejs-pt/vue-alert/tree/master.png?style=shield)](https://circleci.com/gh/vuejs-pt/vue-alert)

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

The component vue-alert must be included either in the component using the vue-alert or a parent of this component, for example if there's a vue-alert instance at the root of the app.

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
    </div>
</template>

<script>
export default {
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

# License

[The MIT License](http://opensource.org/licenses/MIT)