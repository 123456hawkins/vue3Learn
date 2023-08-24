import { reactive, onMounted, onBeforeUnmount } from 'vue'
export default function savePoint() {
  // hook本质是一个函数，把setup函数中使用的compositionAPI进行封装
  // 实现鼠标打点的数据
  let point = reactive({
    x: 0,
    y: 0,
  })

  // 实现鼠标打点的方法
  function savePoint(event) {
    point.x = event.x
    point.y = event.y
  }
  // 实现鼠标打点钩子
  onMounted(() => {
    window.addEventListener('click', savePoint)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('click', savePoint)
  })

  return point
}
