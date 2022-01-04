<script lang="ts">
import { Icon } from '@iconify/vue';
import { useMeta } from 'vue-meta';
useMeta({
  title: 'Research'
})
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
      <div class="container mx-auto py-5 px-5 max-w-screen-xl">
        <div class="flex flex-col mx-auto sm:flex-row align-middle px-5">
          <div
            class="
              w-18
              h-18
              rounded-full
              flex
              px-5
              mx-5
              align-middle
              mx-auto
              justify-center
              items-center
              text-red-700
              bg-red-200
            "
          >
            <Icon
              icon="grommet-icons:cycle"
              width="35"
              class="iconify-inline"
            />
          </div>
          <div class="text-justify flex-grow text-md text-gray-600 pb-3">
            <p>
              We are excited about developing new
              <b class="text-red-700 text-lg">catalytic methods</b> for
              selective organic transformations. Although we are excited to
              explore any area our chemistry and imagination takes us, lately
              our interest has been captured by new redox-neutral
              <i>editing</i> approaches to organic synthesis&#8212;particularly
              those utilizing mild and selective radical chemistry. In
              identifying important chemical problems, we position ourselves to
              unravel new <b class="text-green-600"> mechanisms</b> using a
              strong background in physical organic techniques, framed by
              meaninful <b class="text-blue-700">applications</b>, such as in
              the synthesis of bio-relevant molecules.
            </p>
          </div>
        </div>
        <div
          class="
            rounded-md
            mx-auto
            max-w-screen-xl
            flex flex-wrap
            overflow-hidden
          "
        >
          <img
            src="../assets/photos/photochem.jpg"
            alt="photo-chemistry setup"
            class="object-cover py-5 w-full h-100"
          />
        </div>
        <div class="text-2xl font-sans font-bold my-5">Who funds us:</div>
        <div class="flex flex-wrap justify-evenly px-4 pb-5">
          <a href="https://www.mit.edu/">
            <img
              src="../assets/mit-logo-notext.svg?url"
              alt="MIT"
              class="object-contain overflow-hidden py-4 h-30"
            />
          </a>
          <a href="https://www.nih.gov/">
            <img
              src="../assets/nih-logo.svg?url"
              alt="NIH"
              class="object-contain overflow-hidden py-4 h-30"
          /></a>
          <a
            href="https://www.acs.org/content/acs/en/funding/grants/petroleum-research-fund.html"
            ><img
              src="../assets/prf-logo.jpg"
              alt="ACS PRF"
              class="object-contain overflow-hidden-md py-4 h-30"
          /></a>
          <a href="https://www.beckman-foundation.org/"
            ><img
              src="../assets/beckman-logo.png"
              alt="Beckman Foundation"
              class="object-contain overflow-hidden py-4 h-30"
          /></a>
        </div>
      </div>
    </div>
    <FooterBox />
  </div>
</template>
