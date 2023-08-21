<template>
  <!-- vue3组件目录可以没有根标签 -->
  <h3>一个人的信息</h3>
  <h4>姓名:{{ person.name }}</h4>
  <h4>年龄:{{ person.age }}</h4>
  <h5 v-if="person.sex">性别{{ person.sex }}</h5>
  <button @click="test">测试触发Demo</button>
  <slot name="qwe"></slot>
</template>

<script>
import { reactive, } from 'vue'
export default {
  name: 'App',
  props: ['msg', 'name'],
  // 指明hello自定义指令
  // emits: ['hello'],
  components: {
  },
  beforeCreate () {
    console.log('----beforeCreate-----');
  },
  setup (props, context, c) {
    // props值为对象，指组件外部传递过来的，且组件内部声明接受
    // context:上下文1对象，包含attrs：值为对象，包含组件外部传递过来但没有声明的props，slots：收到插槽的内容，emit：自定义事件函数
    console.log('---setup执行----', this);
    console.log('setup接受的参数：', props, context, c);
    let person = reactive({
      name: 'zhangsan',
      age: 10,
      job: {
        type: '前端工程师',
        salary: '30k',
        a: {
          b: {
            c: 1
          }
        }
      },
      hobby: ['抽烟', '喝酒', '烫头']
    })

    // 方法
    function test () {
      // 触发自定义指令
      context.emit('hello', 666)
    }

    return {
      test,
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
