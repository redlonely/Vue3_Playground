<script setup lang="ts">

import { useLoadingBar, useMessage } from 'naive-ui'
import { getCurrentInstance, onMounted } from 'vue';

const $loadingBar = useLoadingBar()
const $message = useMessage()

const { proxy } = getCurrentInstance() as any



onMounted(() => {
  proxy?.$message.success('组件加载完毕')
})

const handelClick = () => {

  proxy?.$message.success('成功')

  proxy?.$loadingBar.start()
  setTimeout(() => {
    proxy?.$loadingBar.finish()
  }, 2000);
}
</script>

<template>
  <div id="home" class="h-screen bg-slate-400 grid place-items-center">
    <button @click="handelClick" class="btn bg-slate-500">Button</button>

    <!-- The button to open modal -->
<label for="my-modal-6" class="btn modal-button">open modal</label>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="my-modal-6" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div class="modal-action">
      <label for="my-modal-6" class="btn">Yay!</label>
    </div>
  </div>
</div>
  </div>
</template>
