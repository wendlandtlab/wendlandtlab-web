<script lang="ts">
import { Icon } from '@iconify/vue';
import alison from '/@/assets/people/alison/alison.jpg?url';
import yuan from '/@/assets/people/yuan/yuan.jpg?url';
import tae from '/@/assets/people/tae/tae.jpg?url';
import em from '/@/assets/people/em.jpg?url';
import shuo from '/@/assets/people/shuo/shuo.jpg?url';
import vignesh from '/@/assets/people/vignesh/vignesh.jpg?url';
import gino from '/@/assets/people/gino/gino.jpg?url';
import aaron from '/@/assets/people/aaron/aaron.jpg?url';
import xin from '/@/assets/people/xin/xin.jpg?url';
import hayden from '/@/assets/people/hayden/hayden.jpg?url';
import alex from '/@/assets/people/alex/alex.jpg?url';
import carolyn from '/@/assets/people/alumni/carolyn.jpg?url';
import ellie from '/@/assets/people/alumni/ellie.jpg?url';
import johanna from '/@/assets/people/alumni/johanna.jpg?url';
import kathleen from '/@/assets/people/alumni/kathleen.jpg?url';
import krista from '/@/assets/people/alumni/krista.jpg?url';
import lu from '/@/assets/people/alumni/lu.jpg?url';
import yong from '/@/assets/people/alumni/yong.jpg?url';
import frank from '/@/assets/people/frank/frank.jpg?url';
import wenlai from '/@/assets/people/wenlai.jpg?url';
import jason from '/@/assets/people/jason/jason.jpg?url';
import leon from '/@/assets/people/leon/leon.jpg?url';
import daniel from '/@/assets/people/daniel/daniel.jpg?url';
import lianyan from '/@/assets/people/lianyan/lianyan.jpg?url';
import jiayi from '/@/assets/people/jiayi/jiayi.jpg?url';
import sam from '/@/assets/people/sam/sam.jpg?url';
import yichen from '/@/assets/people/yichen/yichen.jpg?url';

export default {
  components: {
    Icon,
  },
  setup() {
    return {
      alison,
      yuan,
      tae,
      em,
      vignesh,
      gino,
      aaron,
      xin,
      hayden,
      alex,
      carolyn,
      ellie,
      johanna,
      kathleen,
      krista,
      lu,
      yong,
      shuo,
      frank,
      wenlai,
      jason,
      leon,
      daniel,
      lianyan,
      jiayi,
      sam,
      yichen,
    };
  },
};
</script>
<template>
  <div class="flex flex-col min-h-screen">
    <HeaderMenu />
    <div class="flex-grow">
      <div class="container py-3 pb-3 mx-auto max-w-screen-lg">
        <img
          src="../../assets/group-photo.jpg"
          alt=""
          class="object-auto overflow-hidden rounded-md h-auto w-full"
        />
      </div>
      <div class="mx-auto">
        <TeamMember
          PersonName="Alison Wendlandt"
          ProfileLink="/people/alison"
          Title="Associate Professor"
          :Picture="alison"
          Email="awendlan[at]mit.edu"
          Pronouns="She/Her"
        />
      </div>
      <div
        class="flex flex-wrap justify-evenly py-5 px-4 mx-auto max-w-screen-lg"
      >
        <TeamMember
          PersonName="Yuan Zhang"
          ProfileLink="/people/yuan"
          Title="Postdoctoral Fellow"
          :Picture="yuan"
          Email="yazhang[at]mit.edu"
          Pronouns="He/Him"
        />

        <TeamMember
          PersonName="Shuo Zhang"
          ProfileLink="#"
          Title="Postdoctoral Fellow"
          :Picture="shuo"
          Email="szhang36[at]mit.edu"
          Pronouns="He/Him"
        />
        <TeamMember
          PersonName="Daniel Gorelik"
          ProfileLink="#"
          Title="Postdoctoral Fellow"
          :Picture="daniel"
          Email="dgorelik[at]mit.edu"
          Pronouns="He/Him"
        />
        <TeamMember
          PersonName="Lianyan Xu"
          ProfileLink="#"
          Title="Postdoctoral Fellow"
          :Picture="lianyan"
          Email="lianyanx[at]mit.edu"
          Pronouns="She/Her"
        />
        <TeamMember
          PersonName="Tae Hwang"
          ProfileLink="#"
          Title="Postdoctoral Fellow"
          :Picture="tae"
          Email="thwang1[at]mit.edu"
          Pronouns="He/Him"
        />
        <TeamMember
          PersonName="Gino Occhialini"
          ProfileLink="/people/gino"
          Title="Graduate Student"
          :Picture="gino"
          Email="ginoocch[at]mit.edu"
          Pronouns="He/Him"
        />
        <TeamMember
          PersonName="Xin Gu"
          ProfileLink="/people/xin"
          Title="Graduate Student"
          :Picture="xin"
          Email="gux[at]mit.edu"
          Pronouns="He/Him"
        />
        <TeamMember
          PersonName="Hayden Carder"
          ProfileLink="/people/hayden"
          Title="Graduate Student"
          :Picture="hayden"
          Email="hcarder[at]mit.edu"
          Pronouns="He/Him"
        />
        <TeamMember
          PersonName="Sam Liang"
          ProfileLink="#"
          Title="Graduate Student"
          :Picture="sam"
          Email="liang014[at]mit.edu"
          Pronouns="He/Him"
        />
        <TeamMember
          PersonName="Yichen Nie"
          ProfileLink="#"
          Title="Graduate Student"
          :Picture="yichen"
          Email="ycnie[at]mit.edu"
          Pronouns="He/Him"
        />

        <TeamMember
          PersonName="Jason Zhang"
          ProfileLink="/people/jason"
          Title="Undergraduate student"
          :Picture="jason"
          Email="jsnzhang[at]mit.edu"
          Pronouns="He/Him"
        />
        <TeamMember
          PersonName="Leon Wang"
          ProfileLink="/people/leon"
          Title="Undergraduate student"
          :Picture="leon"
          Email="leonn037[at]mit.edu"
          Pronouns="They/He"
        />
        <TeamMember
          PersonName="Em Ball"
          ProfileLink="/people/em"
          Title="Undergraduate student"
          :Picture="em"
          Email="ekball[at]mit.edu"
          Pronouns="They/Them"
        />
      </div>
      <div class="flex flex-col sm:flex-row mx-auto max-w-screen-lg py-5 px-10">
        <div
          class="w-30 h-30 mx-auto rounded-full flex-none flex justify-center align-center items-center bg-gray-600 text-gray-50 text-2xl italic font-extrabold"
        >
          <p>You?</p>
        </div>
        <div class="text-gray-700 text-justify py-5 px-5">
          <p>
            The Wendlandt Group is always looking for talented researchers —
            regardless of background — eager to join in our endeavors.
            Prospective graduate students should apply through the Chemistry
            department program. Postdoctoral candidates should contact Alison
            via email (awendlan[at]mit.edu) with their C.V., a research summary
            and a cover letter. Undergraduates, who are interested in a research
            experience, should contact Alison via email.
          </p>
        </div>
      </div>
      <div class="max-w-screen-lg mx-auto px-5 py-5">
        <p class="text-2xl text-gray-800 font-extrabold">Alumni</p>
        <div class="grid justify-items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <Alumni
              PersonName="Johanna Barbour"
              Title="M.S. (2020)"
              :Picture="johanna"
              LinkedIn="https://www.linkedin.com/in/johbrbr/"
              CurrentPos="R&D Scientist II, Form Energy"
            />
            <Alumni
              PersonName="Krista Dong "
              Title="Undergrad (2019-2020)"
              :Picture="krista"
              LinkedIn="https://www.linkedin.com/in/kristadong/"
              CurrentPos="PhD Student, Caltech"
            />
            <Alumni
              PersonName="Wenlai Han"
              Title="Undergrad (Summer 2022)"
              :Picture="wenlai"
              LinkedIn="https://www.linkedin.com/in/wenlai-han/"
              CurrentPos="PhD Student, MIT"
            />
            <Alumni
              PersonName="Frank de Kleijne"
              Title="Visiting Student (2022)"
              :Picture="frank"
              LinkedIn="https://www.linkedin.com/in/frank-de-kleijne"
              CurrentPos="PhD Student, Radbaud University"
            />
            <Alumni
              PersonName="Jiayi Li"
              Title="Postdoc (2022-2023)"
              :Picture="jiayi"
              CurrentPos="National Institutes of Health"
            />
            <Alumni
              PersonName="Aaron Liu"
              Title="M.S. (2022)"
              :Picture="aaron"
              LinkedIn="https://www.linkedin.com/in/aaronliuhk/"
            />
            <Alumni
              PersonName="Zhaohong Lu"
              Title="Postdoc (2019-2020)"
              :Picture="lu"
              LinkedIn="https://www.linkedin.com/in/zhaohong-lu-b8a3aa190/"
              CurrentPos="Professor, Xiamen University (China)"
            />
            <Alumni
              PersonName="Vignesh Palani"
              Title="Postdoc (2021-2023)"
              :Picture="vignesh"
              LinkedIn="https://www.linkedin.com/in/vignesh-palani-1145b9ba/"
              CurrentPos="Professor, IISc Bangalore (India)"
            />
            <Alumni
              PersonName="Ellie Plachinski "
              Title="Undergrad (2019-2020)"
              :Picture="ellie"
              LinkedIn="https://www.linkedin.com/in/ellie-plachinski-8a2168149/"
              CurrentPos="PhD Student, UW Madison"
            />
            <Alumni
              PersonName="Alexander Seim"
              Title="M.S. (2022)"
              :Picture="alex"
            />
            <Alumni
              PersonName="Carolyn Suh "
              Title="M.S. (2020)"
              :Picture="carolyn"
              LinkedIn="https://www.linkedin.com/in/carolyn-suh/"
            />
            <Alumni
              PersonName="Kathleen Wang"
              Title="M.S. (2020)"
              :Picture="kathleen"
              LinkedIn="https://www.linkedin.com/in/kathleenjwang/"
            />
            <Alumni
              PersonName="Yong Wang"
              Title="Postdoc (2019-2020)"
              :Picture="yong"
              LinkedIn="https://www.linkedin.com/in/yong-wang-5a30b470/"
              CurrentPos="Principal Scientist, Genentech"
            />
        </div>
      </div>
    </div>
    <FooterBox />
  </div>
</template>
