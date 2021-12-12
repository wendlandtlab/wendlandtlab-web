<script lang="ts">
import { Icon } from '@iconify/vue';
import alison from '/@/assets/people/alison/alison.png?url';
import yuan from '/@/assets/people/yuan/yuan.png?url';
import vignesh from '/@/assets/people/vignesh/vignesh.png?url';
import gino from '/@/assets/people/gino/gino.png?url';
import aaron from '/@/assets/people/aaron/aaron.png?url';
import xin from '/@/assets/people/xin/xin.png?url';
import hayden from '/@/assets/people/hayden/hayden.png?url';
import alex from '/@/assets/people/alex/alex.png?url';
import carolyn from '/@/assets/people/alumni/carolyn.png?url';
import ellie from '/@/assets/people/alumni/ellie.png?url';
import johanna from '/@/assets/people/alumni/johanna.png?url';
import kathleen from '/@/assets/people/alumni/kathleen.png?url';
import krista from '/@/assets/people/alumni/krista.png?url';
import lu from '/@/assets/people/alumni/lu.png?url';
import yong from '/@/assets/people/alumni/yong.png?url';

export default {
  components: {
    Icon,
  },
  setup() {
    return {
      alison,
      yuan,
      vignesh,
      gino,
      aaron,
      xin,
      hayden,
      alex,
      carolyn,
      ellie,
      johanna,
      kathleen,
      krista,
      lu,
      yong,
    };
  },
};
</script>
<template>
  <div class="flex flex-col min-h-screen">
    <HeaderMenu />
    <div class="flex-grow">
      <div class="container py-3 pb-3 mx-auto max-w-screen-lg">
        <img
          src="../../assets/group-photo.jpg"
          alt=""
          class="object-auto overflow-hidden rounded-md h-auto w-full"
        />
      </div>
      <div class="mx-auto">
        <TeamMember
          PersonName="Alison Wendlandt"
          ProfileLink="/people/alison"
          Title="Assistant Professor"
          :Picture="alison"
          Email="awendlan[at]mit.edu"
        />
      </div>
      <div
        class="flex flex-wrap justify-evenly py-5 px-4 mx-auto max-w-screen-lg"
      >
        <TeamMember
          PersonName="Yuan Zhang"
          ProfileLink="/people/yuan"
          Title="Postdoctoral Fellow"
          :Picture="yuan"
          Email="yazhang[at]mit.edu"
        />
        <TeamMember
          PersonName="Vignesh Palani"
          ProfileLink="/people/vignesh"
          Title="Postdoctoral Fellow"
          :Picture="vignesh"
          Email="palan019[at]mit.edu"
        />
        <TeamMember
          PersonName="Gino Occhialini"
          ProfileLink="/people/gino"
          Title="Graduate Student (G4)"
          :Picture="gino"
          Email="ginoocch[at]mit.edu"
        />
        <TeamMember
          PersonName="Aaron Liu"
          ProfileLink="/people/aaron"
          Title="Graduate Student (G4)"
          :Picture="aaron"
          Email="aaronliu[at]mit.edu"
        />
        <TeamMember
          PersonName="Xin Gu"
          ProfileLink="/people/xin"
          Title="Graduate Student (G4)"
          :Picture="xin"
          Email="gux[at]mit.edu"
        />
        <TeamMember
          PersonName="Hayden Carder"
          ProfileLink="/people/hayden"
          Title="Graduate Student (G4)"
          :Picture="hayden"
          Email="hcarder[at]mit.edu"
        />
        <TeamMember
          PersonName="Alex Seim"
          ProfileLink="/people/alex"
          Title="Graduate Student (G4)"
          :Picture="alex"
          Email="aseim[at]mit.edu"
        />
      </div>
      <div class="flex flex-col sm:flex-row mx-auto max-w-screen-lg py-5 px-10">
        <div
          class="
            w-30
            h-30
            mx-auto
            rounded-full
            flex-none flex
            justify-center
            align-center
            items-center
            bg-gray-600
            text-gray-50 text-2xl
            italic
            font-extrabold
          "
        >
          <p>You?</p>
        </div>
        <div class="text-gray-700 text-justify py-5 px-5">
          <p>
            The Wendlandt Group is always looking for talented researchers —
            regardless of background — eager to join in our endeavors.
            Prospective graduate students should apply through the Chemistry
            department program. Postdoctoral candidates should contact Alison
            via email (awendlan[at]mit.edu) with their C.V., a research summary
            and a cover letter. Undergraduates, who are interested in a research
            experience, should contact Alison via email.
          </p>
        </div>
      </div>
      <div class="max-w-screen-lg mx-auto px-5 py-5">
        <p class="text-2xl text-gray-800 font-extrabold">Alumni</p>
        <div class="flex flex-col lg:flex-row">
          <div>
            <Alumni
              PersonName="Johanna Barbour"
              Title="M.S. (2020)"
              :Picture="johanna"
              LinkedIn="https://www.linkedin.com/in/johbrbr?trk=people-guest_people_search-card"
            />
            <Alumni
              PersonName="Krista Dong "
              Title="Undergrad (xx-xx)"
              :Picture="krista"
              LinkedIn="https://www.linkedin.com/in/kristadong/"
            />
            <Alumni
              PersonName="Zhaohong Lu"
              Title="Postdoc (2019-2020)"
              :Picture="lu"
              LinkedIn="https://www.linkedin.com/in/zhaohong-lu-b8a3aa190/"
            />
            <Alumni
              PersonName="Ellie Plachinski "
              Title="Undergrad (xx-xx)"
              :Picture="ellie"
              LinkedIn="https://www.linkedin.com/in/ellie-plachinski-8a2168149/"
            />
          </div>
          <div>
            <Alumni
              PersonName="Carolyn Suh "
              Title="M.S. (2020)"
              :Picture="carolyn"
              LinkedIn="https://www.linkedin.com/in/carolyn-suh/"
            />
            <Alumni
              PersonName="Kathleen Wang"
              Title="M.S. (2020)"
              :Picture="kathleen"
              LinkedIn="https://www.linkedin.com/in/kathleenjwang/"
            />
            <Alumni
              PersonName="Yong Wang"
              Title="Postdoc (2019-2020)"
              :Picture="yong"
              LinkedIn="https://www.linkedin.com/in/yong-wang-5a30b470/"
            />
          </div>
        </div>
      </div>
    </div>
    <FooterBox />
  </div>
</template>
