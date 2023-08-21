<template>
  <!-- vue3组件目录可以没有根标签 -->
  <!-- hello是自定义指令 -->
  <demo msg="111" name="222" @hello="showHelloMessage">
    <!-- 随便写个插槽 -->
    <template v-slot:qwe>
      <span>上规格</span>
    </template>
  </demo>
</template>

<script>
import { reactive, } from 'vue'
import Demo from './components/demo.vue'
export default {
  name: 'App',
  components: {
    Demo
  },
  setup () {
    function showHelloMessage (value) {
      alert(`触发了hello自定义事件,我收到的参数是${value}`)
    }

    return {
      showHelloMessage
    }
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
