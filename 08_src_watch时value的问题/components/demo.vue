<template>
  <!-- vue3组件目录可以没有根标签 -->
  <h2>求和：{{ sum }}</h2>
  <button @click="sum++">点我++</button>
  <h2>语句：{{ text }}</h2>

  <button @click="text += '!'">点我++</button>

  <h2>姓名:{{ person.name }}</h2>
  <h2>年龄:{{ person.age }}</h2>
  <h2>薪资:{{ person.job.j1.salary }}</h2>
  <button @click="person.name += '111'">增长姓名</button>

  <button @click="person.age++">增长年龄</button>
  <button @click="person.job.j1.salary++">增长薪资</button>
</template>

<script>
import { reactive, ref, watch } from 'vue';
export default {
  name: 'App',
  components: {
  },
  beforeCreate () {
    console.log('----beforeCreate-----');
  },
  setup () {
    let sum = ref(19)
    let text = ref('wefawefaw')
    let person = ref({
      name: 'hawkins',
      age: 18,
      job: {
        j1: {
          salary: 100
        }
      }
    })
    console.log(sum);
    console.log(text);
    console.log(person);
    watch(person, (newv, oldv) => {
      console.log('00发生变化', newv, oldv);
    }, { deep: true })

    return {
      sum,
      text,
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
