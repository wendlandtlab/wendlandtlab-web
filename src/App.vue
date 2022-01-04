<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'Wendlandt Lab',
    // all titles will be injected into this template
    titleTemplate: '%s | Wendlandt Lab',
    htmlAttrs: {
      lang: 'en-US',
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'description',
        content:
          'Research in the Wendlandt Group focuses on the development of selective, catalytic reactions using the tools of organic/organometallic synthesis and physical organic chemistry.',
      },
    ],
  },
});
</script>
<template>
  <router-view />
</template>
