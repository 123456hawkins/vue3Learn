<template>
  <h2>姓名:{{ person.name }}</h2>
  <h2>年龄:{{ person.age }}</h2>
  <h2>薪资:{{ person.job.j1.salary }}</h2>
  <h2 v-if="person.car">车:{{ person.car }}</h2>
  <button @click="person.name += '111'">增长姓名</button>

  <button @click="person.age++">增长年龄</button>
  <button @click="person.job.j1.salary++">增长薪资</button>
  <button @click="showRawperson">输出最原始的person</button>

  <button @click="addcar">添加一台车</button>
  <button @click="person.car.name += '1'">修改车名</button>

  <button @click="person.car.price++">修改车价格</button>
</template>

<script>
import { reactive, ref, shallowReadonly, toRef, toRefs, toRaw, markRaw } from 'vue';
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

    function showRawperson () {
      // toRaw智能处理对象数据
      // 用于读取响应式对象对应的普通对象，对这个普通对象的所有操作不会引起页面刷新
      const p = toRaw(person)
      console.log(p);
    }
    function addcar () {
      let car = { name: 'bencz', price: 99 }
      person.car = car
      // 当使用markRaw时，标记其为一个对象，不用成为响应式
      // 应用场景，当渲染具有不可变数据源的大列表时，跳过响应式转换可以提高性能
      person.car = markRaw(car)
    }
    return {
      person,
      name2: toRef(person, 'name'),
      age2: toRef(person, 'age'),
      salary2: toRef(person.job.j1, 'salary'),
      // ...将person摊开，相当于上面写法
      // ...toRefs(person),
      x,
      sum,
      showRawperson,
      addcar
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
