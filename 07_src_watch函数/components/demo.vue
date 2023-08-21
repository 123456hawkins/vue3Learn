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
    let person = reactive({
      name: 'hawkins',
      age: 18,
      job: {
        j1: {
          salary: 100
        }
      }
    })
    // 监视
    // 情况一监视ref所定义的一个响应式数据00
    // watch(sum, (newVal, oldVal) => {
    //   console.log('新数据：', newVal);
    //   console.log('旧数据：', oldVal);
    // })

    // 情况二监视ref所定义的多个响应式数据
    // 接受三个参数，分别是参数数组，回调方法，和相关配置
    // watch([sum, text], (newVal, oldVal) => {
    //   console.log('新数据：', newVal);
    //   console.log('旧数据：', oldVal);
    // }, { immediate: true })


    // 情况三监视reactive数据,1.此处无法正确获取oldVal和newVal，2.强制开启了深度监视
    watch(person, (newVal, oldVal) => {
      console.log('person的age变化了', newVal, oldVal);
    }, { immediate: true, deep: false })/**deep：false失效 */

    // 情况四监视reactive所定义的一个响应式数据的某个属性
    watch(() => person.age, (newVal, oldVal) => {
      console.log('person的age变化了', newVal, oldVal);
    })

    // 情况五监视reactive所定义的一个响应式数据的某些属性
    watch([() => person.age, () => person.name], (newVal, oldVal) => {
      console.log('person的age和name变化了', newVal, oldVal);
    })

    // 特殊情况，监视对象
    watch(person.job, (newVal, oldVal) => {
      console.log('person的age和name变化了', newVal, oldVal);
    }, { deep: true })//此处由于监视的是reactive定义的对象中的某个属性，所以deep配置有效

    // 总结，当监视为对象时，deep无效，oldvalue无法获取，强制开启深度监视  、、但是如果监视reactive定义的响应式数据中的某个属性时，deep配置有效

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
