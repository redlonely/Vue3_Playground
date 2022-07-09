<script setup lang="ts">

import http, { getRandomAcatar } from '@/http'
import { useLoadingBar, useMessage } from 'naive-ui'
import { onMounted, ref } from 'vue';

const $loadingBar = useLoadingBar()
const $message = useMessage()


onMounted(() => {
  getRandomAcatar({ lx: 'b1', format: 'json' }).then(res => {
    console.log(res.imgurl)
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

let avatar = $ref('')


</script>

<template>
  <div id="home" class="h-screen bg-slate-400 grid place-items-center">



    <button @click="handelClick" class="btn bg-slate-500">Button</button>
  </div>
</template>
