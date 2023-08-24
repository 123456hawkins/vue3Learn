<template>
  <h2>姓名:{{ person.name }}</h2>
  <h2>年龄:{{ person.age }}</h2>
  <h2>薪资:{{ person.job.j1.salary }}</h2>
  <button @click="person.name += '111'">增长姓名</button>

  <button @click="person.age++">增长年龄</button>
  <button @click="person.job.j1.salary++">增长薪资</button>


  <h1>toRef的属性:</h1>
  <h2>姓名:{{ name2 }}</h2>
  <h2>年龄:{{ age2 }}</h2>
  <h2>薪资:{{ salary2 }}</h2>

  <h2>当前求和为：{{ sum }}</h2>

  <button @click="sum++">点我加sum</button>
  <h2>当前readonly的person：{{ person }}</h2>
</template>

<script>
import { reactive, readonly, ref, shallowReadonly, toRef, toRefs, } from 'vue';
export default {
  name: 'App',
  components: {
  },
  setup () {
    // toRef作用是要将响应式对象的某个属性单独提供给外部使用时
    let person = reactive({
      name: 'hawkins',
      age: 18,
      job: {
        j1: {
          salary: 100
        }
      }
    })
    const x = toRefs(person)
    const sum = ref(0)
    // 改为只读
    // person=readonly(person)

    // 只有外层数据只读
    person = shallowReadonly(person)


    return {
      person,
      name2: toRef(person, 'name'),
      age2: toRef(person, 'age'),
      salary2: toRef(person.job.j1, 'salary'),
      // ...将person摊开，相当于上面写法
      // ...toRefs(person),
      x,
      sum
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
