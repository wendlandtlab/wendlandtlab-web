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
            PersonName="Yuan Zhang"
            Title="Postdoctoral fellow"
            Picture="/src/assets/people/yuan/yuan.png"
            Email="yazhang[at]mit.edu"
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
            Yuan enjoy playing fingerstyle guitar, hiking and tasting great
            foods in the local restaurants or prepared by his girlfriend.
          </p>
          <p>Fun Facts:</p>
          <p>
            -Yuan used to play a lot poker with the students from the financial
            mathematic program. But he quitted after these guys got fancy jobs
            in trading firms and kept raising the buy-in price.
          </p>
          <p>
            - He watches random funny animal videos every day and visits the zoo
            occasionally.
          </p>
          <p>- He hates snow.</p>
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
