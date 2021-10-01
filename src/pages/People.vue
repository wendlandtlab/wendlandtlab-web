<script lang="ts">
import { Icon } from '@iconify/vue';
export default {
  components: {
    Icon,
  },
};
</script>
<template>
  <HeaderMenu />
  <div class="py-3 pb-3 mx-auto max-w-screen-lg">
    <img
      src="https://wendlandtlab.com/wp-content/uploads/2019/09/BA45ADEB-3DC3-4BC9-AF36-430F29182B0B-13292-000008A6E2FFE125-1-e1568640727111.jpg"
      alt=""
      class="object-auto overflow-hidden rounded-md h-auto w-full"
    />
  </div>
  <div class="mx-auto">
    <TeamMember
      PersonName="Alison Wendlandt"
      Orcid="#"
      ProfileLink="#"
      Title="Assistant Professor"
      Picture="/src/assets/people/alison/alison.png"
      Email="awendlan[at]mit.edu"
    />
  </div>
  <div class="flex flex-wrap justify-evenly py-5 px-4 mx-auto max-w-screen-lg">
    <TeamMember
      PersonName="Yuan Zhang"
      Orcid="#"
      ProfileLink="/people/yuan"
      Title="Postdoctoral Fellow"
      Picture="/src/assets/people/yuan/yuan.png"
      Email="yazhang[at]mit.edu"
    />
    <TeamMember
      PersonName="Vignesh Palani"
      Orcid="#"
      ProfileLink="/people/vignesh"
      Title="Postdoctoral Fellow"
      Picture="/src/assets/people/yuan/yuan.png"
      Email="palan019[at]mit.edu"
    />
    <TeamMember
      PersonName="Gino Occhialini"
      Orcid="#"
      ProfileLink="/people/gino"
      Title="Graduate Student (G4)"
      Picture="/src/assets/people/gino/gino.png"
      Email="ginoocch[at]mit.edu"
    />
    <TeamMember
      PersonName="Aaron Liu"
      Orcid="#"
      ProfileLink="/people/aaron"
      Title="Graduate Student (G4)"
      Picture="/src/assets/people/aaron/aaron.png"
      Email="aaronliu[at]mit.edu"
    />
    <TeamMember
      PersonName="Xin Gu"
      Orcid="#"
      ProfileLink="/people/xin"
      Title="Graduate Student (G4)"
      Picture="/src/assets/people/xin/xin.png"
      Email="gux[at]mit.edu"
    />
    <TeamMember
      PersonName="Hayden Carder"
      Orcid="#"
      ProfileLink="/people/hayden"
      Title="Graduate Student (G4)"
      Picture="https://i1.wp.com/wendlandtlab.com/wp-content/uploads/2019/10/IMG_6965-1.jpg?w=1080&ssl=1"
      Email="hcarder[at]mit.edu"
    />
    <TeamMember
      PersonName="Alex Seim"
      Orcid="#"
      ProfileLink="/people/alex"
      Title="Graduate Student (G4)"
      Picture="https://i2.wp.com/wendlandtlab.com/wp-content/uploads/2019/10/IMG_6963-1.jpg?w=1080&ssl=1"
      Email="aseim[at]mit.edu"
    />
  </div>
<div class="flex mx-auto max-w-screen-lg py-5 px-10">
  <div
    class="
      w-30
      h-30
      rounded-full
      flex-none
      flex
      justify-center
      align-center
      items-center
      bg-gray-600
      text-gray-50
      text-2xl
      italic
      font-extrabold
      
    "
  >
    <p>You?</p>
  </div>
  <div class="text-gray-700 text-justify pl-10">
    <p>
      The Wendlandt Group is always looking for talented researchers —
      regardless of background — eager to join in our endeavors. Prospective
      graduate students should apply through the Chemistry department program.
      Postdoctoral candidates should contact Alison via email
      (awendlan[at]mit.edu) with their C.V. and a list of references.
      Undergraduates who are
      interested in a research experience should contact Alison via email.
    </p>
  </div></div>
  <div class="max-w-screen-lg mx-auto px-5 py-5">
      <p class="text-2xl text-gray-800 font-extrabold">Alumni</p>
    <Alumni
    PersonName="Yong Wang"
    Title="Postdoc (xxx-xxx)"
    Picture="https://i1.wp.com/wendlandtlab.com/wp-content/uploads/2019/10/IMG_6965-1.jpg?w=1080&ssl=1"
    LinkedIn="https://www.linkedin.com/in/yong-wang-5a30b470/"
  />
    <Alumni
    PersonName="Zhaohong Lu"
    Orcid="https://orcid.org/0000-0003-3811-5375"
    Title="Postdoc (xxx-xxx)"
    Picture="https://i1.wp.com/wendlandtlab.com/wp-content/uploads/2019/10/IMG_6965-1.jpg?w=1080&ssl=1"
    LinkedIn="https://www.linkedin.com/in/zhaohong-lu-b8a3aa190/"
  />
    <Alumni
    PersonName="Johanna Barbour"
    Orcid="https://orcid.org/0000-0003-3811-5375"
    Title="M.S. (2020)"
    Picture="https://i1.wp.com/wendlandtlab.com/wp-content/uploads/2019/10/IMG_6965-1.jpg?w=1080&ssl=1"
    LinkedIn="https://www.linkedin.com/in/hayden-carder-45757a171/"
  />
      </div>
  <FooterBox />
</template>
