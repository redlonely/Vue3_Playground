<script setup lang="ts">
import { RouterView } from 'vue-router'
import Footer from '@/components/footer/footer.vue'
import type { GlobalThemeOverrides } from 'naive-ui';

const themeOverrides: GlobalThemeOverrides = {
  LoadingBar: {
    colorError: '#eb3b5a',
    colorLoading: '#45aaf2',
    height: "4"
  }
}


</script>

<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <router-view></router-view>
  </n-config-provider>
</template>

<style>
</style>
