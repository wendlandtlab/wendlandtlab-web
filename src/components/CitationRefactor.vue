<script lang="ts">
import { defineComponent, defineProps, PropType } from 'vue';
import Publication from '/@/types/Publication'

defineProps({
  publication: {
    type: Object as PropType<Publication>,
    required: true,
  },
});

export default defineComponent({
  name: 'CitationRefactor',
  props: {
    publication: {
      type: Object as PropType<Publication>,
      required: true,
    },},
});
</script>
<template>
  <div class="mb-5">
<a :href="publication.publisherLink">{{ publication.abbreviatedAuthors }} {{ publication.citationTitle }}. <i> {{ publication.journal }} </i> <b> {{ publication.year }}</b>, <i> {{ publication.volume }}</i>, {{ publication.pages }}.</a>
  </div>
</template>