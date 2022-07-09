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
  </div>
</template>
