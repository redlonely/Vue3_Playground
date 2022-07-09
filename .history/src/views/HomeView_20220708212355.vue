<script setup lang="ts">

import http from '@/http'
import { useLoadingBar, useMessage } from 'naive-ui'
import { onMounted, ref } from 'vue';

const $loadingBar = useLoadingBar()
const $message = useMessage()


onMounted(() => {
  http.get({
    url: 'http://api.btstu.cn/sjtx/api.php?lx=c1&format=images'
  }).then((res) => {
    console.log(res)
  })
  $message.success('组件加载完毕', { closable: true, duration: 3000 })
})

const handelClick = () => {
  $message.success('成功')
  $loadingBar.start()
  setTimeout(() => {
    $loadingBar.finish()
  }, 2000);
}

const avatar = ref('')


</script>

<template>
  <div id="home" class="h-screen bg-slate-400 grid place-items-center">



    <button @click="handelClick" class="btn bg-slate-500">Button</button>
  </div>
</template>
