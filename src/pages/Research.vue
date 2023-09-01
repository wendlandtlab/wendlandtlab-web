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
            steps can be delivered. In this photochemical manifold, the product
            distributions are determined by the kinetic selectivities of each
            step.
          </p>
        </div>
        <div class="flex flex-wrap justify-evenly px-4 pb-5">
          <img
            src="../assets/research/therm-isom.svg?url"
            alt="thermodynamic isomerization energy diagram"
            class="object-contain overflow-hidden py-2 w-120"
          />
          <img
            src="../assets/research/kinetic-isom.svg?url"
            alt="kinetic isomerization energy diagram"
            class="object-contain overflow-hidden py-2 w-120"
          />
        </div>
        <div class="text-xl text-gray-600 font-sans font-bold my-1">
          Stereochemical editing:
        </div>
        <div class="text-justify text-md text-gray-600">
          <p class="mb-2">
            Stereochemistry forms the foundation of the structure-function
            relationship in natural products and biomolecules. The selective
            installation of stereocenters remains one of the chemist's greatest
            tools and challenges. In traditional synthetic strategies, the
            desired stereochemistry is conferred during the core synthesis, and
            often synthetic approaches are built around desired stereochemical
            outcomes. Late-stage stereochemical
            <a
              href="https://wendlandtlab.blob.core.windows.net/pubs/2021-JACS-ZhangGu-article.pdf"
              class="text-blue-700 font-bold"
              >editing</a
            >
            delivers the ability to diversify this approach. Imagine a molecule
            as a jigsaw puzzle, with the intricate spatial arangement of atoms
            in space as the pieces. To change one piece, would you rather take
            apart the puzzle or carefully excise just the piece of interest?
          </p>
        </div>
        <div class="flex flex-wrap justify-evenly px-4 pb-5">
          <img
            src="../assets/research/streptomycin.svg?url"
            alt="streptomycin structure"
            class="object-contain overflow-hidden rounded-md py-2 w-64"
          />
          <img
            src="../assets/research/puzzle.svg?url"
            alt="puzzle analogy"
            class="object-contain overflow-hidden py-2 w-sm"
          />
          <img
            src="../assets/research/puzzle-part.svg?url"
            alt="puzzle visual of molecule"
            class="object-contain overflow-hidden rounded-md py-2 w-sm"
          />
        </div>
        <div class="text-xl text-gray-600 font-sans font-bold my-1">
          Selective synthesis of "rare" monosaccharides:
        </div>
        <div class="text-justify text-md text-gray-600">
          <p class="mb-2">
            Carbohydrates are a key component of life, implicated in essential
            biological processes - cell signaling, mechanical structure, and
            energy storage. Hundreds of distinct monosaccharides, known as “rare
            sugars”, feature prominently in bioactive natural products and are
            under investigation as signaling agents in biological pathways,
            active chemophores in pharmaceuticals, and as low-glycemic
            sweeteners. However, despite their importance to human health, the
            exploration of rare and unnatural sugars as biologically relevant
            chemical structures remains underexplored due to their
            unavailability. Rare and unnatural sugars cannot be isolated from
            nature and instead must be synthesized by laborious, specialized,
            and often low-yielding multistep chemical or enzymatic syntheses. In
            principle, biomass-derived monosaccharides (e.g., (D)-glucose,
            (D)-mannose, (D)-galactose) provide an ideal starting material for
            the synthesis of rare and unnatural sugars; however, carbohydrate
            modification presents significant selectivity challenges. We
            envision radical reactions can enable the divergent synthesis of
            rare and unnatural sugars from unprotected biomass-derived
            precursors (ie
            <a
              href="https://wendlandtlab.blob.core.windows.net/pubs/2020-Nature-Wang-article.pdf"
              class="text-blue-700 font-bold"
              >epimerization</a
            >,
            <a
              href="https://wendlandtlab.blob.core.windows.net/pubs/2021-JACS-Carder-article.pdf"
              class="text-blue-700 font-bold"
              >deoxygenation</a
            >).
          </p>
        </div>
        <div class="mx-auto">
          <img
            src="../assets/research/sugars.svg?url"
            alt="streptomycin structure"
            class="
              object-contain
              overflow-hidden
              rounded-md
              py-2
              w-screen-sm
              lg:w-screen-lg
              mx-auto
            "
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
