<template>
  <div class="flex flex-col min-h-screen">
    <HeaderMenu />
    <div class="flex-grow bg-cover bg-no-repeat bg-top" :style='homepagebackstyle'></div>
    <FooterBox />
  </div>
</template>
<script lang="ts">
import homepageback from '/@/assets/homepage.svg?url';
// background-image: url({{ homepageback }})
const homepagebackstyle = {
  backgroundImage: `url(${homepageback})`,
};
export default {
  name: 'Index',
  data() {
    return {
      homepagebackstyle,
    };
  },
};
</script>