<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/header/nav.vue'
import Footer from '@/components/footer/footer.vue'
import type { GlobalThemeOverrides } from 'naive-ui';

const themeOverrides: GlobalThemeOverrides = {
  LoadingBar: {
    colorError: '#eb3b5a',
    colorLoading: '#45aaf2',
    height: "4px"
  }
}


</script>

<template>
  <n-config-provider preflight-style-disabled :theme-overrides="themeOverrides">
    <n-loading-bar-provider>
      <n-message-provider>
        <header>
        </header>
        <main>
          <RouterView v-slot="{ Component }">
            <transition name="fade-opaticy">
              <component :is="Component" />
            </transition>
          </RouterView>
        </main>
        <Footer />
      </n-message-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>

<style>
</style>
