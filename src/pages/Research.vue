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
      <div class="container mx-auto py-5 px-5 max-w-screen-xl">
        <div class="text-xl text-gray-600 font-sans font-bold my-2">
          Research in the Wendlandt Lab:
        </div>
        <div class="text-justify text-md text-gray-600 pb-3">
          <p class="mb-2">
            We seek to develop selective, concise, and synthetically useful
            chemical methods that are robust, predictable, and accessible to
            non-specialist users. In addition to the development of enabling
            technologies, our work seeks to reveal new mechanistic principles
            that are broadly applicable to organic synthesis and that transform
            our approach to selective bond construction.
          </p>
          <p>
            Recent work has focused on the development of selective, catalytic
            isomerization reactions. Using energy harnessed from visible light
            photons, we have identified chemical tools capable of achieving
            kinetic-control over traditionally thermodynamically controlled
            processes. We have sought to showcase the transformative potential
            of these methods in challenging synthetic contexts, including
            <a
              href="https://wendlandtlab.blob.core.windows.net/pubs/2020-Nature-Wang-article.pdf"
              class="text-blue-700 font-bold"
              >carbohydrate synthesis</a
            >,
            <a
              href="https://wendlandtlab.blob.core.windows.net/pubs/2021-JACS-ZhangGu-article.pdf"
              class="text-blue-700 font-bold"
              >late-stage stereochemical editing of complex molecules</a
            >, and
            <a
              href="https://wendlandtlab.blob.core.windows.net/pubs/2021-JACS-Occhialini-article.pdf"
              class="text-blue-700 font-bold"
              >alkene isomerization reactions.</a
            >
          </p>
        </div>
        <div class="text-xl text-gray-600 font-sans font-bold my-1">
          Thermodynamic equilibrium and kinetic control:
        </div>
        <div class="text-justify text-md text-gray-600">
          <p class="mb-2">
            Ground state reactions are governed by microscopic reversibility,
            where the minimum energy path between two states is conserved in the
            forwards and reverse direction. This limits thermal catalysis to
            product distributions aligned with their relative energies. For
            example, a radical-chain, H-atom transfer (HAT) mediated
            isomerization would eventually establish a thermodynamic equilibrium
            between two products. Photochemical reactions can escape this
            limitation by applying an energetic bias (light) such that two
            distinct, irreversible H-atom abstraction (HAA) and donation (HAD)
            steps can be established. In this photochemical manifold the product
            distributions are determined by the kinetic selectivities of each
            step.
          </p>
        </div>
        <div class="flex flex-wrap justify-evenly px-4 pb-5">
          <img
            src="../assets/research/therm-isom.svg?url"
            alt="thermodynamic isomerization energy diagram"
            class="object-contain overflow-hidden py-2 h-sm"
          />
          <img
            src="../assets/research/kinetic-isom.svg?url"
            alt="kinetic isomerization energy diagram"
            class="object-contain overflow-hidden py-2 h-sm"
          />
        </div>
        <div class="text-xl font-sans font-bold my-5">Who funds us:</div>
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
