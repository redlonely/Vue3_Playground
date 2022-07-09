<script setup lang="ts">

import http, { getRandomAcatar } from '@/http'
import { useLoadingBar, useMessage } from 'naive-ui'
import { onMounted } from 'vue';
import { useCounterStore } from '@/stores/actions/counter'
import { storeToRefs } from 'pinia';

const $loadingBar = useLoadingBar()
const $message = useMessage()
let avatar = $ref<any>('')
let loading = $ref<boolean>(false)


onMounted(() => {
  getRandomAcatar({ lx: 'b1', format: 'json' })
    .then(res => {
      // 随机头像
      avatar = res?.imgurl
    })
    .catch(err => {
      console.log(err)
    })

  $message.success('组件加载完毕', { closable: true, duration: 3000 })
})

const handelClick = () => {
  loading = true
  $message.success('成功', { duration: 500 })
  $loadingBar.start()
  setTimeout(() => {
    $loadingBar.finish()
    loading = false
  }, 2000);
}

const { increment, decrement } = useCounterStore()
const { counter } = storeToRefs(useCounterStore())

</script>

<template>
  <div id="home" class="h-screen bg-slate-400 grid place-items-center">

    <div class="avatar online">
      <div class="w-24 rounded-full">
        <img :src="avatar" />
      </div>
    </div>

    <button @click="handelClick" class="btn subpixel-antialiased linner-pink" :class="loading && 'loading'">Button</button>

    <span class="countdown font-mono text-2xl">
      <span :style="`--value:${counter};`"></span>
    </span>

    <div class="count-to flex items-center gap-3">
      <button @click="decrement" class="btn  font-bold">-</button>
      <input :value="counter" type="text" placeholder="conter" class="input w-full max-w-xs font-bold" />
      <button @click="increment" class="btn  font-bold">+</button>
    </div>

  </div>
</template>
