<template>
  <!-- vue3组件目录可以没有根标签 -->
  <h3>一个人的信息</h3>
  <h4>姓名:{{ person.name }}</h4>
  <h4>年龄:{{ person.age }}</h4>
  <h4>姓:<input v-model="person.fname"></h4>
  <h4>名:<input v-model="person.lname"></h4>

  <h4>计算属性(全名):{{ fullName }}</h4>
  <h4>计算属性(全名):<input v-model="person.fullName"></h4>
  <h5 v-if="person.sex">性别{{ person.sex }}</h5>
  <button @click="test">测试触发Demo</button>
  <slot name="qwe"></slot>
</template>

<script>
import { reactive, computed } from 'vue'
export default {
  name: 'App',
  components: {
  },
  beforeCreate () {
    console.log('----beforeCreate-----');
  },
  setup () {
    let person = reactive({
      fname: '张',
      lname: '三',
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


    // 计算属性 简写形式
    let fullName = computed(() => {
      return person.fname + '-' + person.lname;
    })
    // 计算属性完整写法
    person.fullName = computed({
      get () {
        return person.fname + '-' + person.lname;
      },
      set (value) {
        const nameArr = value.split('-')
        person.fname = nameArr[0]

        person.lname = nameArr[1]
      }

    })

    return {
      person,
      fullName,
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
