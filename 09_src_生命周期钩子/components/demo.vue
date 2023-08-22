<template>
  <!-- vue3组件目录可以没有根标签 -->
  <h2>求和：{{ sum }}</h2>
  <button @click="sum++">点我++</button>
</template>

<script>
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUpdated, reactive, ref, watch, watchEffect } from 'vue';
export default {
  name: 'App',
  components: {
  },
  setup () {
    let sum = ref(19)

    // 组合式api使用生命周期钩子
    // 组合式生命周期钩子执行时机比配置项的要快

    onBeforeMount(() => {
      console.log('---onBeforeMount-----');
    })
    onMounted(() => {
      console.log('---onMounted-----');
    })
    onBeforeUpdate(() => {
      console.log('---onBeforeUpdate-----');
    })
    onUpdated(() => {
      console.log('---onUpdated-----');
    })
    onBeforeUnmount(() => {
      console.log('---onBeforeUnmount-----');
    })
    onMounted(() => {
      console.log('---onMounted-----');
    })

    return {
      sum,
    }
  },
  beforeCreate () {
    console.log('----beforeCreate-----');
  },
  created () {
    console.log('----created-------');
  },
  beforeMount () {
    console.log('----beforeMount-------');
  },
  mounted () {
    console.log('---mounted-----');
  },
  beforeUpdate () {
    console.log('----beforeUpdate-------');
  },
  updated () {
    console.log('----Updated-------');
  },
  beforeUnmount () {
    console.log('---beforeUnmount');
  },
  unmounted () {
    console.log('----unmounted----');
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
