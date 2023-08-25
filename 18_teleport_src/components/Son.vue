<template>
  <div class="son">
    <span>我是孙组件</span>
    <Dialog></Dialog>
  </div>
</template>

<script>
import Dialog from './Dialog.vue'
export default {

  name: 'Son',
  components: { Dialog },
  setup () {

  }
}
</script>

<style>
.son {
  background: blue;
  padding: 10px;
}
</style>