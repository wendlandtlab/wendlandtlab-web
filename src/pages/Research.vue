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
      <div class="container mx-auto max-w-screen-xl">
        <div class="flex flex-wrap justify-evenly pt-5 px-4 my-5">
          <ResearchArea
            Area="New Catalysis"
            Icon="grommet-icons:cycle"
            IconColor="red"
            Description="Design and discovery of new catalytic methods to expand chemical understanding and synthetic potential"
          />
          <ResearchArea
            Area="New Mechanisms"
            Icon="eos-icons:rotating-gear"
            IconColor="green"
            Description="Elucidation of new mechanistic principles to expand or compliment powerful existing reaction maifolds"
          />
          <ResearchArea
            Area="New Applications"
            Icon="fluent:toolbox-12-filled"
            IconColor="blue"
            Description="Identification and refinement of important methodologies for selective catalytic processes"
          />
        </div>
        <div class="">
          <img
            src="https://wendlandtlab.com/wp-content/uploads/2020/10/Image-from-iOS-1-scaled.jpg"
            alt=""
            class="object-cover overflow-hidden rounded-md h-100 w-full"
          />
        </div>
        <div class="text-2xl font-sans font-bold my-5">Who funds us:</div>
        <div class="flex flex-wrap justify-evenly px-4 pb-5">
          <a href="https://www.mit.edu/">
            <img
              src="../assets/mit-logo-notext.svg?url"
              alt="MIT"
              class="object-contain overflow-hidden  h-30"
            />
          </a>
          <a href="https://www.nih.gov/">
            <img
              src="../assets/nih-logo.svg?url"
              alt="NIH"
              class="object-contain overflow-hidden h-30"
          /></a>
          <a
            href="https://www.acs.org/content/acs/en/funding/grants/petroleum-research-fund.html"
            ><img
              src="../assets/prf-logo.jpg"
              alt="ACS PRF"
              class="object-contain overflow-hidden-md h-30"
          /></a>
          <a href="https://www.beckman-foundation.org/"
            ><img
              src="../assets/beckman-logo.png"
              alt="Beckman Foundation"
              class="object-contain overflow-hidden h-30"
          /></a>
        </div>
      </div>
    </div>
    <FooterBox />
  </div>
</template>
