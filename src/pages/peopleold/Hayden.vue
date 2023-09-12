<script lang="ts">
import { Icon } from '@iconify/vue';
import profile from '/@/assets/people/hayden/hayden.jpg?url';
import pic1 from '/@/assets/people/hayden/hayden-1.jpg?url';
import pic2 from '/@/assets/people/hayden/hayden-2.jpg?url';
import pic3 from '/@/assets/people/hayden/hayden-3.jpg?url';
import pic4 from '/@/assets/people/hayden/hayden-4.jpg?url';

import pubs from '/@/data/publications';

const fullname = 'Hayden M. Carder';

const filteredPubs = pubs.filter(pub => {
  return pub.authors.toLowerCase().includes(fullname.toLowerCase());
});


export default {
  components: {
    Icon,
  },
  setup() {
    return {
      profile,
      pic1,
      pic2,
      pic3,
      pic4,
      filteredPubs,
    };
  },
};
</script>
<template>
  <div class="flex flex-col min-h-screen">
    <HeaderMenu />
    <div class="flex-grow">
      <div class="flex flex-col sm:flex-row mx-auto max-w-screen-xl py-10 px-6 items-center">
        <div class="flex-initial">
          <TeamMember
            PersonName="Hayden Carder"
            Orcid="https://orcid.org/0000-0003-3811-5375"
            Title="Graduate Student (G4)"
            ProfileLink="/people"
            :Picture="profile"
            Email="hcarder[at]mit.edu"
            LinkedIn="https://www.linkedin.com/in/hayden-carder-45757a171/"
            Pronouns="He/Him"
          />
        </div>
        <div class="flex-1 text-justify">
          <p class="mb-4">
            Hayden Carder grew up in the western suburbs of Chicago, IL. He
            completed his B.S. in Chemistry at University of Rochester. While at
            UR, he conducted research under Professor Benjamin Miller focusing
            on two unique project areas: the development/application of a
            label-free multiplex biosensor and the synthesis of RNA targeting
            molecules. While there, he served as a workshop leader in various
            chemistry classes for 3 years. Interested in the application of new
            methodologies for the synthesis of biomolecules, he attended MIT to
            pursue his Ph.D. under Professor Alison Wendlandt. Outside of
            chemistry, Hayden enjoys cooking and making furniture in his spare
            time.
          </p>
          <p>Fan Facts:</p>
          <p>
            - Hayden has a dog named Gambit, a border collie aussie mix.
            Gambit’s greatest joys in life are fetch and invading your personal
            space (for love).
          </p>
          <p>
            - He uses the lab office freezer to store his excess homemade apple
            sauce and jelly.
          </p>
          <p>
            - He likes to travel to visit family, go hiking, or go to the beach.
          </p>

          <p class="mt-4">
            Publications in the lab:
            <CitationRefactor
              v-for="pub in filteredPubs"
              :key="pub"
              :publication="pub"
            />
          </p>
        </div>
      </div>
      <ProfilePicture :imgurls="[pic1, pic2, pic3, pic4]" />
    </div>
    <FooterBox />
  </div>
</template>
