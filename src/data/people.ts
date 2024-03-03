
import Person from '/@/types/Person'

// name: string;
// profile: boolean; false if not defined
// publicationName: string; name if not defined.
// position: string;
// email: string;
// linkedin: string;
// github: string;
// pronouns: string;
// profilePic: string;
// bio: string;
// funFacts: string[];
// orcid: string;
// profilePhotos: string[];


const group: Map<string, Person> = new Map();

group.set('yazhang', {
    name: 'Yuan Zhang',
    profile: true,
    publicationName: 'Yu-an Zhang',
    position: 'Postdoctoral fellow',
    email: 'yazhang',
    linkedin: 'https://www.linkedin.com/in/yuan-zhang-531275105',
    pronouns: 'He/Him',
    profilePic: new URL('/@/assets/people/yuan/yuan.jpg', import.meta.url).href,
    bio: `Yuan was born and raised in Guangzhou (Canton), China. After finishing high school, he went to Peking University Health Science Center where he obtained his bachelor degree in pharmaceutical science and master degree in medicinal chemistry. His master projects in Prof. Yanxing Jia’s group focused on the total syntheses of ergot alkaloids. Continuing his passion for total synthesis, he moved to the US in 2014 and performed graduate research in the group of Prof. Scott Snyder first at the Scripps Research Institute (Florida), and later at the University of Chicago where he accomplished the syntheses of multiple halogenated cyclic ether and meroterpenoid natural products. In 2020, Yuan joined the Wendlandt Group to explore radical-mediated transformations. Outside the lab, Yuan enjoys playing fingerstyle guitar, hiking and tasting great foods in the local restaurants or prepared by his girlfriend.`,
    funFacts: [
        "Yuan used to play a lot poker with the students from the financial mathematic program, but he quit after they got fancy jobs in trading firms and kept raising the buy-in price.",
        "He watches random funny animal videos every day and visits the zoo occasionally.",
        "He hates snow."
    ],
    orcid: 'https://orcid.org/0000-0002-4565-2809',
    profilePhotos: [
        new URL('/@/assets/people/yuan/yuan-1.jpg', import.meta.url).href,
        new URL('/@/assets/people/yuan/yuan-2.jpg', import.meta.url).href,
        new URL('/@/assets/people/yuan/yuan-3.jpg', import.meta.url).href,
        new URL('/@/assets/people/yuan/yuan-4.jpg', import.meta.url).href,
    ]
} as Person)

group.set('szhang36', {
    name: 'Shuo Zhang',
    position: 'Postdoctoral fellow',
    email: 'szhang36',
    pronouns: 'He/Him',
    profilePic: new URL('/@/assets/people/shuo/shuo.jpg', import.meta.url).href,
} as Person)

group.set('dgorelik', {
    name: 'Daniel Gorelik',
    position: 'Postdoctoral fellow',
    email: 'dgorelik',
    pronouns: 'He/Him',
    profilePic: new URL('/@/assets/people/daniel/daniel.jpg', import.meta.url).href,
} as Person)

group.set('lianyanx ', {
    name: 'Lianyan Xu',
    profile: true,
    position: 'Postdoctoral fellow',
    email: 'lianyanx',
    pronouns: 'She/Her',
    profilePic: new URL('/@/assets/people/lianyan/lianyan.jpg', import.meta.url).href,
    bio: `Lianyan is originally from New Jersey and received her bachelors at Vanderbilt University in 2016. For her Ph.D. she worked with Professor Steven D. Townsend, where she enhanced her knowledge in the glycosciences. Her graduate work at Vanderbilt focused on the synthesis of carbohydrate derivatives and glycoconjugates to explore their antibiofilm, antibacterial and anticancer properties. After earning her Ph.D. in 2022, she then moved back to the east coast to join the Wendlandt group for her postdoctoral studies. Outside of lab, Lianyan enjoys painting, traveling, and exploring the local restaurant scene.`,
    profilePhotos: [
        new URL('/@/assets/people/lianyan/lianyan-1.jpg', import.meta.url).href,
        new URL('/@/assets/people/lianyan/lianyan-2.jpg', import.meta.url).href,
        new URL('/@/assets/people/lianyan/lianyan-3.jpg', import.meta.url).href,
        new URL('/@/assets/people/lianyan/lianyan-4.jpg', import.meta.url).href,
    ],
    linkedin: "www.linkedin.com/in/lianyan-x-3a23a88b",
    orcid: "https://orcid.org/0000-0002-1462-0804",
} as Person)

group.set('thwang1 ', {
    name: 'Tae Hwang',
    profile: true,
    position: 'Postdoctoral fellow',
    email: 'thwang1',
    pronouns: 'He/Him',
    bio: `Tae was born and raised in Seoul, Korea. In his adolescence, he moved to Glenview, Illinois and stayed in the Midwest until he received his B.S. in chemistry from the University of Illinois at Urbana-Champaign. While at UIUC, he worked on total synthesis of sesquiterpene-tropolones under the guidance of Prof. David Sarlah. Thereafter, he moved to the Bay Area and pursued his career in industry as a medicinal chemist at Gilead. To deepen his expertise in total synthesis, he moved to Texas and joined the lab of Prof. John L. Wood at Baylor University where he completed the syntheses of norabietane diterpenoids and diketopiperazines. In 2023, he began his post-doctoral studies under Prof. Alison Wendlandt at MIT. Outside of chemistry, he likes to spend time with his wife and two cats, and explore Greater Boston area.`,
    profilePic: new URL('/@/assets/people/tae/tae.jpg', import.meta.url).href,
    profilePhotos: [
        new URL('/@/assets/people/tae/tae-1.jpg', import.meta.url).href,
        new URL('/@/assets/people/tae/tae-2.jpg', import.meta.url).href,
        new URL('/@/assets/people/tae/tae-3.jpg', import.meta.url).href,
        new URL('/@/assets/people/tae/tae-4.jpg', import.meta.url).href,
    ],
    linkedin: "https://www.linkedin.com/in/taehwan-hwang-38ab58130/",
    orcid: "https://orcid.org/0000-0002-8396-0255",
} as Person)

group.set('zhangrh', {
    name: 'Ronghua Zhang',
    profile: true,
    position: 'Postdoctoral fellow',
    email: 'zhangrh',
    pronouns: 'He/Him',
    profilePic: new URL('/@/assets/people/ronghua/ronghua.jpg', import.meta.url).href,
    bio: `Ronghua was born and raised in Taizhou, China, and he completed his bachelor's degree in chemical engineering at Zhejiang University of Technology in 2017. He then pursued his master's studies at East China Normal University under the guidance of Prof. Junliang Zhang, focusing on the design of chiral ligands and asymmetric catalysis. In 2020, he relocated to Hong Kong to embark on his Ph.D. journey in the group of Prof. Jianwei Sun at the Hong Kong University of Science and Technology, focusing on the design, synthesis, and application of novel chiral frameworks. In 2023, Ronghua joined the Wendlandt Group to explore radical-mediated transformations. Outside the laboratory, Ronghua finds joy in engaging in sports and savoring delectable cuisines either at local eateries or crafted in his own kitchen.`,
    funFacts: [
        "There are two chiral phosphine ligands named after Ronghua: Rong-Phos (published) and Hua-Phos (unpublished).",
    ],
    linkedin: 'https://www.linkedin.com/in/ronghua-zhang-a4a095223/',
    orcid: "https://orcid.org/0000-0001-9279-8790",
    profilePhotos: [
        new URL('/@/assets/people/ronghua/ronghua-1.jpg', import.meta.url).href,
        new URL('/@/assets/people/ronghua/ronghua-2.jpg', import.meta.url).href,
        new URL('/@/assets/people/ronghua/ronghua-3.jpg', import.meta.url).href,
        new URL('/@/assets/people/ronghua/ronghua-4.jpg', import.meta.url).href,
    ],
} as Person)

group.set('jinzhu ', {
    name: 'Jin Zhu',
    profile: true,
    position: 'Postdoctoral fellow',
    email: 'jinzhu',
    pronouns: 'She/Her',
    profilePic: new URL('/@/assets/people/jin/jin.jpg', import.meta.url).href,
    bio: `Jin was born and grew up in Jiangsu, China. She graduated from Nanjing University with a B. A . in Chemistry in 2018, where she studied in the group of Professor Shaolin Zhu for her undergraduate thesis. During the four years, she tried multiple projects, including Photo-induced decarboxylative esterification of NHPI esters and NiH-catalyzed remote functionalization of alkenes. In 2023, she got her PhD degree under the supervision of Professor Yiming Wang at the University of Pittsburgh. During graduate school, she initiated and developed the cationic Ir species-catalyzed stereoselective functionalization of alkynes.`,
    funFacts: [
        "She is a splatoon fan. She has dedicated over 2,500 hours to playing the video game, with a highest rank of top 5000.",
    ],
} as Person)

group.set('qxu111', {
    name: 'Qian Xu',
    profile: true,
    position: 'Postdoctoral fellow',
    email: 'qxu111',
    pronouns: 'He/Him',
    profilePic: new URL('/@/assets/people/qian/qian.jpg', import.meta.url).href,
    bio: `Qian Xu grew up in Shiyan, Hubei Province, China. He obtained his bachelor’s degree of Science from Nanjing University in 2018. In the same year, he moved to University of Minnesota, Twin Cities, and joined the research group of Prof. Thomas. R. Hoye. In the Hoye lab, he developed several thermal, reagent- and additive-free cycloaddition reactions to generate reactive intermediates, and studied their structures and reactivities. In 2024, he joined the Wendlandt lab to explore photochemical reactions. He enjoys out-door running.`,
    funFacts: [
        "Qian used to like heavily seasoned food but now he loves food that maintains its original flavor.",
    ],
    profilePhotos: [
        new URL('/@/assets/people/qian/qian-1.jpg', import.meta.url).href,
        new URL('/@/assets/people/qian/qian-2.jpg', import.meta.url).href,
        new URL('/@/assets/people/qian/qian-3.jpg', import.meta.url).href,
        new URL('/@/assets/people/qian/qian-4.jpg', import.meta.url).href,
    ],
} as Person)


group.set('gino', {
    name: 'Gino Occhialini',
    profile: true,
    position: 'Graduate student',
    email: 'ginoocch',
    linkedin: 'https://www.linkedin.com/in/gino-occhialini-4bb670103',
    github: 'ginoocch',
    pronouns: 'He/Him',
    profilePic: new URL('/@/assets/people/gino/gino.jpg', import.meta.url).href,
    bio: `Gino grew up in central Texas, and completed his B.S. in Chemistry at the University of Texas at Dallas. While there, he conducted research under Professor Ronald Smaldone focusing on covalent organic frameworks and porous organic polymers. For this work, Gino was awarded a Goldwater scholarship in 2017. In his free time, Gino served as a workshop leader in various chemistry classes. Interested in branching out to methodology research and mechanistic study, he attended MIT to pursue his Ph.D. under Professor Alison Wendlandt. Gino's studies at MIT are funded under an NSF GRFP.`,
    funFacts: [
        "Gino designed and manages this website.",
        "Gino built a 3d-printer, which he consistently breaks and fixes.",
        "Gino has an identical twin brother."
    ],
    orcid: 'https://orcid.org/0000-0001-9682-1740',
    profilePhotos: [
        new URL('/@/assets/people/gino/gino-1.jpg', import.meta.url).href,
        new URL('/@/assets/people/gino/gino-2.jpg', import.meta.url).href,
        new URL('/@/assets/people/gino/gino-3.jpg', import.meta.url).href,
        new URL('/@/assets/people/gino/gino-4.jpg', import.meta.url).href,
    ],
} as Person)

group.set('gux ', {
    name: 'Xin Gu',
    profile: true,
    position: 'Graduate student',
    email: 'gux',
    bio: 'Xin was born and raised in Taizhou, China before moving to the Ohio State University to pursue bachelor’s degree in chemistry. At the Ohio State, Xin worked on three-component Minisci reaction in the lab of Professor David Nagib. After graduation, Xin decided to move to the east coast and joined the Wendlandt lab. Outside of lab, Xin enjoys eating and video games.',
    pronouns: 'He/Him',
    funFacts: [
        'Xin has no fun facts - Xin',
    ],
    profilePic: new URL('/@/assets/people/xin/xin.jpg', import.meta.url).href,
    profilePhotos: [
        new URL('/@/assets/people/xin/xin-1.jpg', import.meta.url).href,
        new URL('/@/assets/people/xin/xin-2.jpg', import.meta.url).href,
        new URL('/@/assets/people/xin/xin-3.jpg', import.meta.url).href,
        new URL('/@/assets/people/xin/xin-4.jpg', import.meta.url).href,
    ],
} as Person)



group.set('liang014 ', {
    name: 'Sam Liang',
    profile: true,
    bio: 'Sam grew up in Southern China and moved to the US with his parents when he was fifteen. During high school, Sam took AP Chemistry and fell in love with the subject. During undergrad, he worked on the synthesis of ruthenium-doped fluorene polymer under the lab of Professor Jeffery Byers and the synthesis of asymmetric functionalized rotaxane under the lab of Professor Severin Scheneebeli (Purdue University). Wanting to learn more about organic catalysis and method development, Sam joined the Wendlandt after graduating from Middlebury.',
    funFacts: [
        'Before going to Middlebury for undergrad, Sam has never seen snow in his entire life '
    ],
    position: 'Graduate student',
    email: 'liang014',
    pronouns: 'He/Him',
    linkedin: "https://www.linkedin.com/in/huiming-sam-liang-415a3b194/",
    profilePic: new URL('/@/assets/people/sam/sam.jpg', import.meta.url).href,
    profilePhotos: [
        new URL('/@/assets/people/sam/sam-1.jpg', import.meta.url).href,
        new URL('/@/assets/people/sam/sam-2.jpg', import.meta.url).href,
        new URL('/@/assets/people/sam/sam-3.jpg', import.meta.url).href,
        new URL('/@/assets/people/sam/sam-4.jpg', import.meta.url).href,
    ],
} as Person)

group.set('ycnie ', {
    name: 'Yichen Nie',
    profile: true,
    position: 'Graduate student',
    email: 'ycnie',
    pronouns: 'He/Him',
    profilePic: new URL('/@/assets/people/yichen/yichen.jpg', import.meta.url).href,
    bio: 'Yichen was born in Shenzhen, a city in southern China known for its electronics and information industry. In 2018, he moved to Beijing and studied at Peking University. As an undergraduate, he entered Professor Rong Zhu’s lab and worked on transition metal-catalyzed synthetic methodologies. In 2022, he started pursuing his Ph.D. at MIT and is now co-advised by Professor Jeremiah Johnson and Professor Alison Wendlandt. Yichen is excited to work on the interface of materials chemistry and synthetic organic chemistry. In his spare time, he loves traveling, cooking, and collecting mineral specimens.',
    profilePhotos: [
        new URL('/@/assets/people/yichen/yichen-1.jpg', import.meta.url).href,
        new URL('/@/assets/people/yichen/yichen-2.jpg', import.meta.url).href,
        new URL('/@/assets/people/yichen/yichen-3.jpg', import.meta.url).href,
        new URL('/@/assets/people/yichen/yichen-4.jpg', import.meta.url).href,
    ],
} as Person)

group.set('karam987', {
    name: 'Kara Moulton',
    profile: true,
    position: 'Graduate student',
    email: 'karam987',
    bio: 'Kara is a graduate student from Sterling, Massachusetts. She received a B.S. in Chemistry from Saint Joseph’s University in May 2023. There, she conducted research in two groups, on the synthesis and characterization of highly strained, pyramidalized alkenes, as well as the role of the heme a formyl group in Cytochrome c Oxidase. For these works, Kara was awarded a Goldwater scholarship in 2022. Kara’s studies at MIT are funded under an NSF GRFP. Outside of chemistry, Kara enjoys running, baking, and reading.',
    pronouns: 'She/Her',
    funFacts: [
        'Kara has run 2 half marathons.',
        'She is currently working on getting her Canadian citizenship.',
        'She loves plants!'
    ],
    profilePic: new URL('/@/assets/people/kara/kara.jpg', import.meta.url).href,
    profilePhotos: [
        new URL('/@/assets/people/kara/kara-1.jpg', import.meta.url).href,
        new URL('/@/assets/people/kara/kara-2.jpg', import.meta.url).href,
        new URL('/@/assets/people/kara/kara-3.jpg', import.meta.url).href,
        new URL('/@/assets/people/kara/kara-4.jpg', import.meta.url).href,
    ],
} as Person)

group.set('sygong36', {
    name: 'Gary Gong',
    profile: true,
    position: 'Graduate student',
    email: 'sygong36',
    bio: 'Siyuan (Gary) Gong grew up in Kunming, China. He went to high school in Buchanan, MI and enrolled in an early college program at Clarkson University in Potsdam, NY. In 2019, he began pursuing a bachelor’s degree in chemistry at the Ohio State University. He joined Professor David Nagib’s lab where he investigated protecting group-free remote desaturation via O-benzoyl hydroxylamines. After obtaining his B.S. degree in 2023, he joined the Wendlandt lab to continue his journey in the world of radical chemistry.',
    pronouns: 'He/Him',
    funFacts: [
        'Despite coming from a part of China renowned for using copious amounts of mushrooms in their cuisine, Gary does not touch mushrooms at all.',
        'Gary hopes that a Minas Tirith Trebuchet Lego set will come out someday.',
        'Gary knew how to play the Hulusi but might have forgotten it over the years.',
    ],
    profilePic: new URL('/@/assets/people/gary/gary.jpg', import.meta.url).href,
    profilePhotos: [
        new URL('/@/assets/people/gary/gary-1.jpg', import.meta.url).href,
        new URL('/@/assets/people/gary/gary-2.jpg', import.meta.url).href,
        new URL('/@/assets/people/gary/gary-3.jpg', import.meta.url).href,
        new URL('/@/assets/people/gary/gary-4.jpg', import.meta.url).href,
    ],
} as Person)

group.set('hanw', {
    name: 'Wenlai Han',
    profile: true,
    position: 'Graduate student',
    email: 'hanw',
    bio: 'Wenlai grew up in Xinyu (Jiangxi) and later moved to Changsha (Hunan), China to attend Yali High School. Later during his undergrad, he pursued a double major in Chemistry and Computer Science at Carleton College (Northfield, Minnesota). While at Carleton, he worked with Professor Matt Whited, leveraging metal-ligand cooperativity of PSiP pincer-type cobalt silylenes for efficient group transfer catalysis. He is also passionate about algorithms and human-computer interaction. During the summer of 2022, Wenlai visited the Wendlandt group and investigated photochemical epimerization of primary amines with Dr. Yuan Zhang. He is excited to continue this journey at the Wendlandt lab pursuing his PhD.',
    pronouns: 'He/Him',
    funFacts: [
        'Wenlai has a minor in voice music performance.',
        'Wenlai (used to) makes videos.'
    ],
    linkedin: 'https://www.linkedin.com/in/wenlai-han/',
    orcid: "https://orcid.org/0000-0001-8648-2300",
    profilePic: new URL('/@/assets/people/wenlai/wenlai.jpg', import.meta.url).href,
    profilePhotos: [
        new URL('/@/assets/people/wenlai/wenlai-1.jpg', import.meta.url).href,
        new URL('/@/assets/people/wenlai/wenlai-2.jpg', import.meta.url).href,
        new URL('/@/assets/people/wenlai/wenlai-3.jpg', import.meta.url).href,
        new URL('/@/assets/people/wenlai/wenlai-4.jpg', import.meta.url).href,
    ],
} as Person)

group.set('jsnzhang ', {
    name: 'Jason Zhang',
    profile: true,
    position: 'Undergraduate student',
    email: 'jsnzhang',
    pronouns: 'He/Him',
    bio: 'Jason was born in Chicago and raised in Bowling Green, Kentucky. He attended high school at the Carol Martin Gatton Academy of Mathematics and Sciences, where he first gained research experience under the supervision of Professor Yongming Deng. Currently, Jason is a first-year undergraduate student at MIT who hopes to study chemistry to develop chemical reactions to gain a deeper understanding of the world and to help improve people’s quality of life.',
    funFacts: [
        'Jason is an Eagle Scout and enjoys taking hikes in nature.',
        'Jason has played clarinet for 8 years, and he currently is a member of the MIT Wind Ensemble.',
        'Jason witnessed the MIThenge, which is where sunlight passes through the entire infinite corridor. This event only happens twice a year.'
    ],
    profilePic: new URL('/@/assets/people/jason/jason.jpg', import.meta.url).href,
    profilePhotos: [
        new URL('/@/assets/people/jason/jason1.jpg', import.meta.url).href,
        new URL('/@/assets/people/jason/jason2.jpg', import.meta.url).href,
        new URL('/@/assets/people/jason/jason3.jpg', import.meta.url).href,
        new URL('/@/assets/people/jason/jason4.jpg', import.meta.url).href,
    ],
} as Person)

group.set('leonn037 ', {
    name: 'Leon Wang',
    profile: true,
    position: 'Undergraduate student',
    email: 'leonn037',
    pronouns: 'They/He',
    bio: 'Leon was born and raised in Columbia, South Carolina. When they were young, Leon was an inquisitive child who loved to learn about the natural world—too bad Leon was annoying and asked the most asinine questions. His dad, although a great organic professor to his own college students, wasn’t keen on teaching Leon and conjured up the best idea ever—passing Leon off into one of his colleague’s general chemistry classes. It definitely was nerve-racking at first for Leon, especially because they were an anxious short little child, within a class full of scary college students. However, Leon didn’t let it faze him, and Leon quickly found his new groove along with a love for chemistry. He proceeded to actually pass the class and let this event jumpstart a semi-successful journey to explore chemistry—he took many more chemistry courses and even conducted some meaningful research in chemistry—specifically in amino acid modification and some electrosynthesis—in high school. Now, they are a first-year undergraduate student at MIT, who plans on majoring in course 5 and is trying their best to learn how to be and be a great chemist. Outside of chemistry, Leon enjoys lifting weights—actually he loves lifting weights—skateboarding, playing basketball, playing smash bros, listening to music, and watching TV. Some shows they’re currently watching include “Demon Slayer”, “One Piece”, “Pretty Little Liars”, and “Boss and Me”. Some artists they currently love is Saba, Neck Deep, Aaron May, and Lontalius.',
    funFacts: [
        'Leon has been hard stuck at 5200 trophies on Clash Royale.',
        'Leon is ever-so-slightly lactose intolerant, but eats copious amounts of strawberry Greek yogurt',
    ],
    profilePic: new URL('/@/assets/people/leon/leon.jpg', import.meta.url).href,
    profilePhotos: [
        new URL('/@/assets/people/leon/leon-1.jpg', import.meta.url).href,
        new URL('/@/assets/people/leon/leon-2.jpg', import.meta.url).href,
        new URL('/@/assets/people/leon/leon-3.jpg', import.meta.url).href,
        new URL('/@/assets/people/leon/leon-4.jpg', import.meta.url).href,
    ],
} as Person)

group.set('ekball', {
    name: 'Em Ball',
    profile: true,
    position: 'Undergraduate student',
    email: 'ekball',
    pronouns: 'They/Them',
    bio: 'Em is from West Des Moines, Iowa, and is a Chemistry major in the Class of 2025. They are a thrower (discus, hammer, shot put, javelin) on the MIT Track and Field team. Their hobbies are rollerblading around campus and singing in MIT’s Centrifugues a capella group. Fun facts about Em are that they can wiggle their ears, and they are staunchly anti orange juice. Em is very excited for the opportunities that research in the Wendlandt lab offers.',
    profilePic: new URL('/@/assets/people/em/em.jpg', import.meta.url).href,
} as Person)


// for each person, if publicationName isn't defined set it as name.
for (const [key, value] of group.entries()) {
    if (value.publicationName === undefined) {
        value.publicationName = value.name;
    }
    if (value.profile === undefined) {
        value.profile = false;
    }
    group.set(key, value);
}

export default group as Map<string, Person>;