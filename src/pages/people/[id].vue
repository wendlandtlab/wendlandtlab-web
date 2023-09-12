<script lang="ts">
import { Icon } from '@iconify/vue';
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router/auto';

import group from '/@/data/people';
import pubs from '/@/data/publications';
import Person from '/@/types/Person';
import Publication from '/@/types/Publication';


export default defineComponent({
  components: {
    Icon,
  },
  setup() {
    const route = useRoute();
    const id = route.params.id;

    // if id is not in group, redirect back to people page
    if (!group.has(id)) {
      window.location.href = '/people';
    }

    const member = group.get(id) as Person;

    if (!member.profile) {
      window.location.href = '/people';
    }

    const filteredPubs = pubs.filter(pub => {
      return pub.authors.toLowerCase().includes(member.publicationName.toLowerCase());
    }) as Publication[];

    return {
      filteredPubs,
      member,
    };
  },
});
</script>
<template>
  <div class="flex flex-col min-h-screen">
    <HeaderMenu />
    <div class="flex-grow">
      <div
        class="flex flex-col sm:flex-row mx-auto max-w-screen-xl py-10 px-6 items-center"
      >
        <div class="flex-initial">
          <TeamMember
            :PersonName="member.name"
            :Orcid="member.orcid"
            ProfileLink="/people"
            :Title="member.position"
            :Picture="member.profilePic"
            :Email="member.email + `[at]mit.edu`"
            :LinkedIn="member.linkedin"
            :Pronouns="member.pronouns"
          />
        </div>
        <div class="flex-1 text-justify">
          <div v-if="member.bio">
            <div class="font-bold">Bio:</div>
            {{ member.bio }}
          </div>
          <div v-if="member.funFacts">
         <div class="font-bold pt-4">Fan Facts:</div>
          <ul>
            <li v-for="fact in member.funFacts" :key="fact">- {{ fact }}</li>
          </ul>
        </div>
        <div v-if="filteredPubs">
          <div class="font-bold pt-4">Publications in the lab:</div>
          <CitationRefactor
            v-for="pub in filteredPubs"
            :key="pub"
            :publication="pub"
          />
          </div>
        </div>
      </div>
      <ProfilePicture :imgurls="member.profilePhotos" />
    </div>
    <FooterBox />
  </div>
</template>