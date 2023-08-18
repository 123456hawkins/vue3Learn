<template>
  <!-- vue3组件目录可以没有根标签 -->
  <h1>一个人的信息</h1>
  <h2>姓名:{{ name }}</h2>
  <h2>年龄:{{ age }}</h2>
  <button @click="sayHello"> 说话</button>
</template>

<script>
/**
 * 组件中所用到的：数据、方法等等，均要配置在setup中。
setup函数的两种返回值：
若返回一个对象，则对象中的属性、方法, 在模板中均可以直接使用。（重点关注！）
若返回一个渲染函数：则可以自定义渲染内容。（了解）
注意vue2和vue3不要混用，会出问题
 */

export default {
  name: 'App',
  components: {
  },
  setup () {
    // 数据
    let name = 'zhangsan'
    let age = 10
    // 方法
    function sayHello () {
      alert(`我叫${name},我${age}岁`)
    }

    return {
      name,
      age,
      sayHello
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
