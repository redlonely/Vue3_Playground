<script setup lang="ts">
const handelClick = () => {
  console.log($message)
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
