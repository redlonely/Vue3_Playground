<script setup lang="ts">
import { RouterView } from 'vue-router'
import Footer from '@/components/footer/footer.vue'
</script>

<template>

  <n-loading-bar-provider>
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
  </n-loading-bar-provider>
</template>

<style>
</style>
