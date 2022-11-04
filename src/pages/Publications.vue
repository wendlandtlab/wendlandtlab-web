<script lang="ts">
import { Icon } from '@iconify/vue';
import toc7 from '/@/assets/publications/toc/2022-Science-Zhang-Palani-TOC.svg?url';
import toc6 from '/@/assets/publications/toc/JACS-2022-Carder.png';
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
      toc6,
      toc7,
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
        pubTitle="Stereochemical editing logic powered by the epimerization of unactivated tertiary stereocenters"
        pubAuthors="Yu-An Zhang‡, Vignesh Palani‡, Alexander E. Seim, Yong Wang, Kathleen J. Wang, Alison E. Wendlandt* (‡ contributed equally)"
        pubJournal="Science"
        :pubYear="2022"
        pubDoi="Science. 2022, 10.1126/science.add6852"
        publinkArticle="https://wendlandtlab.blob.core.windows.net/pubs/2022-Science-Zhang-Palani-article.pdf"
        publinkSi="https://wendlandtlab.blob.core.windows.net/pubs/2022-Science-Zhang-Palani-ESI.pdf"
        publinkPublisher="https://www.science.org/doi/10.1126/science.add6852"
        :pubToc="toc7"
        :newslist="[
          {
            source: 'C&E News',
            newsurl:
              'https://cen.acs.org/synthesis/Switching-tertiary-stereocenters/100/web/2022/10',
          },
        ]"
      />
      <Publication
        pubType="perspective"
        pubTitle="A stable alternative to an explosive synthetic reaction (perspective)"
        pubAuthors="Vignesh Palani, Alison E. Wendlandt*"
        pubJournal="Nature"
        :pubYear="2022"
        pubDoi="Nature. 2022, d41586-022-02952-w"
        publinkArticle="https://wendlandtlab.blob.core.windows.net/pubs/2022-Nature-Palani-perspective.pdf"
        publinkPublisher="https://www.nature.com/articles/d41586-022-02952-w"
      />
      <Publication
        pubType="article"
        pubTitle="Selective axial-to-equatorial epimerization of carbohydrates"
        pubAuthors="Hayden M. Carder, Yong Wang, Alison E. Wendlandt*"
        pubJournal="JACS"
        :pubYear="2022"
        pubDoi="J. Am. Chem. Soc. 2022, 10.1021/jacs.2c04743"
        publinkArticle="https://wendlandtlab.blob.core.windows.net/pubs/2022-JACS-Carder-article.pdf"
        publinkSi="https://wendlandtlab.blob.core.windows.net/pubs/2022-JACS-Carder-ESI.pdf"
        publinkPublisher="https://pubs.acs.org/doi/10.1021/jacs.2c04743"
        :pubToc="toc6"
      />
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
        :newslist="[
          {
            source: 'MIT News',
            newsurl:
              'https://news.mit.edu/2022/whimsy-and-alkene-isomerization-wendlandt-lab-0225',
          },
                    {
            source: 'Trends in Chemistry',
            newsurl:
              'https://www.sciencedirect.com/science/article/abs/pii/S2589597422000636',
          },
        ]"
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
        :newslist="[
          {
            source: 'C&E News',
            newsurl:
              'https://cen.acs.org/synthesis/Switching-tertiary-stereocenters/100/web/2022/10',
          },
          {
            source: 'In the Pipeline',
            newsurl:
              'https://www.science.org/content/blog-post/one-sugar-turns-into-another',
          },
          {
            source: 'MIT News',
            newsurl:
              'https://news.mit.edu/2020/mit-chemist-alison-wendlandt-plays-with-space-0903',
          },
        ]"
      />
      <Publication
        pubType="perspective"
        pubTitle="Photocatalytic deracemization fixes the mix (perspective)"
        pubAuthors="Alison E. Wendlandt"
        pubJournal="Science"
        :pubYear="2019"
        pubDoi="Science, 2019, 10.1126/science.aay6919"
        publinkArticle="https://wendlandtlab.blob.core.windows.net/pubs/2019-Science-Wendlandt-perspective.pdf"
        publinkPublisher="https://science.sciencemag.org/content/366/6463/304"
      />
    </div>
    <FooterBox />
  </div>
</template>
