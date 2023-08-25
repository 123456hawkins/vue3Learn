<template>
  <div class="DialogFa">
    <button @click="isShow = true">点我弹窗</button>
    <!-- 跳出嵌套，至于body -->
    <Teleport to="body">
      <div v-if="isShow" class="mask">
        <div class="Dialog">
          <h3>我是一个弹窗</h3>
          <h4>一些内容</h4>
          <h4>一些内容</h4>
          <h4>一些内容</h4>
          <button @click="isShow = false">关闭弹窗</button>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script>
import { Teleport, ref } from 'vue'
export default {
  name: 'Dialog',
  setup () {
    let isShow = ref(false);
    return {
      isShow
    };
  },
  components: { Teleport }
}
</script>

<style>
.mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
}

.DialogFa {
  background: #7ae7;
}

.Dialog {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  /* 定位基准点会在元素的中心而不是左上角。这种情况适用于已经清楚知道元素尺寸的情况，并且只关心居中而不考虑其他定位方式的影响。 */
  transform: translate(-50%, -50%);
  background: yellow;
}
</style>