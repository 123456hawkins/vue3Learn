<template>
  <div class="child">
    <span> 我是子组件</span>
    <Son></Son>
  </div>
</template>

<script>
import Son from './Son.vue'
export default {
  name:'Child',
  components:{Son}
}
</script>

<style>
.child{
  background: red;
  padding: 10px;
}
</style>