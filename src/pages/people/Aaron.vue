<script lang="ts">
import { Icon } from '@iconify/vue';
import profile from '/@/assets/people/aaron/aaron.png?url';
import pic1 from '/@/assets/people/aaron/aaron-1.png?url';
import pic2 from '/@/assets/people/aaron/aaron-2.png?url';
import pic3 from '/@/assets/people/aaron/aaron-3.png?url';
import pic4 from '/@/assets/people/aaron/aaron-4.png?url';

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
    };
  },
};
</script>
<template>
  <div class="flex flex-col min-h-screen">
    <HeaderMenu />
    <div class="flex-grow justify-center align-middle">
      <div class="flex flex-col sm:flex-row mx-auto max-w-screen-xl py-10 px-6 items-center">
        <div class="flex-initial">
          <TeamMember
            PersonName="Aaron Liu"
            ProfileLink="/people"
            Title="Graduate Student (G4)"
            :Picture="profile"
            Email="aaronliu[at]mit.edu"
            LinkedIn="https://www.linkedin.com/in/aaronliuhk/"
            Pronouns="He/Him"
          />
        </div>
        <div class="flex-1 text-justify">
          <p class="mb-4">
            I was born in Australia, and my family eventually moved back to Hong
            Kong when I was four. I spent 14 years there, until I went to
            college and got my B.Sc. in Biochemistry and Molecular Chemistry at
            Brown University. After graduating, I moved to NYC to pursue a
            career in Finance. I was eventually promoted to Portfolio Manager at
            a hedge fund overseeing a long-short Biotech portfolio. That was
            when I realized that there were a lot of inefficiencies in the drug
            development world - if we can harness the power of reaction
            development in organic chemistry then we can design better small
            molecule therapeutics for diseases with high unmet need. Outside of
            chemistry, I enjoy playing the violin, playing yoyo, working out,
            collecting watches, collecting pens, shining shoes, taking photos,
            skateboarding, and snowboarding.
          </p>
        </div>
      </div>
      <ProfilePicture :imgurls="[pic1, pic2, pic3, pic4]" />
    </div>
    <FooterBox />
  </div>
</template>