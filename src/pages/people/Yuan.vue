<script lang="ts">
import { Icon } from '@iconify/vue';
import profile from '/@/assets/people/yuan/yuan.jpg?url';
import pic1 from '/@/assets/people/yuan/yuan-1.jpg?url';
import pic2 from '/@/assets/people/yuan/yuan-2.jpg?url';
import pic3 from '/@/assets/people/yuan/yuan-3.jpg?url';
import pic4 from '/@/assets/people/yuan/yuan-4.jpg?url';

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
      <div class="flex flex-col sm:flex-row mx-auto max-w-screen-xl py-10 px-6 items-center">
        <div class="flex-initial">
          <TeamMember
            PersonName="Yuan Zhang"
            ProfileLink="/people"
            Title="Postdoctoral fellow"
            :Picture="profile"
            Email="yazhang[at]mit.edu"
            LinkedIn="https://www.linkedin.com/in/yuan-zhang-531275105"
            Orcid="https://orcid.org/0000-0002-4565-2809"            
            Pronouns="He/Him"
          />
        </div>
        <div class="flex-1 text-justify">
          <p class="mb-4">
            Yuan was born and raised in Guangzhou (Canton), China. After
            finishing high school, he went to Peking University Health Science
            Center where he obtained his bachelor degree in pharmaceutical
            science and master degree in medicinal chemistry. His master
            projects in Prof. Yanxing Jia’s group focused on the total syntheses
            of ergot alkaloids. Continuing his passion for total synthesis, he
            moved to the US in 2014 and performed graduate research in the group
            of Prof. Scott Snyder first at the Scripps Research Institute
            (Florida), and later at the University of Chicago where he
            accomplished the syntheses of multiple halogenated cyclic ether and
            meroterpenoid natural products. In 2020, Yuan joined the Wendlandt
            Group to explore radical-mediated transformations. Outside the lab,
            Yuan enjoys playing fingerstyle guitar, hiking and tasting great
            foods in the local restaurants or prepared by his girlfriend.
          </p>
          <p>Fun Facts:</p>
          <p>
            -Yuan used to play a lot poker with the students from the financial
            mathematic program, but he quit after they got fancy jobs
            in trading firms and kept raising the buy-in price.
          </p>
          <p>
            - He watches random funny animal videos every day and visits the zoo
            occasionally.
          </p>
          <p>- He hates snow.</p>
        </div>
      </div>
      <ProfilePicture :imgurls="[pic1, pic2, pic3, pic4]" />
    </div>
    <FooterBox />
  </div>
</template>
