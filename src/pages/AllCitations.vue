<script lang="ts">
import { Icon } from '@iconify/vue';
import pubs from '/@/data/publications';

// filter pubs by pubType to include only 'article' or 'perspective' or 'review'
const pubsFiltered = pubs.filter((pub) => {
  return (
    pub.pubType === 'article' ||
    pub.pubType === 'perspective' ||
    pub.pubType === 'review'
  );
});

export default {
  components: {
    Icon,
  },
  data() {
    return {
      pubList: pubsFiltered,
    };
  }
};
</script>
<template>
  <div class="flex flex-col min-h-screen">
    <HeaderMenu />
    <div class="container px-5 flex-grow max-w-screen-lg mx-auto">
      <div class="flex flex-col">
        <div class="text-2xl font-extrabold my-5">Independent career:</div>
        <CitationRefactor
          v-for="pub in pubList"
          :key="pub"
          :publication="pub"
        />
        <div class="text-2xl font-extrabold mb-5">Patents:</div>
        <CitationPatent
            Authors="Wendlandt, A.; Wang, Y.; Carder, H."
    Title="Selective valorization of biomass sugars"
    Patent="U.S. Patent WO 2021127642"
    PubDate="June 24, 2021"
    Link="https://patentscope.wipo.int/search/en/detail.jsf?docId=US328049193"
        />
        <div class="text-2xl font-extrabold mb-5">
          Prior to independent career:
        </div>
        <Citation
          Authors="Li, Q.; Levi, S. M.; Wagen, C.; Wendlandt, A. E.; Jacobsen, E. N."
          Title="Site-selective, stereocontrolled glycosylation of minimally protected sugars"
          Journal="Nature."
          Volume="xx"
          Year="2022"
          Pages="xx-xx"
          Link="https://www.nature.com/articles/s41586-022-04958-w"
        />
        <Citation
          Authors="Wendlandt, A. E.; Vangal, P.; Jacobsen, E. N."
          Title="Quaternary stereocentres via an enantioconvergent catalytic SN1 reaction"
          Journal="Nature."
          Volume="556"
          Year="2018"
          Pages="447-451"
          Link="https://www.nature.com/articles/s41586-018-0042-1"
        />
        <Citation
          Authors="Li, B.; Wendlandt, A. E.; Stahl, S. S."
          Title="Replacement of stoichiometric DDQ with a low potential o-Quinone catalyst enabling aerobic dehydrogenation of tertiary indolines in pharmaceutical intermediates"
          Journal="Org. Lett."
          Volume="21"
          Year="2019"
          Pages="1176-1181"
          Link="https://pubs.acs.org/doi/10.1021/acs.orglett.9b00111"
        />
        <Citation
          Authors="Wendlandt, A. E.; Stahl, S. S."
          Title="Quinone-catalyzed selective oxidation of organic molecules"
          Journal="Angew. Chem. Int. Ed."
          Volume="54"
          Year="2015"
          Pages="14638-14658"
          Link="https://onlinelibrary.wiley.com/doi/abs/10.1002/anie.201505017"
        />
        <Citation
          Authors="Wendlandt, A. E.; Stahl, S. S."
          Title="Modular o-quinone catalyst system for dehydrogenation of tetrahydroquinolines under ambient conditions"
          Journal="J. Am. Chem. Soc."
          Volume="136"
          Year="2014"
          Pages="11910-11913"
          Link="https://pubs.acs.org/doi/abs/10.1021/ja506546w"
        />
        <Citation
          Authors="Wendlandt, A. E.; Stahl, S. S."
          Title="Bioinspired aerobic oxidation of secondary amines and nitrogen heterocycles with a bifunctional quinone catalyst"
          Journal="J. Am. Chem. Soc."
          Volume="136"
          Year="2014"
          Pages="506-512"
          Link="https://pubs.acs.org/doi/abs/10.1021/ja411692v"
        />
        <Citation
          Authors="Wendlandt, A. E.; Stahl, S. S."
          Title="Chemoselective organocatalytic aerobic oxidation of primary amines to secondary imines"
          Journal="Org. Lett."
          Volume="14"
          Year="2012"
          Pages="2850-2853"
          Link="https://pubs.acs.org/doi/abs/10.1021/ol301095j"
        />
        <Citation
          Authors="Wendlandt, A. E.; Stahl, S. S."
          Title="Copper(II)-mediated oxidative cyclization of enamides to oxazoles"
          Journal="Org. Biomol. Chem."
          Volume="10"
          Year="2012"
          Pages="3866-3870"
          Link="http://pubs.rsc.org/en/content/articlelanding/2012/ob/c2ob25310k"
        />
        <Citation
          Authors="Wendlandt, A. E.; Suess, A. M.; Stahl, S.S."
          Title="Copper-catalyzed aerobic oxidative C-H functionalizations: trends and mechanistic insights."
          Journal="Angew. Chem. Int. Ed."
          Volume="50"
          Year="2011"
          Pages="11062-11087"
          Link="https://onlinelibrary.wiley.com/doi/abs/10.1002/anie.201103945"
        />
        <Citation
          Authors="Kwiatkowski, S.; Sviripa, V. M.; Zhang, Z.; Wendlandt, A. E.; Hobartner, C.; Watt, D. S.; Stamm, S."
          Title="Synthesis of a Norcantharidin-tethered guanosine: protein phosphatase-1 inhibitors that change alternative splicing"
          Journal="Bioorg. med. Chem. Lett."
          Volume="26"
          Year="2016"
          Pages="965-968"
          Link="https://www.sciencedirect.com/science/article/pii/S0960894X15303668"
        />
        <Citation
          Authors="Zhang, Z.; Kelemen, O.; van Santen, M. A.; Yelton, S.M.; Wendlandt, A. E.; Sviripa, V. M.; Bollen, M.; Beullens, M.; Urlaub, H.; Lührmann, R.; Watt, D.S.; Stamm, S."
          Title="Synthesis and characterization of Pseudocantharidins, novel phosphatase modulators that promote the inclusion of Exon 7 into the SMN (survival of motorneuron) pre-mRNA"
          Journal="J. Biol. Chem."
          Volume="286"
          Year="2011"
          Pages="10126-10136"
          Link="https://www.jbc.org/article/S0021-9258(20)53836-2/fulltext"
        />
        <Citation
          Authors="Wendlandt, A. E.; Yelton, S. M.; Lou, D.; Watt, D.S.; Noonan, D. J."
          Title="Synthesis and functional analysis of novel bivalent estrogens"
          Journal="Steroids."
          Volume="75"
          Year="2010"
          Pages="825-833"
          Link="https://www.sciencedirect.com/science/article/pii/S0039128X10001480"
        />
      </div>
    </div>
    <FooterBox />
  </div>
</template>
