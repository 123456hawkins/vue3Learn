<template>
  <div class="app">
    <h2>我是app组件</h2>
    <h3>车名：{{ name }}</h3>
    <h3>价格：{{ price }}</h3>
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
    // 使用provide和inject时间复组件和后代组件之间的通信
    let car = reactive({ name: 'bencz', price: '40w' })
    provide('car', car)//给自己的后代组件传递数据
    return { ...toRefs(car) }
  }

}
</script>

<style>
.app {
  background-color: green;
  padding: 10px;
}
</style>