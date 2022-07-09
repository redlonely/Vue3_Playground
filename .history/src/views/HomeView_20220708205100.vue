<script setup lang="ts">

import { useLoadingBar, useMessage } from 'naive-ui'
import { getCurrentInstance, onMounted } from 'vue';

const $loadingBar = useLoadingBar()
const $message = useMessage()




onMounted(() => {
  const { proxy } = getCurrentInstance() as any
  console.log(proxy?.$message.success('组件加载完毕'))
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
    <n-space>
      <n-button>Default</n-button>
      <n-button type="tertiary">
        Tertiary
      </n-button>
      <n-button type="primary">
        Primary
      </n-button>
      <n-button type="info">
        Info
      </n-button>
      <n-button type="success">
        Success
      </n-button>
      <n-button type="warning">
        Warning
      </n-button>
      <n-button type="error">
        Error
      </n-button>
    </n-space>
  </div>
</template>
