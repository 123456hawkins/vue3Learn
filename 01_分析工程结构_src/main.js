// 引入不再是Vue构造函数，引入的是一个名为createApp的工厂函数
import { createApp } from 'vue'
import App from './App.vue'

// 创建应用实例对象-app，类似于vue2中的vm，但app比vm更轻
// createApp(App).mount('#app')
const app = createApp(App)
console.log(app)
// 挂载
app.mount('#app')
// 2秒后卸载app
setTimeout(() => {
  app.unmount('#app')
}, 2000)
