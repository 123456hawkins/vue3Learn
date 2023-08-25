<template>
  <div class="app">
    <h2>我是app组件</h2>
    <Child></Child>
  </div>
</template>

<script>
import { provide, reactive, toRefs } from 'vue'
import Child from './components/Child.vue'

export default {
  name: 'App',
  components: { Child },
  setup () {
    return { }
  }

}
</script>

<style>
.app {
  background-color: green;
  padding: 10px;
}
</style>