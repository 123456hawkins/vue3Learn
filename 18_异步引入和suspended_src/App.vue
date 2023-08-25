<template>
  <div class="app">
    <h2>我是app组件</h2>
    <Suspense>
      <!-- 成功加载的内容 -->
      <template v-slot:default>
        <Child></Child>
      </template>
      <!-- 等待加载的内容 -->
      <template v-slot:fallback>
        <h3>稍等，加载中</h3>
      </template>
    </Suspense>
  </div>
</template>

<script>
// 静态引入
// import  Child  from './components/Child.vue'
// 异步引入
// 提高页面渲染性能
import { defineAsyncComponent } from 'vue';
const Child = defineAsyncComponent(() => import('./components/Child'))
export default {
  name: 'App',
  components: { Child },
  setup () {
    return {}
  }

}
</script>

<style>
.app {
  background-color: green;
  padding: 10px;
}
</style>