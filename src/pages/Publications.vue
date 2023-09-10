<script lang="ts">
import { Icon } from '@iconify/vue';
import Publication from '/@/types/Publication'
import { defineComponent } from 'vue';
import pubs from '/@/data/publications'

// we don't want any of the original data to be changed so we make a deep copy of the data
const publist = JSON.parse(JSON.stringify(pubs)) as Publication[]; 

// don't include patents in the publication list
const pubsNoPatents = publist.filter((pub) => {
  return pub.pubType !== 'patent';
});

// for each publication with pubType == 'perspective' append (perspective) to the end of the title
pubsNoPatents.forEach((pub) => {
  if (pub.pubType === 'perspective') {
    pub.title = pub.title + ' (perspective)';
  }
});

// if a publication contains ‡ in the authors list, append (‡ contributed equally) to the end of the authors list
pubsNoPatents.forEach((pub) => {
  if (pub.authors.includes('‡')) {
    pub.authors = pub.authors + ' (‡ contributed equally)';
  }
});


export default defineComponent({
  components: {
    Icon,
  },
  name: 'Publications',
  data() {
    return {
      pubList: pubsNoPatents,
      searchterm: '',
    };
  },
  computed: {
    filteredPubs(): Publication[] {
      return this.pubList.filter((pub) => {
        return (
          pub.title.toLowerCase().includes(this.searchterm.toLowerCase()) ||
          pub.authors.toLowerCase().includes(this.searchterm.toLowerCase()) ||
          pub.journal.toLowerCase().includes(this.searchterm.toLowerCase()) ||
          pub.year.toString().includes(this.searchterm.toLowerCase())
        );
      });
    },
  },


})
</script>
<template>
  <div class="flex flex-col min-h-screen">
    <HeaderMenu />
    <div class="flex-grow mx-auto">
      <div class="lg:w-screen-lg mx-5 px-5 py-5">
        <input
          type="text"
          class="w-full px-3 py-2 mb-5 text-gray-700 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Search by title, author, journal, or year"
          v-model="searchterm"
        />
        <router-link to="./AllCitations" class="text-xl text-gray-700 font-extrabold text-center">
            Click Here: all citations including work prior to independent career
      </router-link>
        <PublicationRefactor
          v-for="pub in filteredPubs"
          :key="pub"
          :publication="pub"
        />

      </div>
    </div>
    <FooterBox />
  </div>
</template>
