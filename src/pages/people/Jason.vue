<script lang="ts">
import { Icon } from '@iconify/vue';
import profile from '/@/assets/people/jason/jason.png?url';
import pic1 from '/@/assets/people/jason/jason1.jpg?url';
import pic2 from '/@/assets/people/jason/jason2.jpg?url';
import pic3 from '/@/assets/people/jason/jason3.jpg?url';
import pic4 from '/@/assets/people/jason/jason4.jpg?url';

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
            PersonName="Jason Zhang"
            Title="Undergraduate student"
            ProfileLink="/people"
            :Picture="profile"
            Email="jsnzhang[at]mit.edu"
            Pronouns="He/Him"
          />
        </div>
        <div class="flex-1 text-justify">
          <p class="mb-4">
            Jason was born in Chicago and raised in Bowling Green, Kentucky. He
            attended high school at the Carol Martin Gatton Academy of
            Mathematics and Sciences, where he first gained research experience
            under the supervision of Professor Yongming Deng. Currently, Jason
            is a first-year undergraduate student at MIT who hopes to study
            chemistry to develop chemical reactions to gain a deeper
            understanding of the world and to help improve people’s quality of
            life.
          </p>
          <p>Fan Facts:</p>
          <p>
            - Jason is an Eagle Scout and enjoys taking hikes in nature.
          </p>
          <p>
            - Jason has played clarinet for 8 years, and he currently is a member of the MIT Wind Ensemble.
          </p>
          <p>
            - Jason witnessed the MIThenge, which is where sunlight passes through the entire infinite corridor. This event only happens twice a year.
          </p>
        </div>
      </div>
      <ProfilePicture :imgurls="[pic1, pic2, pic3, pic4]" />
    </div>
    <FooterBox />
  </div>
</template>
