<script lang="ts">
import { Icon } from '@iconify/vue';
export default {
  components: {
    Icon,
  },
};
</script>
<template>
  <div class="flex flex-col min-h-screen">
    <HeaderMenu />
    <div class="flex-grow">
      <div class="flex mx-auto max-w-screen-xl py-10 px-6 items-center">
        <div class="flex-initial">
          <TeamMember
            PersonName="Alison Wendlandt"
            Title="Green CD Assistant Professor"
            Picture="/src/assets/people/alison/alison.png"
            Email="awendlan[at]mit.edu"
          />
        </div>
        <div class="flex-1 text-justify">
          <p class="mb-4">
            Alison Wendlandt is currently the Green CD Assistant Professor of
            Chemistry at the Massachusetts institute of Technology. Alison is
            originally from Colorado, and received her B.S. from the University
            of Chicago and her Ph.D. (2015) from the University of Wisconsin -
            Madison. Alison was a postdoctoral fellow at Harvard University in
            the Jacobsen research group until beginning her independent career
            at MIT in 2018. The Wendlandt group is interested in the development
            and mechanistic elucidation of new selective catalytic reactions.
          </p>
        </div>
      </div>
      <ProfilePicture
        :imgurls="[
          '/src/assets/people/hayden/hayden-1.png',
          '/src/assets/people/hayden/hayden-2.png',
          '/src/assets/people/hayden/hayden-3.png',
          '/src/assets/people/hayden/hayden-4.png',
        ]"
      />
    </div>
    <FooterBox />
  </div>
</template>
