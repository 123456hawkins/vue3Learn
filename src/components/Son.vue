<template>
  <div class="son">
    <span>我是孙组件</span>
    <h3>传递的数据：{{ car.name }}-{{ car.price }}</h3>
  </div>
</template>

<script>
import { inject } from 'vue'
export default {

  name: 'Son',
  setup () {
    // 获取数据
    let car = inject('car')
    return { car }
  }
}
</script>

<style>
.son {
  background: blue;
  padding: 10px;
}
</style>