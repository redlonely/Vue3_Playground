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
  <n-loading-bar-provider>
    <n-config-provider :theme-overrides="themeOverrides">
      <n-message-provider>
        <header>
        </header>
        <RouterView v-slot="{ Component }">
          <transition name="fade-slide">
            <component :is="Component" />
          </transition>
        </RouterView>
        <Footer />
      </n-message-provider>
    </n-config-provider>
  </n-loading-bar-provider>
</template>

<style>
</style>
