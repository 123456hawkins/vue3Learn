<template>
  <!-- vue3组件目录可以没有根标签 -->
  <h3>一个人的信息</h3>
  <h4>姓名:{{ person.name }}</h4>
  <h4>年龄:{{ person.age }}</h4>
  <h5 v-if="person.sex">性别{{ person.sex }}</h5>
  <h4>职业:{{ person.job.type }}</h4>
  <h4>薪水:{{ person.job.salary }}</h4>
  <h5>c:{{ person.job.a.b.c }}</h5>
  <h5>hobby:{{ person.hobby }}</h5>
  <button @click="changInfo"> 改变信息</button>
  <button @click="addSex">添加性别</button>
  <button @click="delSex">删除性别</button>
</template>

<script>
import { reactive, } from 'vue'
export default {
  name: 'App',
  components: {
  },
  setup () {


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
      person.job.type = 'ui'
      person.job.salary = 900
      person.job.a.b.c = 0
    }
    function addSex () {
      person.sex = 'nan'
    }
    function delSex () {
      delete person.sex
    }

    return {
      person,
      sayHello,
      changInfo,
      addSex,
      delSex
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
