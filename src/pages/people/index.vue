<script lang="ts">
import { Icon } from '@iconify/vue';
import alison from '/@/assets/people/alison/alison.png?url';
import yuan from '/@/assets/people/yuan/yuan.png?url';
import vignesh from '/@/assets/people/yuan/yuan.png?url';
import gino from '/@/assets/people/gino/gino.png?url';
import aaron from '/@/assets/people/aaron/aaron.png?url';
import xin from '/@/assets/people/xin/xin.png?url';
import hayden from '/@/assets/people/hayden/hayden.png?url';
import alex from '/@/assets/people/alex/alex.png?url';



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
    };
  },
};
</script>
<template>
  <div class="flex flex-col min-h-screen">
    <HeaderMenu />
    <div class="flex-grow">
      <div class="py-3 pb-3 mx-auto max-w-screen-lg">
        <img
          src="/@/assets/group-photo.jpg"
          alt=""
          class="object-auto overflow-hidden rounded-md h-auto w-full"
        />
      </div>
      <div class="mx-auto">
        <TeamMember
          PersonName="Alison Wendlandt"
          Orcid="#"
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
          Orcid="#"
          ProfileLink="#"
          Title="Postdoctoral Fellow"
          :Picture="yuan"
          Email="yazhang[at]mit.edu"
        />
        <TeamMember
          PersonName="Vignesh Palani"
          Orcid="#"
          ProfileLink="#"
          Title="Postdoctoral Fellow"
          :Picture="vignesh"
          Email="palan019[at]mit.edu"
        />
        <TeamMember
          PersonName="Gino Occhialini"
          Orcid="#"
          ProfileLink="#"
          Title="Graduate Student (G4)"
          :Picture="gino"
          Email="ginoocch[at]mit.edu"
        />
        <TeamMember
          PersonName="Aaron Liu"
          Orcid="#"
          ProfileLink="#"
          Title="Graduate Student (G4)"
          :Picture="aaron"
          Email="aaronliu[at]mit.edu"
        />
        <TeamMember
          PersonName="Xin Gu"
          Orcid="#"
          ProfileLink="#"
          Title="Graduate Student (G4)"
          :Picture="xin"
          Email="gux[at]mit.edu"
        />
        <TeamMember
          PersonName="Hayden Carder"
          Orcid="#"
          ProfileLink="#"
          Title="Graduate Student (G4)"
          :Picture="hayden"
          Email="hcarder[at]mit.edu"
        />
        <TeamMember
          PersonName="Alex Seim"
          Orcid="#"
          ProfileLink="#"
          Title="Graduate Student (G4)"
          :Picture="alex"
          Email="aseim[at]mit.edu"
        />
      </div>
      <div class="flex mx-auto max-w-screen-lg py-5 px-10">
        <div
          class="
            w-30
            h-30
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
        <div class="text-gray-700 text-justify pl-10">
          <p>
            The Wendlandt Group is always looking for talented researchers —
            regardless of background — eager to join in our endeavors.
            Prospective graduate students should apply through the Chemistry
            department program. Postdoctoral candidates should contact Alison
            via email (awendlan[at]mit.edu) with their C.V. and a list of
            references. Undergraduates who are interested in a research
            experience should contact Alison via email.
          </p>
        </div>
      </div>
      <div class="max-w-screen-lg mx-auto px-5 py-5">
        <p class="text-2xl text-gray-800 font-extrabold">Alumni</p>
        <Alumni
          PersonName="Yong Wang"
          Title="Postdoc (xxx-xxx)"
          Picture="../assets/people/alumni/yong.png"
          LinkedIn="https://www.linkedin.com/in/yong-wang-5a30b470/"
        />
        <Alumni
          PersonName="Zhaohong Lu"
          Title="Postdoc (xxx-xxx)"
          Picture="../assets/people/alumni/lu.png"
          LinkedIn="https://www.linkedin.com/in/zhaohong-lu-b8a3aa190/"
        />
        <Alumni
          PersonName="Johanna Barbour"
          Title="M.S. (2020)"
          Picture="../assets/people/alumni/johanna.png"
          LinkedIn="https://www.linkedin.com/in/johbrbr?trk=people-guest_people_search-card"
        />
        <Alumni
          PersonName="Kathleen Wang"
          Title="M.S. (2020)"
          Picture="../assets/people/alumni/kathleen.png"
          LinkedIn="https://www.linkedin.com/in/kathleenjwang/"
        />
        <Alumni
          PersonName="Carolyn Suh "
          Title="M.S. (2020)"
          Picture="../assets/people/alumni/carolyn.png"
          LinkedIn="https://www.linkedin.com/in/carolyn-suh/"
        />
        <Alumni
          PersonName="Krista Dong "
          Title="Undergrad (xx-xx)"
          Picture="../assets/people/alumni/krista.png"
          LinkedIn="https://www.linkedin.com/in/kristadong/"
        />
        <Alumni
          PersonName="Ellie Plachinski "
          Title="Undergrad (xx-xx)"
          Picture="../assets/people/alumni/ellie.png"
          LinkedIn="#"
        />
      </div>
    </div>
    <FooterBox />
  </div>
</template>
