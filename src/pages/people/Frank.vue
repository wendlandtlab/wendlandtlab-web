<script lang="ts">
import { Icon } from '@iconify/vue';
import profile from '/@/assets/people/frank/frank.png?url';
import pic1 from '/@/assets/people/frank/frank3.jpeg?url';
import pic2 from '/@/assets/people/frank/frank4.jpeg?url';
import pic3 from '/@/assets/people/frank/frank2.jpeg?url';
import pic4 from '/@/assets/people/frank/frank1.jpeg?url';

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
            PersonName="Frank de Kleijne"
            Orcid="https://orcid.org/0000-0002-8925-5709"
            Title="Visiting student"
            ProfileLink="/people"
            :Picture="profile"
            Email="frankdk[at]mit.edu"
            LinkedIn="https://www.linkedin.com/in/frank-de-kleijne/"
          />
        </div>
        <div class="flex-1 text-justify">
          <p class="mb-4">
            Frank grew up in a small town in the Netherlands and obtained his
            B.S. in Chemistry from the Fontys University of Applied Science at
            Eindhoven (Netherlands) in 2019. Currently he is pursuing his master
            degree in Chemistry at the Radboud University Nijmegen
            (Netherlands). Franks interest in organic synthesis, reaction
            mechanisms, and reaction methodologies was catalysed during his
            first internship in 2017 where he worked in the group of dr. Patrick
            Murphy at the Bangor University (Wales, UK). Later, in 2018, he
            joined the lab of dr. Thomas Boltje at the Radboud University
            Nijmegen (Netherlands) to finish his bachelor studies. The positive
            atmosphere in the group encouraged him to return to the Boltje group
            in 2020 for his master thesis. In this work, he joined forces with
            the group of dr. Paul White combining glycosylation reactions with
            NMR spectroscopy. Along his research he experienced the laborious
            reaction sequences to selectively modify a single sugar hydroxyl.
            Recent publications by our group intrigued him and motivated Frank
            to join the lab and explore the possibilities and opportunities of
            radical reactions for carbohydrate synthesis.
          </p>
          <p>Fan Facts:</p>
          <p>
            - Frank has a dog named Frits
          </p>
          <p>
            - What he likes most about Boston are the squirrels
          </p>
          <p>
            - Frank likes to explore, travel, and visit places new to him 
          </p>
        </div>
      </div>
      <ProfilePicture :imgurls="[pic1, pic2, pic3, pic4]" />
    </div>
    <FooterBox />
  </div>
</template>
