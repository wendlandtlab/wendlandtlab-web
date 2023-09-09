
<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Icon } from '@iconify/vue';

declare interface News {
  source: string;
  newsurl: string;
}

declare interface Publication {
  pubType: string;
  title: string;
  authors: string;
  journal: string;
  year: number;
  doi: string;
  articleLink: string;
  esiLink: string;
  publisherLink: string;
  toc: string;
  newslist: Array<News>;
}

export default defineComponent({
  components: {
    Icon,
  },
  name: 'Publication',
  props: {
    publication: {
      type: Object as PropType<Publication>,
      required: true,
    },
  },
  computed: {
    containerClasses(): { [key: string]: boolean } {
      return {
        'container max-w-screen-lg mx-auto mt-2 rounded-md': true,
        'bg-blue-50': this.publication.pubType === 'article',
        'bg-red-50': this.publication.pubType === 'review',
        'bg-green-50': this.publication.pubType === 'perspective',
      };
    },
    buttonClasses(): { [key: string]: boolean } {
      return {
        'flex justify-start flex-initial mr-0 p-1 space-x-1': true,
        'bg-blue-700 text-blue-50': this.publication.pubType === 'article',
        'bg-red-700 text-red-50': this.publication.pubType === 'review',
        'bg-green-700 text-green-50': this.publication.pubType === 'perspective',
      };
    },
    doiClasses(): { [key: string]: boolean } {
      return {
        'flex-initial w-full font-bold p-1 rounded-tr-md': true,
        'bg-blue-200 text-blue-700': this.publication.pubType === 'article',
        'bg-red-200 text-red-700': this.publication.pubType === 'review',
        'bg-green-200 text-green-700': this.publication.pubType === 'perspective',
      };
    },
  },
});
</script>
<template>
  <div :class="containerClasses">
    <div class="flex justify-start">
      <div :class="buttonClasses">
        <a v-if="publication.articleLink" :href="publication.articleLink">
          <Icon icon="bi:file-earmark-text-fill" width="20" :inline="true" />
        </a>
        <a v-if="publication.esiLink" :href="publication.esiLink">
          <Icon
            icon="bi:file-earmark-bar-graph-fill"
            width="20"
            :inline="true"
          />
        </a>
      </div>
      <div :class="doiClasses">
        <a :href="publication.publisherLink" class="w-full ml-2">{{ publication.doi }} </a>
      </div>
    </div>
    <div class="text-lg font-bold px-2">{{ publication.title }}</div>
    <div class="text-sm italic px-2">{{ publication.authors }}</div>
    <div v-if="publication.newslist" class="text-sm px-2 flex flex-wrap">
      <Icon icon="wpf:news" width="20" :inline="true" />
      <div v-for="(item, index) in publication.newslist" :key="index" class="px-2">
          <a :href="item.newsurl">{{ item.source }}</a>
      </div>
    </div>
    <div class="flex justify-center p-2">
      <img v-if="publication.toc" class="flex-initial w-md h-full" :src="publication.toc" />
    </div>
  </div>
</template>