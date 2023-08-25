<template>
  <div class="child">我是child组件
    <h3>{{ sum }}</h3>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'Child',
  setup () {

    let sum = ref(0)
    // 只有写suspend和异步引入的时候才能返回Promise，否则报错
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ sum })
      }, 1000)
    })

  }
}
</script>

<style>
.child {
  background: yellow;
}
</style>