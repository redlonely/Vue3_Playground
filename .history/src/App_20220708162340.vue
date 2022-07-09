<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <n-loading-bar-provider>
    <header>
    </header>
    <transition name="fade-slide" mode="out-in">
      <RouterView />
    </transition>
  </n-loading-bar-provider>
</template>

<style>
</style>
