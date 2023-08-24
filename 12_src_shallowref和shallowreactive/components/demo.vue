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
  <h1>x:{{ shallowx }}</h1>
  <button @click="shallowx++">点我x+</button>

  <h2>y:{{ shallowy.y }}</h2>
  <!-- 无法实现响应式 -->
  <button @click="shallowy.y++">点我y+</button>
</template>

<script>
import { reactive, ref, shallowRef, toRef, toRefs, watch } from 'vue';
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
    console.log(x);
    const shallowx = shallowRef(0)
    // shallowRef不支持对象类型,要用shallowReactive
    // 当只需要处理外层数据的变化时，使用shallow。。。可以提高性能
    const shallowy = shallowRef({ y: 0 })
    return {

      person,
      name2: toRef(person, 'name'),
      age2: toRef(person, 'age'),
      salary2: toRef(person.job.j1, 'salary'),
      // ...将person摊开，相当于上面写法
      // ...toRefs(person),
      x,
      shallowx,
      shallowy
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
