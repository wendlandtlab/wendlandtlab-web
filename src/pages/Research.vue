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
  <div class="container mx-auto max-w-screen-lg">
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
    <FooterBox />
  </div>
</template>
