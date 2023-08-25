<template>
  <div class="app">
  </div>
</template>

<script>
import { isProxy, isReactive, isReadonly, isRef, reactive, readonly, ref, toRefs } from 'vue'

export default {
  name: 'App',
  setup () {
    let car = reactive({ name: 'bencz', price: '40w' })
    let sum = ref(0)
    let car2 = readonly(car)

    console.log(isReactive(car));
    console.log(isRef(sum));
    console.log(isReadonly(car2));
    console.log(isProxy(car));
    return { ...toRefs(car), sum, car2 }
  }

}
</script>

<style>
.app {
  background-color: green;
  padding: 10px;
}
</style>