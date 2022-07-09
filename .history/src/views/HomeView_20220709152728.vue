<script setup lang="ts">

import { getRandomAcatar } from '@/http'
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

const dark = $ref(false)

</script>

<template>

  <div id="home" class="h-screen bg-slate-400 grid place-items-center" :style="`--bg-color:${dark ? '#eee' : '#333'}`">

    <div class="avatar online">
      <div class="w-24 rounded-full">
        <img :src="avatar" />
      </div>
    </div>

    <button @click="handelClick" class="btn subpixel-antialiased" :class="loading && 'loading'">Button</button>

    <span class="countdown font-mono text-2xl">
      <span :style="`--value:${counter};`"></span>
    </span>

    <div class="count-to flex items-center gap-3">
      <button @click="decrement" class="btn  font-bold">-</button>
      <div class="indicator">
        <span class="indicator-item badge badge-secondary">{{ counter }}</span>
        <input :value="counter" type="text" placeholder="conter" class="input w-full max-w-xs font-bold" />
      </div>
      <button @click="increment" class="btn  font-bold">+</button>
    </div>

    <label class="swap swap-rotate">

      <!-- this hidden checkbox controls the state -->
      <input type="checkbox" v-model="dark" />

      <!-- sun icon -->
      <svg class="swap-on fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
      </svg>

      <!-- moon icon -->
      <svg class="swap-off fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
      </svg>

    </label>

  </div>

</template>


<style scoped lang="scss">
#home {
  background-color: var(--bg-color);
  transition: background .7s ease-in-out;
}
</style>
