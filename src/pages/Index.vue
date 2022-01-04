<template>
  <div class="flex flex-col min-h-screen">
    <HeaderMenu />
    <div class="flex-grow bg-cover bg-no-repeat bg-top" :style="image"></div>
    <FooterBox />
  </div>
</template>
<script lang="ts">
import homepageback from '../assets/homepage.svg?url';
const image = 'background-image: url(' + homepageback + ')';
export default {
  setup() {
    return {
      image,
    };
  },
  name: 'Home',
  metaInfo: {
    title: 'Wendlandt Lab',
    // override the parent template and just use the above title only
    titleTemplate: null,
  },
};
</script>