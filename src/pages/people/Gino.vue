<script lang="ts">
import { Icon } from '@iconify/vue';
import profile from '/@/assets/people/gino/gino.png?url';
import pic1 from '/@/assets/people/gino/gino-1.png?url';
import pic2 from '/@/assets/people/gino/gino-2.png?url';
import pic3 from '/@/assets/people/gino/gino-3.png?url';
import pic4 from '/@/assets/people/gino/gino-4.png?url';

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
      <div class="flex mx-auto max-w-screen-xl py-10 px-6 items-center">
        <div class="flex-initial">
          <TeamMember
            PersonName="Gino Occhialini"
            Orcid="https://orcid.org/0000-0001-9682-1740"
            Title="Graduate Student (G4)"
            :Picture="profile"
            Email="ginoocch[at]mit.edu"
            LinkedIn="https://www.linkedin.com/in/gino-occhialini-4bb670103"
          />
        </div>
        <div class="flex-1 text-justify">
          <p class="mb-4">
            Gino grew up in central Texas, and completed his B.S. in Chemistry
            at the University of Texas at Dallas. While there, he conducted
            research under Professor Ronald Smaldone focusing on covalent
            organic frameworks and porous organic polymers. For this work, Gino
            was awarded a Goldwater scholarship in 2017. In his free time, Gino served
            as a workshop leader in various chemistry classes.
            Interested in branching out to methodology research and mechanistic study, he attended MIT to pursue his Ph.D. under Professor
            Alison Wendlandt. Gino's studies at MIT are funded under an NSF GRFP.
          </p>
          <p>Fan Facts:</p>
          <p>
            - Gino designed and manages this website.
          </p>
          <p>
            - Gino built a 3d-printer, which he consistently breaks and fixes.
          </p>
                    <p>
            - Gino has an identical twin brother.
          </p>
        </div>
      </div>
      <ProfilePicture :imgurls="[pic1, pic2, pic3, pic4]" />
    </div>
    <FooterBox />
  </div>
</template>
