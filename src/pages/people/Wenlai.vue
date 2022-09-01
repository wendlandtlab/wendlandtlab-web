<script lang="ts">
import { Icon } from '@iconify/vue';
import profile from '/@/assets/people/wenlai.png?url';
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
            PersonName="Wenlai Han"
            Title="Undergraduate student"
            ProfileLink="/people"
            :Picture="profile"
            Email="hanw[at]mit.edu"
            Pronouns="He/Him"
          />
        </div>
        <div class="flex-1 text-justify">
          <p class="mb-4">
            Wenlai grew up in the central part of China (Xinyu, Jiangxi and
            later moved to Changsha, Hunan for high school). He later headed to
            the states for liberal arts education at Carleton College, expecting
            B.A. in Chemistry and Computer Science with a minor in Vocal
            Performance in June 2023. At Carleton, Wenlai is fortunate to
            conduct research in the synthesis and reactivity study of late-metal
            silylene complexes with Prof. Matt Whited, with a current focus on
            orthogonal binding in pincer-supported silylene systems for
            catalytic transformations. Interested in exploiting fundamental
            chemistry principles to facilitate interesting transformations,
            Wenlai headed to MIT for a 3-month summer research opportunity with
            Prof. Alison Wendlandt and Dr. Yuan Zhang to investigate selective
            amine epimerization. Outside of the lab, Wenlai enjoys singing,
            vlogging, cooking, and traveling.
          </p>
          <p>Fan Facts:</p>
          <p>
            - Due to the restriction of pets for on-campus residence (yes
            Carleton offers mandatory on-campus housing), he usually pets dogs
            and cats virtually.
          </p>
          <p>
            - He has unusual high productivity during flights or on high-speed
            trains.
          </p>
          <p>- Good food destresses him a ton.</p>
        </div>
      </div>
    </div>
    <FooterBox />
  </div>
</template>
