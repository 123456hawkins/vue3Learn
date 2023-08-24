<template>
  <!-- vue3组件目录可以没有根标签 -->
  <h2>求和：{{ sum }}</h2>
  <button @click="sum++">点我++</button>
  <h2>鼠标坐标：x:{{ point.x }},y:{{ point.y }}</h2>
</template>

<script>
import { ref } from 'vue';
import usePoint from '../hooks/usePoint'
export default {
  name: 'App',
  components: {
  },
  setup () {
    let sum = ref(19)
    // usePoint相当于mixin，方便复用js代码
    let point = usePoint()
    // 组合式api使用生命周期钩子
    // 组合式生命周期钩子执行时机比配置项的要快


    return {
      sum,
      point
    }
  },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
