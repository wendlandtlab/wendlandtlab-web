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
            PersonName="Xin Gu"
            Title="Graduate Student (G4)"
            Picture="../../assets/people/xin/xin.png"
            Email="gux[at]mit.edu"
          />
        </div>
        <div class="flex-1 text-justify">
          <p class="mb-4">
            Xin was born and raised in Taizhou, China before moving to the Ohio
            State University to pursue bachelor’s degree in chemistry. At the
            Ohio State, Xin worked on three-component Minisci reaction in the
            lab of Professor David Nagib. After graduation, Xin decided to move
            to the east coast and joined the Wendlandt lab. Outside of lab, Xin
            enjoys eating and video games.
          </p>
        </div>
      </div>
      <ProfilePicture
        :imgurls="[
          '../../assets/people/xin/xin-1.png',
          '../../assets/people/xin/xin-2.png',
          '../../assets/people/xin/xin-3.png',
          '../../assets/people/xin/xin-4.png',
        ]"
      />
    </div>
    <FooterBox />
  </div>
</template>
