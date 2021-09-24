<script lang="ts">
import { Icon } from '@iconify/vue';
export default {
  components: {
    Icon,
  },
};
</script>
<template>
  <HeaderMenu />
  <div class="flex mx-auto max-w-screen-lg py-10 px-6 items-center">
    <div class="flex-initial">
      <TeamMember
        PersonName="Hayden Carder"
        Orcid="https://orcid.org/0000-0003-3811-5375"
        Title="Graduate Student (G4)"
        Picture="https://i1.wp.com/wendlandtlab.com/wp-content/uploads/2019/10/IMG_6965-1.jpg?w=1080&ssl=1"
        Email="hcarder[at]mit.edu"
        LinkedIn="https://www.linkedin.com/in/hayden-carder-45757a171/"
      />
    </div>
    <div class="flex-1 text-justify">
      <p class="mb-4">
        Hayden Carder grew up in the western suburbs of Chicago, IL. He
        completed his B.S. in Chemistry at University of Rochester. While at UR,
        he conducted research under Professor Benjamin Miller focusing on two
        unique project areas: the development/application of a label-free
        multiplex biosensor and the synthesis of RNA targeting molecules. While
        there, he served as a workshop leader in various chemistry classes for 3
        years. Interested in the application of new methodologies for the
        synthesis of biomolecules, he attended MIT to pursue his Ph.D. under
        Professor Alison Wendlandt. Outside of chemistry, Hayden enjoys cooking
        and making furniture in his spare time.
      </p>
      <p>Fan Facts:</p>
      <p>
        - Hayden has a dog named Gambit, a border collie aussie mix. Gambit’s
        greatest joys in life are fetch and invading your personal space (for
        love).
      </p>
      <p>
        - He uses the lab office freezer to store his excess homemade apple sauce
        and jelly.
      </p>
      <p>- He likes to travel to visit family, go hiking, or go to the beach.</p>
    </div>
  </div>
  <ProfilePicture
    :imgurls="[
      '/src/assets/hayden/hayden-1.png',
      '/src/assets/hayden/hayden-2.png',
      '/src/assets/hayden/hayden-3.png',
      '/src/assets/hayden/hayden-4.png',
    ]"
  />
  <FooterBox />
</template>
