<script lang="ts">
import { Icon } from '@iconify/vue';
import profile from '/@/assets/people/alison/alison.jpg';
import alison1 from '/@/assets/people/alison/alison-1.jpg';
import alison2 from '/@/assets/people/alison/alison-2.jpg';
import alison3 from '/@/assets/people/alison/alison-3.jpg';
import cv from '/aew-cv.pdf?url';
export default {
  components: {
    Icon,
  },
  setup() {
    return {
      profile,
      alison1,
      alison2,
      alison3,
      cv
    };
  },
};
</script>
<template>
  <div class="flex flex-col min-h-screen">
    <HeaderMenu />
    <div class="flex-grow">
      <div
        class="
          flex flex-col
          sm:flex-row
          mx-auto
          max-w-screen-xl
          py-10
          px-6
          items-center
        "
      >
        <div class="flex-initial">
          <TeamMember
            PersonName="Alison Wendlandt"
            Title="Green CD Assistant Professor"
            ProfileLink="/people"
            :Picture="profile"
            Email="awendlan[at]mit.edu"
            Pronouns="She/Her"
          />
        </div>
        <div class="flex-1 text-justify">
          <p class="mb-4">
            Alison Wendlandt is currently an Associate Professor of
            Chemistry at the Massachusetts institute of Technology. Alison is
            originally from Colorado, and received her B.S. from the University
            of Chicago and her Ph.D. (2015) from the University of Wisconsin -
            Madison. Alison was a postdoctoral fellow at Harvard University in
            the Jacobsen research group until beginning her independent career
            at MIT in 2018. The Wendlandt group is interested in the development
            and mechanistic elucidation of new selective catalytic reactions.
          </p>
          <a href="https://wendlandtlab.com/aew-cv.pdf" class="text-gray-700 font-bold">
            Link to curriculum vitae
          </a>
        </div>
      </div>
      <div
        class="
          rounded-md
          mx-auto
          h-60
          max-w-screen-xl
          flex flex-wrap
          overflow-hidden
          justify-items-center
        "
      >
        <img :src="alison1" alt="" class="object-cover overflow-hidden w-1/4" />
        <img
          :src="alison2"
          alt=""
          class="object-cover overflow-hidden h-full w-1/2 flex-shrink"
        />
        <img :src="alison3" alt="" class="object-cover overflow-hidden w-1/4" />
      </div>
    </div>
    <FooterBox />
  </div>
</template>
