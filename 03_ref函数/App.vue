<template>
  <!-- vue3组件目录可以没有根标签 -->
  <h3>一个人的信息</h3>
  <h4>姓名:{{ name }}</h4>
  <h4>年龄:{{ age }}</h4>
  <h4>职业:{{ job.type }}</h4>
  <h4>薪水:{{ job.salary }}</h4>
  <button @click="changInfo"> 改变信息</button>
</template>

<script>
import { ref } from 'vue'
/**
 * 
 * 
##  2.ref函数

- 作用: 定义一个响应式的数据
- 语法: ```const xxx = ref(initValue)``` 
  - 创建一个包含响应式数据的<strong style="color:#DD5145">引用对象（reference对象，简称ref对象）</strong>。
  - JS中操作数据： ```xxx.value```
  - 模板中读取数据: 不需要.value，直接：```<div>{{xxx}}</div>```
- 备注：
  - 接收的数据可以是：基本类型、也可以是对象类型。
  - 基本类型的数据：响应式依然是靠``Object.defineProperty()``的```get```与```set```完成的。
  - 对象类型的数据：内部 <i style="color:gray;font-weight:bold">“ 求助 ”</i> 了Vue3.0中的一个新函数—— ```reactive```函数。
 */

export default {
  name: 'App',
  components: {
  },
  setup () {
    // 数据(不是响应式数据)
    // let name = 'zhangsan'
    // let age = 10

    // 响应式数据，处理成RefImpl对象
    let name = ref('zhangsan')
    let age = ref(10)
    // 对象数据类型，处理成Proxy对象
    let job = ref({
      type: '前端工程师',
      salary: '30k'
    })

    // 方法
    function sayHello () {
      alert(`我叫${name.value},我${age.value}岁`)
    }

    function changInfo () {
      // 要加value
      name.value = 'lisi'
      age.value = 48
      job.value.type = 'ui'
      job.value.salary = 900
    }

    return {
      name,
      age,
      sayHello,
      changInfo,
      job
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
