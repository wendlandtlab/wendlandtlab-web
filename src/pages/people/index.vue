<script lang="ts">
import { Icon } from '@iconify/vue';
import { defineComponent } from 'vue';
import Person from '/@/types/Person';
import group from '/@/data/people' ;
import alumni from '/@/data/alumni';
import alison from '/@/assets/people/alison/alison.jpg?url';

const groupValues = Array.from(group.values()) as Person[];
const groupKeys = Array.from(group.keys()) as String[];

// zip arrays together
const groupArray = groupValues.map((value, index) => {
  return { ...value, id: groupKeys[index] };
}) as Person[];

export default defineComponent({
  components: {
    Icon,
  },
  setup() {
    return {
      groupArray,
      alumni,
      alison
    };
  },
});
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
          Title="Associate Professor"
          :Picture="alison"
          Email="awendlan[at]mit.edu"
          Pronouns="She/Her"
        />
      </div>
      <div
        class="flex flex-wrap justify-evenly py-5 px-4 mx-auto max-w-screen-lg"
      >

          <TeamMember
            v-for="member in groupArray" :key="member"
            :PersonName="member.name"
            :ProfileLink="member.profile ? `/people/${member.id}`: '/people'"
            :Title="member.position"
            :Picture="member.profilePic"
            :Email="member.email + `[at]mit.edu`"
            :Pronouns="member.pronouns"
          />
      </div>
      <div class="flex flex-col sm:flex-row mx-auto max-w-screen-lg py-5 px-10">
        <div
          class="w-30 h-30 mx-auto rounded-full flex-none flex justify-center align-center items-center bg-gray-600 text-gray-50 text-2xl italic font-extrabold"
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
        <div
          class="grid justify-items-start grid-cols-1 pb-5 md:grid-cols-2 lg:grid-cols-3"
        >
          <Alumni
            v-for="member in alumni" :key="member"
                :PersonName="member.name"
                :Title="member.position"
                :Picture="member.profilePic"
                :LinkedIn="member.linkedin"
                :CurrentPos="member.currentPos"
              />        
        </div>
      </div>
    </div>
    <FooterBox />
  </div>
</template>
