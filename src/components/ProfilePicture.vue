<template>
  <div class="rounded-md mx-auto max-w-screen-xl flex flex-wrap overflow-hidden">
    <div
      v-for="idx in imgurls"
      class="w-full object-cover sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 h-60"
      :key="idx"
    >
      <img
      :src="idx"
      alt=""
      class="object-cover overflow-hidden h-full w-full"
    />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProfilePicture',
  props: {
    imgurls: Array,
  },
});
</script>