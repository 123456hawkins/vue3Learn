<template>
  <!-- vue3组件目录可以没有根标签 -->
  <h3>一个人的信息</h3>
  <h4>姓名:{{ name }}</h4>
  <h4>年龄:{{ age }}</h4>
  <h4>职业:{{ job.type }}</h4>
  <h4>薪水:{{ job.salary }}</h4>
  <h5>c:{{ job.a.b.c }}</h5>
  <h5>hobby:{{ hobby }}</h5>
  <button @click="changInfo"> 改变信息</button>

  <hr>
  <h2>使用rective对象写出来的数据</h2>
  <h3>一个人的信息</h3>
  <h4>姓名:{{ person.name }}</h4>
  <h4>年龄:{{ person.age }}</h4>
  <h4>职业:{{ person.job.type }}</h4>
  <h4>薪水:{{ person.job.salary }}</h4>
  <h5>c:{{ person.job.a.b.c }}</h5>
  <h5>hobby:{{ person.hobby }}</h5>
</template>

<script>
import { reactive, ref } from 'vue'
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

/**
 * ## 3.reactive函数

- 作用: 定义一个<strong style="color:#DD5145">对象类型</strong>的响应式数据（基本类型不要用它，要用```ref```函数）
- 语法：```const 代理对象= reactive(源对象)```接收一个对象（或数组），返回一个<strong style="color:#DD5145">代理对象（Proxy的实例对象，简称proxy对象）</strong>
- reactive定义的响应式数据是“深层次的”。
- 内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据进行操作。
 */
export default {
  name: 'App',
  components: {
  },
  setup () {
    // 数据(不是响应式数据)
    // let name = 'zhangsan'
    // let age = 10

    // 响应式数据，处理成RefImpl对象,使用ref函数
    let name = ref('zhangsan')
    let age = ref(10)


    // 对象数据类型，处理成Proxy对象，使用reactive函数
    let job = reactive({
      type: '前端工程师',
      salary: '30k',
      a: {
        b: {
          c: 1
        }
      }
    })
    // 数组类型也要使用rf函数
    let hobby = ref(['抽烟', '喝酒', '烫头'])

    // 第二种定义方法，全部数据写成对象
    // const 代理对象= reactive(源对象)
    // 这个为代理对象(Proxy的实例对象)
    let person = reactive({
      name: 'zhangsan',
      age: 10,
      job: {
        type: '前端工程师',
        salary: '30k',
        a: {
          b: {
            c: 1
          }
        }
      },
      hobby: ['抽烟', '喝酒', '烫头']
    })

    // 方法
    function sayHello () {
      alert(`我叫${name.value},我${age.value}岁`)
    }

    function changInfo () {
      // 要加value
      name.value = 'lisi'
      age.value = 48
      job.type = 'ui'
      job.salary = 900
      job.a.b.c = 0
      console.log(job);
    }

    return {
      name,
      age,
      sayHello,
      changInfo,
      job,
      hobby,
      person
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
