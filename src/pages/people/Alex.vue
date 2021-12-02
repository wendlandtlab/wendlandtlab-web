<script lang="ts">
import { Icon } from '@iconify/vue';
import profile from '/@/assets/people/alex/alex.png?url';
import pic1 from '/@/assets/people/alex/alex-1.png?url';
import pic2 from '/@/assets/people/alex/alex-2.png?url';
import pic3 from '/@/assets/people/alex/alex-3.png?url';
import pic4 from '/@/assets/people/alex/alex-4.png?url';

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
            PersonName="Alex Seim"
            ProfileLink="/people"
            Title="Graduate Student (G4)"
            :Picture="profile"
            Email="aseim[at]mit.edu"
          />
        </div>
        <div class="flex-1 text-justify">
          <p class="mb-4">
            Alex spent his formative years in Chanhassen, MN. Deciding to
            venture deeper into the Midwest he attended Washington University in
            St. Louis Receiving a B.A. in chemistry. While at WashU he performed
            research under the late Professor Peter Gaspar studying the reaction
            mechanism of silylenes. He next ventured to Cambridge Massachusetts
            to pursue a Ph.D. at MIT under Professor Alison Wendlandt,
            developing epimerization methodologies. When not in lab, Alex enjoys
            pondy, going to museums, skiing, and watching movies with friends.
          </p>
          <p>Fan Facts:</p>
          <p>
            - Standing at 5'10" Alex is the shortest member of his family by
            about 4 inches
          </p>
          <p>- Alex's favorite video game is TETRIS.</p>
          <p>
            - Alex Named his pets K-Live, pyxy, and d'oug just to mess with out
            vets
          </p>
        </div>
      </div>
      <ProfilePicture :imgurls="[pic1, pic2, pic3, pic4]" />
    </div>
    <FooterBox />
  </div>
</template>
