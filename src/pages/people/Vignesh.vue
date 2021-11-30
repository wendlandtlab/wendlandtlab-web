<script lang="ts">
import { Icon } from '@iconify/vue';
import profile from '/@/assets/people/vignesh/vignesh.png?url';
import pic1 from '/@/assets/people/vignesh/vignesh-1.png?url';
import pic2 from '/@/assets/people/vignesh/vignesh-2.png?url';
import pic3 from '/@/assets/people/vignesh/vignesh-3.png?url';
import pic4 from '/@/assets/people/vignesh/vignesh-4.png?url';

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
    <div class="flex-grow mb-5">
      "
      <div class="flex mx-auto max-w-screen-lg py-10 px-6 items-center">
        <div class="flex-initial">
          <TeamMember
            PersonName="Vignesh Palani"
            Orcid="https://orcid.org/0000-0002-6340-7655"
            Title="Postdoctoral Fellow"
            :Picture="profile"
            Email="palan019[at]mit.edu"
            LinkedIn="https://www.linkedin.com/in/vignesh-palani-1145b9ba/"
          />
        </div>
        <div class="flex-1 text-justify">
          <p class="mb-4">
            Vignesh began his life in India, but soon found he wanted greater
            adventure, so he came to the US to do his undergraduate work at the
            University of Minnesota-Twin Cities. There he worked with Prof.
            Thomas R. Hoye on the hexadehydro-Diels-Alder (HDDA) reaction
            project where he investigated trapping HDDA-generated benzynes with
            sulfur and nitrogen-based nucleophiles. It was here that he decided
            that the cold weather was not for him, so he decided to travel to
            the west coast to pursue his graduate studies. He earned his Ph.D.
            in chemistry from the University of California, Berkeley in 2020,
            where he carried out his research in the laboratory of Professor
            Richmond Sarpong. At UC Berkeley, he worked on the total synthesis
            of complex natural products and new reaction development. He then
            moved to the east coast to pursue his postdoctoral studies. Outside
            lab, Vignesh enjoys running, playing badminton, and going for scenic
            drives.
          </p>
          <p>Fan Facts:</p>
          <p>
            - Vignesh developed a taste of pranks during his undergraduate
            studes at UMN and so far, holds a high success rate with the pranks
            he carried out.
          </p>
          <p>
            - Being a strong believer of "any time is ice cream time," he has
            tried all 31 flavors from Baskin Robbins and is a BR rewards member.
          </p>
          <p>
            - His favorite tourist destination in the US is Niagra Falls, which
            he visited in his first week in the states.
          </p>
        </div>
      </div>
      <ProfilePicture :imgurls="[pic1, pic2, pic3, pic4]" />
    </div>
    <FooterBox />
  </div>
</template>
