<template>
  <input type="text" v-model="keyword">
  <h3>{{ keyword }}</h3>
</template>

<script>
import { ref, customRef } from 'vue'
export default {
  name: 'App',
  setup () {
    function myref (value, delay) {
      // 设置定时器
      let timer
      return customRef((track, trigger) => {
        return {
          get () {
            console.log('从myref中读取数据');
            track()//通知vue追踪value变化
            return value
          },
          set (newVal) {
            console.log('从myref中修改数据');
            // 清除定时器
            clearTimeout(timer)
            timer = setTimeout(() => {
              value = newVal//修改数据
              trigger()//通知vue去重新解析模板
            }, delay);
          }
        }
      })
    }
    // let keyword=ref('hello')//使用vue提供的ref
    let keyword = myref('hello', 1000)//使用自定义ref,延迟1000ms更新数据
    return {
      keyword
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
