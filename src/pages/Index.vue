<template>
  <div class="flex flex-col min-h-screen">
    <HeaderMenu />
    <AsyncHomepage class="bg-top bg-contain bg-no-repeat" />
    <FooterBox />
  </div>
</template>
<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
const AsyncHomepage = defineAsyncComponent(
  () => import('../assets/homepage.svg'),
);
</script>