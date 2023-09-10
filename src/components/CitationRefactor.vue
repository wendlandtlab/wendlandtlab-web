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
  <div class="mb-3">
<a v-if="publication.pubType == 'article'" :href="publication.publisherLink">{{ publication.abbreviatedAuthors }} {{ publication.title }}. <i> {{ publication.journal }} </i> <b> {{ publication.year }}</b>, <i> {{ publication.volume }}</i>, {{ publication.pages }}.</a>
<a v-if="publication.pubType == 'perspective'" :href="publication.publisherLink">{{ publication.abbreviatedAuthors }} {{ publication.title }}. <i> {{ publication.journal }} </i> <b> {{ publication.year }}</b>, <i> {{ publication.volume }}</i>, {{ publication.pages }}.</a>
<a v-if="publication.pubType == 'review'" :href="publication.publisherLink">{{ publication.abbreviatedAuthors }} {{ publication.title }}. <i> {{ publication.journal }} </i> <b> {{ publication.year }}</b>, <i> {{ publication.volume }}</i>, {{ publication.pages }}.</a>
<a v-if="publication.pubType == 'patent'" :href="publication.publisherLink">{{ publication.abbreviatedAuthors }} {{ publication.title }}. {{ publication.patent }}, {{ publication.date }}.</a>

</div>
</template>