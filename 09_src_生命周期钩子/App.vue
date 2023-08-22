<template>
  <!-- vue3组件目录可以没有根标签 -->
  <!-- hello是自定义指令 -->
  <button @click="isShowDemo=!isShowDemo">切换隐藏/显示</button>
  <demo v-if="isShowDemo">
  </demo>
</template>

<script>
import { ref } from 'vue'
import Demo from './components/demo.vue'
export default {
  name: 'App',
  components: {
    Demo
  },
  setup(){
    let isShowDemo=ref(true)
    return {isShowDemo}
  }

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
