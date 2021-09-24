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
  <div>
    <Publication
      pubType="article"
      pubTitle="A unified strategy to access 2- and 4-deoxygenated sugars enabled by manganese-promoted 1,2-radical migration"
      pubAuthors="Hayden M. Carder, Carolyn E. Suh, Alison E. Wendlandt*"
      pubJournal="JACS"
      :pubYear="2021"
      pubDoi="J. Am. Chem. Soc. 2021, 10.1021/jacs.1c05993"
      publinkArticle="#"
      publinkSi="#"
      publinkPublisher="https://pubs.acs.org/doi/full/10.1021/jacs.1c05993"
      pubToc="src/assets/scs-toc.svg"
    />
    <Publication
      pubType="review"
      pubTitle="Selective transformations of carbohydrates inspired by radical-based enzymatic mechanisms"
      pubAuthors="Carolyn E. Suh‡, Hayden M. Carder‡, Alison E. Wendlandt* (‡ contributed equally)"
      pubJournal="ACS Chem. Biol."
      :pubYear="2021"
      pubDoi="ACS Chem. Biol. 2021, 10.1021/acschembio.1c00190"
      publinkArticle="#"
      publinkPublisher="https://pubs.acs.org/doi/10.1021/acschembio.1c00190"
      pubToc="src/assets/scs-toc.svg"
    />
        <Publication
      pubType="article"
      pubTitle="Synthesis of rare sugar isomers through site-selective epimerization"
      pubAuthors="Yong Wang, Hayden M. Carder, Alison E. Wendlandt*"
      pubJournal="Nature"
      :pubYear="2020"
      pubDoi="Nature 2020, 10.1038/s41586-020-1937-1"
      publinkArticle="#"
      publinkSi="#"
      publinkPublisher="https://www.nature.com/articles/s41586-020-1937-1%20"
      pubToc="src/assets/scs-toc.svg"
    />
            <Publication
      pubType="perspective"
      pubTitle="Photocatalytic deracemization fixes the mix (Perspective)"
      pubAuthors="Alison E. Wendlandt"
      pubJournal="Science"
      :pubYear="2019"
      pubDoi="Science, 2019, 366, 304-305"
      publinkArticle="#"
      publinkSi="#"
      publinkPublisher="https://science.sciencemag.org/content/366/6463/304"
    />
  </div>
  <FooterBox />
</template>
