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
  computed: {
    // end the title with a period unless it already ends in punctuation, e.g. "What is Editing?"
    titleWithStop(): string {
      const title = this.publication.title;
      return /[.?!]$/.test(title) ? title : `${title}.`;
    },
  },
});
</script>
<template>
  <div class="mb-3">
<a v-if="publication.pubType == 'article'" :href="publication.publisherLink">{{ publication.abbreviatedAuthors }} {{ titleWithStop }} <i> {{ publication.journal }} </i> <b> {{ publication.year }}</b>, <i> {{ publication.volume }}</i>, {{ publication.pages }}.</a>
<a v-if="publication.pubType == 'perspective'" :href="publication.publisherLink">{{ publication.abbreviatedAuthors }} {{ titleWithStop }} <i> {{ publication.journal }} </i> <b> {{ publication.year }}</b>, <i> {{ publication.volume }}</i>, {{ publication.pages }}.</a>
<a v-if="publication.pubType == 'review'" :href="publication.publisherLink">{{ publication.abbreviatedAuthors }} {{ titleWithStop }} <i> {{ publication.journal }} </i> <b> {{ publication.year }}</b>, <i> {{ publication.volume }}</i>, {{ publication.pages }}.</a>
<a v-if="publication.pubType == 'editorial'" :href="publication.publisherLink">{{ publication.abbreviatedAuthors }} {{ titleWithStop }} <i> {{ publication.journal }} </i> <b> {{ publication.year }}</b>, <i> {{ publication.volume }}</i>, {{ publication.pages }}.</a>
<a v-if="publication.pubType == 'patent'" :href="publication.publisherLink">{{ publication.abbreviatedAuthors }} {{ titleWithStop }} {{ publication.patent }}, {{ publication.date }}.</a>

</div>
</template>