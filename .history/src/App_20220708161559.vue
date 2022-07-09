<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
  </header>
  <transition name="fade-slide" mode="out-in">
    <RouterView />
  </transition>
</template>

<style>
</style>
