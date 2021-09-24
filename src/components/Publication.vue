
<script lang="ts">
import { defineComponent } from 'vue';
import { Icon } from '@iconify/vue';

export default defineComponent({
  components: {
    Icon,
  },
  name: 'Publication',
  props: {
    pubType: String,
    pubTitle: String,
    pubAuthors: String,
    pubJournal: String,
    pubYear: Number,
    pubDoi: String,
    publinkArticle: String,
    publinkSi: String,
    publinkPublisher: String,
    pubToc: String,
  },
  computed: {
    containerClasses(): { [key: string]: boolean } {
      return {
        'container max-w-screen-lg mx-auto mt-2 rounded-md': true,
        'bg-blue-50': this.pubType === 'article',
        'bg-red-50': this.pubType === 'review',
        'bg-green-50': this.pubType === 'perspective',
      };
    },
    buttonClasses(): { [key: string]: boolean } {
      return {
        'flex justify-start flex-initial mr-0 p-1 space-x-1': true,
        'bg-blue-700 text-blue-50': this.pubType === 'article',
        'bg-red-700 text-red-50': this.pubType === 'review',
        'bg-green-700 text-green-50': this.pubType === 'perspective',
      };
    },
    doiClasses(): { [key: string]: boolean } {
      return {
        'flex-initial w-full font-bold p-1 rounded-tr-md': true,
        'bg-blue-200 text-blue-700': this.pubType === 'article',
        'bg-red-200 text-red-700': this.pubType === 'review',
        'bg-green-200 text-green-700': this.pubType === 'perspective',
      };
    },
  },
});
</script>
<template>
  <div :class="containerClasses">
    <div class="flex justify-start">
      <div :class="buttonClasses">
        <a v-if="publinkArticle" :href="publinkArticle">
          <Icon icon="bi:file-earmark-text-fill" width="20" :inline="true" />
        </a>
        <a v-if="publinkSi" :href="publinkSi">
          <Icon
            icon="bi:file-earmark-bar-graph-fill"
            width="20"
            :inline="true"
          />
        </a>
      </div>
      <div :class="doiClasses">
        <a :href="publinkPublisher" class=" w-full ml-2">{{ pubDoi }}</a>
      </div>
    </div>
    <div class="text-lg font-bold px-2">{{ pubTitle }}</div>
    <div class="text-sm italic px-2">{{ pubAuthors }}</div>
    <div class="flex justify-center p-2">
      <img v-if="pubToc" class="flex-initial w-md" :src="pubToc" />
    </div>
  </div>
</template>