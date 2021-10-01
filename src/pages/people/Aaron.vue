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
        PersonName="Aaron Liu"
        Orcid=""
        Title="Graduate Student (G4)"
        Picture="/src/assets/people/aaron/aaron.png"
        Email="aaronliu[at]mit.edu"
        LinkedIn="#"
      />
    </div>
    <div class="flex-1 text-justify">
I was born in Australia, and my family eventually moved back to Hong Kong when I was four. I spent 14 years there, until I went to college and got my B.Sc. in Biochemistry and Molecular Chemistry at Brown University. After graduating, I moved to NYC to pursue a career in Finance. I was eventually promoted to Portfolio Manager at a hedge fund overseeing a long-short Biotech portfolio. That was when I realized that there were a lot of inefficiencies in the drug development world - if we can harness the power of reaction development in organic chemistry then we can design better small molecule therapeutics for diseases with high unmet need.
Outside of chemistry, I enjoy playing the violin, playing yoyo, working out, collecting watches, collecting pens, shining shoes, taking photos, skateboarding, and snowboarding.
    </div>
  </div>
  <ProfilePicture
    :imgurls="[
      '/src/assets/people/aaron/aaron-1.png',
      '/src/assets/people/aaron/aaron-2.png',
      '/src/assets/people/aaron/aaron-3.png',
      '/src/assets/people/aaron/aaron-4.png',
    ]"
  />
  <FooterBox />
</template>
