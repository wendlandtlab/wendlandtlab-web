<script lang="ts">
import { Icon } from '@iconify/vue';
import toc8 from '/@/assets/publications/toc/2023-palani-toc.png?url';
import toc7 from '/@/assets/publications/toc/2022-Science-Zhang-Palani-TOC.svg?url';
import toc6 from '/@/assets/publications/toc/JACS-2022-Carder.png';
import toc5 from '/@/assets/publications/toc/JACS-2021-Occhialini.png';
import toc4 from '/@/assets/publications/toc/JACS-2021-ZhangGu.jpg';
import toc3 from '/@/assets/publications/toc/JACS-2021-Carder.svg?url';
import toc2 from '/@/assets/publications/toc/ACSChemBiol-2021-SuhCarder.png';
import toc1 from '/@/assets/publications/toc/Nature-2020-Wang.svg?url';

import Publication from '/@/types/Publication'
import { defineComponent } from 'vue';

const pubs = [
  {
    pubType: 'article',
    title: 'Strain-Inducing Positional Alkene Isomerization',
    authors: 'Vignesh Palani and Alison E. Wendlandt*',
    journal: 'J. Am. Chem. Soc.',
    year: 2023,
    doi: 'J. Am. Chem. Soc. 2023, 10.1021/jacs.3c06935',
    articleLink:
      'https://wendlandtlab.blob.core.windows.net/pubs/2023-JACS-Palani-article.pdf',
    esiLink:
      'https://wendlandtlab.blob.core.windows.net/pubs/2023-JACS-Palani-ESI.pdf',
    publisherLink: 'https://doi.org/10.1021/jacs.3c06935',
    toc: toc8,
  },
  {
    pubType: 'article',
    title:
      'Stereochemical editing logic powered by the epimerization of unactivated tertiary stereocenters',
    authors:
      'Yu-An Zhang‡, Vignesh Palani‡, Alexander E. Seim, Yong Wang, Kathleen J. Wang, Alison E. Wendlandt* (‡ contributed equally)',
    journal: 'Science',
    year: 2022,
    doi: 'Science, 2022, 10.1126/science.add6852',
    articleLink:
      'https://wendlandtlab.blob.core.windows.net/pubs/2022-Science-Zhang-Palani-article.pdf',
    esiLink:
      'https://wendlandtlab.blob.core.windows.net/pubs/2022-Science-Zhang-Palani-ESI.pdf',
    publisherLink: 'https://www.science.org/doi/10.1126/science.add6852',
    toc: toc7,
    newslist: [
      {
        source: 'C&E News',
        newsurl:
          'https://cen.acs.org/synthesis/Switching-tertiary-stereocenters/100/web/2022/10',
      },
      {
        source: 'Chemistry World',
        newsurl:
          'https://www.chemistryworld.com/news/chirality-flipping-reaction-could-completely-change-total-synthesis-strategies/4016501.article',
      },
      {
        source: 'In the pipeline',
        newsurl:
          'https://www.science.org/content/blog-post/flip-those-tertiary-centers',
      },
    ],
  },
  {
    pubType: 'perspective',
    title:
      'A stable alternative to an explosive synthetic reaction (perspective)',
    authors: 'Vignesh Palani, Alison E. Wendlandt*',
    journal: 'Nature',
    year: 2022,
    doi: 'Nature, 2022, d41586-022-02952-w',
    articleLink:
      'https://wendlandtlab.blob.core.windows.net/pubs/2022-Nature-Palani-perspective.pdf',
    publisherLink: 'https://www.nature.com/articles/d41586-022-02952-w',
  },
  {
    pubType: 'article',
    title: 'Selective axial-to-equatorial epimerization of carbohydrates',
    authors: 'Hayden M. Carder, Yong Wang, Alison E. Wendlandt*',
    journal: 'J. Am. Chem. Soc.',
    year: 2022,
    doi: 'J. Am. Chem. Soc. 2022, 10.1021/jacs.2c04743',
    articleLink:
      'https://wendlandtlab.blob.core.windows.net/pubs/2022-JACS-Carder-article.pdf',
    esiLink:
      'https://wendlandtlab.blob.core.windows.net/pubs/2022-JACS-Carder-ESI.pdf',
    publisherLink: 'https://pubs.acs.org/doi/10.1021/jacs.2c04743',
    toc: toc6,
  },
  {
    pubType: 'article',
    title: 'Catalytic, contra-thermodynamic positional alkene isomerization',
    authors: 'Gino Occhialini, Vignesh Palani, Alison E. Wendlandt*',
    journal: 'J. Am. Chem. Soc.',
    year: 2021,
    doi: 'J. Am. Chem. Soc. 2021, 10.1021/jacs.1c12043',
    articleLink:
      'https://wendlandtlab.blob.core.windows.net/pubs/2021-JACS-Occhialini-article.pdf',
    esiLink:
      'https://wendlandtlab.blob.core.windows.net/pubs/2021-JACS-Occhialini-ESI.pdf',
    publisherLink: 'https://pubs.acs.org/doi/10.1021/jacs.1c12043',
    toc: toc5,
    newslist: [
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
    ],
  },
  {
    pubType: 'article',
    title:
      'A change from kinetic to thermodynamic control enables trans-selective stereochemical editing of vicinal diols',
    authors:
      'Yu-an Zhang‡, Xin Gu‡, Alison E. Wendlandt* (‡ contributed equally)',
    journal: 'J. Am. Chem. Soc.',
    year: 2021,
    doi: 'J. Am. Chem. Soc. 2021, 10.1021/jacs.1c11902',
    articleLink:
      'https://wendlandtlab.blob.core.windows.net/pubs/2021-JACS-ZhangGu-article.pdf',
    esiLink:
      'https://wendlandtlab.blob.core.windows.net/pubs/2021-JACS-ZhangGu-ESI.pdf',
    publisherLink: 'https://pubs.acs.org/doi/10.1021/jacs.1c11902',
    toc: toc4,
  },
  {
    pubType: 'article',
    title:
      'A unified strategy to access 2- and 4-deoxygenated sugars enabled by manganese-promoted 1,2-radical migration',
    authors: 'Hayden M. Carder, Carolyn E. Suh, Alison E. Wendlandt*',
    journal: 'J. Am. Chem. Soc.',
    year: 2021,
    doi: 'J. Am. Chem. Soc. 2021, 10.1021/jacs.1c05993',
    articleLink:
      'https://wendlandtlab.blob.core.windows.net/pubs/2021-JACS-Carder-article.pdf',
    esiLink:
      'https://wendlandtlab.blob.core.windows.net/pubs/2021-JACS-Carder-ESI.pdf',
    publisherLink: 'https://pubs.acs.org/doi/full/10.1021/jacs.1c05993',
    toc: toc3,
    newslist: [
      {
        source: 'Synthesis Workshop',
        newsurl: 'https://www.youtube.com/watch?v: z0qiNfkdL10',
      },
    ],
  },
  {
    pubType: 'review',
    title:
      'Selective transformations of carbohydrates inspired by radical-based enzymatic mechanisms',
    authors:
      'Carolyn E. Suh‡, Hayden M. Carder‡, Alison E. Wendlandt* (‡ contributed equally)',
    journal: 'ACS Chem. Biol.',
    year: 2021,
    doi: 'ACS Chem. Biol. 2021, 10.1021/acschembio.1c00190',
    articleLink:
      'https://wendlandtlab.blob.core.windows.net/pubs/2021-ACSChemBiol-SuhCarder-review.pdf',
    publisherLink: 'https://pubs.acs.org/doi/10.1021/acschembio.1c00190',
    toc: toc2,
  },
  {
    pubType: 'article',
    title:
      'Synthesis of rare sugar isomers through site-selective epimerization',
    authors: 'Yong Wang, Hayden M. Carder, Alison E. Wendlandt*',
    journal: 'Nature',
    year: 2020,
    doi: 'Nature, 2020, 10.1038/s41586-020-1937-1',
    articleLink:
      'https://wendlandtlab.blob.core.windows.net/pubs/2020-Nature-Wang-article.pdf',
    esiLink:
      'https://wendlandtlab.blob.core.windows.net/pubs/2020-Nature-Wang-ESI.pdf',
    publisherLink: 'https://www.nature.com/articles/s41586-020-1937-1%20',
    toc: toc1,
    newslist: [
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
    ],
  },
  {
    pubType: 'perspective',
    title: 'Photocatalytic deracemization fixes the mix (perspective)',
    authors: 'Alison E. Wendlandt',
    journal: 'Science',
    year: 2019,
    doi: 'Science, 2019, 10.1126/science.aay6919',
    esiLink:
      'https://wendlandtlab.blob.core.windows.net/pubs/2019-Science-Wendlandt-perspective.pdf',
    publisherLink: 'https://science.sciencemag.org/content/366/6463/304',
  },
] as Publication[];

export default defineComponent({
  components: {
    Icon,
  },
  name: 'Publications',
  data() {
    return {
      pubList: pubs,
      searchterm: '',
    };
  },
  computed: {
    filteredPubs(): Publication[] {
      return this.pubList.filter((pub) => {
        return (
          pub.title.toLowerCase().includes(this.searchterm.toLowerCase()) ||
          pub.authors.toLowerCase().includes(this.searchterm.toLowerCase()) ||
          pub.journal.toLowerCase().includes(this.searchterm.toLowerCase()) ||
          pub.year.toString().includes(this.searchterm.toLowerCase())
        );
      });
    },
  },


})
</script>
<template>
  <div class="flex flex-col min-h-screen">
    <HeaderMenu />
    <div class="flex-grow mx-auto">
      <div class="lg:w-screen-lg mx-5 px-5 py-5">
        <input
          type="text"
          class="w-full px-3 py-2 mb-5 text-gray-700 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Search by title, author, journal, or year"
          v-model="searchterm"
        />
        <router-link to="./AllCitations" class="text-xl text-gray-700 font-extrabold text-center">
            Click Here: all citations including work prior to independent career
      </router-link>
        <PublicationRefactor
          v-for="pub in filteredPubs"
          :key="pub"
          :publication="pub"
        />

      </div>
    </div>
    <FooterBox />
  </div>
</template>
