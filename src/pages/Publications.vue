<script lang="ts">
import { Icon } from '@iconify/vue';
import toc5 from '/@/assets/publications/toc/JACS-2021-Occhialini.png';
import toc4 from '/@/assets/publications/toc/JACS-2021-ZhangGu.jpg';
import toc3 from '/@/assets/publications/toc/JACS-2021-Carder.svg?url';
import toc2 from '/@/assets/publications/toc/ACSChemBiol-2021-SuhCarder.png';
import toc1 from '/@/assets/publications/toc/Nature-2020-Wang.svg?url';
export default {
  components: {
    Icon,
  },
  setup() {
    return {
      toc1,
      toc2,
      toc3,
      toc4,
      toc5,
    };
  },
};
</script>
<template>
  <div class="flex flex-col min-h-screen">
    <HeaderMenu />
    <div class="flex-grow mx-auto">
      <div
        class="
          container
          max-w-screen-lg
          mx-auto mx-5
          px-5
          py-5
          flex flex-auto
          justify-center
        "
      >
        <router-link
          to="./AllCitations"
          class="text-xl mr-5 text-gray-700 font-extrabold"
          >Click Here: all citations including work prior to independent
          career</router-link
        >
      </div>
      <Publication
        pubType="article"
        pubTitle="Catalytic, contra-thermodynamic positional alkene isomerization"
        pubAuthors="Gino Occhialini, Vignesh Palani, Alison E. Wendlandt*"
        pubJournal="JACS"
        :pubYear="2021"
        pubDoi="J. Am. Chem. Soc. 2021, 10.1021/jacs.1c12043"
        publinkArticle="https://wendlandtlab.blob.core.windows.net/pubs/2021-JACS-Occhialini-article.pdf"
        publinkSi="https://wendlandtlab.blob.core.windows.net/pubs/2021-JACS-Occhialini-ESI.pdf"
        publinkPublisher="https://pubs.acs.org/doi/10.1021/jacs.1c12043"
        :pubToc="toc5"
      />
      <Publication
        pubType="article"
        pubTitle="A change from kinetic to thermodynamic control enables trans-selective stereochemical editing of vicinal diols"
        pubAuthors="Yu-an Zhang‡, Xin Gu‡, Alison E. Wendlandt* (‡ contributed equally)"
        pubJournal="JACS"
        :pubYear="2021"
        pubDoi="J. Am. Chem. Soc. 2021, 10.1021/jacs.1c11902"
        publinkArticle="https://wendlandtlab.blob.core.windows.net/pubs/2021-JACS-ZhangGu-article.pdf"
        publinkSi="https://wendlandtlab.blob.core.windows.net/pubs/2021-JACS-ZhangGu-ESI.pdf"
        publinkPublisher="https://pubs.acs.org/doi/10.1021/jacs.1c11902"
        :pubToc="toc4"
      />
      <Publication
        pubType="article"
        pubTitle="A unified strategy to access 2- and 4-deoxygenated sugars enabled by manganese-promoted 1,2-radical migration"
        pubAuthors="Hayden M. Carder, Carolyn E. Suh, Alison E. Wendlandt*"
        pubJournal="JACS"
        :pubYear="2021"
        pubDoi="J. Am. Chem. Soc. 2021, 10.1021/jacs.1c05993"
        publinkArticle="https://wendlandtlab.blob.core.windows.net/pubs/2021-JACS-Carder-article.pdf"
        publinkSi="https://wendlandtlab.blob.core.windows.net/pubs/2021-JACS-Carder-ESI.pdf"
        publinkPublisher="https://pubs.acs.org/doi/full/10.1021/jacs.1c05993"
        :pubToc="toc3"
      />
      <Publication
        pubType="review"
        pubTitle="Selective transformations of carbohydrates inspired by radical-based enzymatic mechanisms"
        pubAuthors="Carolyn E. Suh‡, Hayden M. Carder‡, Alison E. Wendlandt* (‡ contributed equally)"
        pubJournal="ACS Chem. Biol."
        :pubYear="2021"
        pubDoi="ACS Chem. Biol. 2021, 10.1021/acschembio.1c00190"
        publinkArticle="https://wendlandtlab.blob.core.windows.net/pubs/2021-ACSChemBiol-SuhCarder-review.pdf"
        publinkPublisher="https://pubs.acs.org/doi/10.1021/acschembio.1c00190"
        :pubToc="toc2"
      />
      <Publication
        pubType="article"
        pubTitle="Synthesis of rare sugar isomers through site-selective epimerization"
        pubAuthors="Yong Wang, Hayden M. Carder, Alison E. Wendlandt*"
        pubJournal="Nature"
        :pubYear="2020"
        pubDoi="Nature 2020, 10.1038/s41586-020-1937-1"
        publinkArticle="https://wendlandtlab.blob.core.windows.net/pubs/2020-Nature-Wang-article.pdf"
        publinkSi="https://wendlandtlab.blob.core.windows.net/pubs/2020-Nature-Wang-ESI.pdf"
        publinkPublisher="https://www.nature.com/articles/s41586-020-1937-1%20"
        :pubToc="toc1"
      />
      <Publication
        pubType="perspective"
        pubTitle="Photocatalytic deracemization fixes the mix (Perspective)"
        pubAuthors="Alison E. Wendlandt"
        pubJournal="Science"
        :pubYear="2019"
        pubDoi="Science, 2019, 366, 304-305"
        publinkArticle="https://wendlandtlab.blob.core.windows.net/pubs/2019-Science-Wendlandt-perspective.pdf"
        publinkPublisher="https://science.sciencemag.org/content/366/6463/304"
      />
    </div>
    <FooterBox />
  </div>
</template>
