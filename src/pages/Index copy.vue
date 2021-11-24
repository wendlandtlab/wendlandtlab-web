<script lang="ts">
import { Icon } from '@iconify/vue';
export default {
  components: {
    Icon,
  },
};
</script>
<template>
  <HeaderMenu />
  <div class="max-w-screen-lg mx-auto">
    <p class="text-5xl font-extrabold text-center py-10">
      Welcome to the Wendlandt Lab
    </p>
  </div>
  <div class="max-w-screen-lg mx-auto">
    <img
      src="https://wendlandtlab.com/wp-content/uploads/2020/10/Image-from-iOS-1-scaled.jpg"
      alt=""
      class="object-cover overflow-hidden rounded-md h-100 w-full"
    />
  </div>
  <div
    class="my-5 flex flex-wrap justify-evenly mx-auto max-w-screen-lg items-end"
  >
    <div class="flex flex-col text-gray-700 items-center px-10 py-4">
      <Icon icon="bi:person-fill" height="100" />
      <p class="font-bold">Who we are</p>
    </div>
    <div class="flex flex-col text-gray-700 items-center mx-10 py-4">
      <Icon icon="eos-icons:atom-electron" height="100" />
      <p class="font-bold">Our interests</p>
    </div>
    <div class="flex flex-col text-gray-700 items-center mx-10 py-4">
      <Icon icon="system-uicons:document-stack" height="100" />
      <p class="font-bold">Our work</p>
    </div>
    <div class="flex flex-col text-gray-700 items-center mx-10 py-4">
      <Icon icon="wpf:stack-of-photos" height="100" />
      <p class="font-bold">Culture and events</p>
    </div>
    <div class="flex flex-col text-gray-700 items-center mx-10 py-4">
      <Icon icon="carbon:text-link" height="100" />
      <p class="font-bold">Links and resources</p>
    </div>
  </div>



  <FooterBox />
</template>
