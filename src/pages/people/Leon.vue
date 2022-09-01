<script lang="ts">
import { Icon } from '@iconify/vue';
import profile from '/@/assets/people/leon/leon.png?url';
import pic1 from '/@/assets/people/leon/leon-1.jpg?url';
import pic2 from '/@/assets/people/leon/leon-2.jpg?url';
import pic3 from '/@/assets/people/leon/leon-3.jpg?url';
import pic4 from '/@/assets/people/leon/leon-4.jpg?url';

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
            PersonName="Leon Wang"
            Title="Undergraduate student"
            ProfileLink="/people"
            :Picture="profile"
            Email="leonn037[at]mit.edu"
            Pronouns="They/He"
          />
        </div>
        <div class="flex-1 text-justify">
          <p class="mb-4">
            Leon was born and raised in Columbia, South Carolina. When they were
            young, Leon was an inquisitive child who loved to learn about the
            natural world—too bad Leon was annoying and asked the most asinine
            questions. His dad, although a great organic professor to his own
            college students, wasn’t keen on teaching Leon and conjured up the
            best idea ever—passing Leon off into one of his colleague’s general
            chemistry classes. It definitely was nerve-racking at first for
            Leon, especially because they were an anxious short little child,
            within a class full of scary college students. However, Leon didn’t
            let it faze him, and Leon quickly found his new groove along with a
            love for chemistry. He proceeded to actually pass the class and let
            this event jumpstart a semi-successful journey to explore
            chemistry—he took many more chemistry courses and even conducted
            some meaningful research in chemistry—specifically in amino acid
            modification and some electrosynthesis—in high school. Now, they are
            a first-year undergraduate student at MIT, who plans on majoring in
            course 5 and is trying their best to learn how to be and be a great
            chemist.
          </p>
          <p class="mb-4">
            Outside of chemistry, Leon enjoys lifting weights—actually he loves
            lifting weights—skateboarding, playing basketball, playing smash
            bros, listening to music, and watching TV. Some shows they’re
            currently watching include “Demon Slayer”, “One Piece”, “Pretty
            Little Liars”, and “Boss and Me”. Some artists they currently love
            is Saba, Neck Deep, Aaron May, and Lontalius.
          </p>
          <p>Fan Facts:</p>
          <p>- Leon has been hard stuck at 5200 trophies on Clash Royale.</p>
          <p>
            - Leon is ever-so-slightly lactose intolerant, but eats copious
            amounts of strawberry Greek yogurt
          </p>
        </div>
      </div>
      <ProfilePicture :imgurls="[pic1, pic2, pic3, pic4]" />
    </div>
    <FooterBox />
  </div>
</template>
