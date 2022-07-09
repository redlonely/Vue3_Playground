<script setup lang="ts">

import { useLoadingBar, useMessage } from 'naive-ui'
import { getCurrentInstance, onMounted } from 'vue';

const $loadingBar = useLoadingBar()
const $message = useMessage()

onMounted(() => {
  $message.success('组件加载完毕')
})

const handelClick = () => {
  $message.success('成功')

  $loadingBar.start()
  setTimeout(() => {
    $loadingBar.finish()
  }, 2000);
}
</script>

<template>
  <div id="home" class="h-screen bg-slate-400 grid place-items-center">
    <button @click="handelClick" class="btn bg-slate-500">Button</button>
  </div>
</template>
