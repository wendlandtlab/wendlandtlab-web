<template>
  <div class="flex flex-col min-h-screen">
    <HeaderMenu />
    <img class="bg-top bg-contain bg-no-repeat" :src="homepageSvg" />
    <FooterBox />
  </div>
</template>
<script lang="ts">
import homepageSvg from '/@/assets/homepage.svg?url';
export default {
  setup() {
    return {
      homepageSvg,
    };
  },
};
</script>