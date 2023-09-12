
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


const group : Map<string, Person> = new Map();

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
} as Person )

group.set('szhang36', {
    name: 'Shuo Zhang',
    position: 'Postdoctoral fellow',
    email: 'szhang36',
    pronouns: 'He/Him',
    profilePic: new URL('/@/assets/people/shuo/shuo.jpg', import.meta.url).href,
} as Person )

group.set('dgorelik', {
    name: 'Daniel Gorelik',
    position: 'Postdoctoral fellow',
    email: 'dgorelik',
    pronouns: 'He/Him',
    profilePic: new URL('/@/assets/people/daniel/daniel.jpg', import.meta.url).href,
} as Person )

group.set('lianyanx ', {
    name: 'Lianyan Xu',
    position: 'Postdoctoral fellow',
    email: 'lianyanx',
    pronouns: 'She/Her',
    profilePic: new URL('/@/assets/people/lianyan/lianyan.jpg', import.meta.url).href,
} as Person )

group.set('thwang1 ', {
    name: 'Tae Hwang',
    position: 'Postdoctoral fellow',
    email: 'thwang1',
    pronouns: 'He/Him',
    profilePic: new URL('/@/assets/people/tae/tae.jpg', import.meta.url).href,
} as Person )

group.set('gino', {
    name: 'Gino Occhialini',
    profile: true,
    position: 'Graduate student',
    email: 'ginoocch',
    linkedin: 'https://www.linkedin.com/in/gino-occhialini-4bb670103',
    github: 'ginoocch',
    pronouns: 'he/him',
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
} as Person )

group.set('gux ', {
    name: 'Xin Gu',
    profile: true,
    position: 'Graduate student',
    email: 'gux',
    bio:'Xin was born and raised in Taizhou, China before moving to the Ohio State University to pursue bachelor’s degree in chemistry. At the Ohio State, Xin worked on three-component Minisci reaction in the lab of Professor David Nagib. After graduation, Xin decided to move to the east coast and joined the Wendlandt lab. Outside of lab, Xin enjoys eating and video games.',
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
} as Person )

group.set('hcarder ', {
    name: 'Hayden Carder',
    publicationName: 'Hayden M. Carder',
    profile: true,
    bio: 'Hayden Carder grew up in the western suburbs of Chicago, IL. He completed his B.S. in Chemistry at University of Rochester. While at UR, he conducted research under Professor Benjamin Miller focusing on two unique project areas: the development/application of a label-free multiplex biosensor and the synthesis of RNA targeting molecules. While there, he served as a workshop leader in various chemistry classes for 3 years. Interested in the application of new methodologies for the synthesis of biomolecules, he attended MIT to pursue his Ph.D. under Professor Alison Wendlandt. Outside of chemistry, Hayden enjoys cooking and making furniture in his spare time.',
    funFacts: [
        'Hayden has a dog named Gambit, a border collie aussie mix. Gambit’s greatest joys in life are fetch and invading your personal space (for love).',
        'He uses the lab office freezer to store his excess homemade apple sauce and jelly.',
        'He likes to travel to visit family, go hiking, or go to the beach.'
    ],
    linkedin: 'https://www.linkedin.com/in/hayden-carder-45757a171/',
    orcid: 'https://orcid.org/0000-0003-3811-5375',
    position: 'Graduate student',
    email: 'hcarder',
    pronouns: 'He/Him',
    profilePhotos: [
        new URL('/@/assets/people/hayden/hayden-1.jpg', import.meta.url).href,
        new URL('/@/assets/people/hayden/hayden-2.jpg', import.meta.url).href,
        new URL('/@/assets/people/hayden/hayden-3.jpg', import.meta.url).href,
        new URL('/@/assets/people/hayden/hayden-4.jpg', import.meta.url).href,
    ],
    profilePic: new URL('/@/assets/people/hayden/hayden.jpg', import.meta.url).href,
} as Person )

group.set('liang014 ', {
    name: 'Sam Liang',
    position: 'Graduate student',
    email: 'liang014',
    pronouns: 'He/Him',
    profilePic: new URL('/@/assets/people/sam/sam.jpg', import.meta.url).href,
} as Person )

group.set('ycnie ', {
    name: 'Yichen Nie',
    position: 'Graduate student',
    email: 'ycnie',
    pronouns: 'He/Him',
    profilePic: new URL('/@/assets/people/yichen/yichen.jpg', import.meta.url).href,
} as Person )

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
} as Person )

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
} as Person )

group.set('ekball ', {
    name: 'Em Ball',
    profile: true,
    position: 'Undergraduate student',
    email: 'ekball',
    pronouns: 'They/Them',
    bio: 'Em is from West Des Moines, Iowa, and is a Chemistry major in the Class of 2025. They are a thrower (discus, hammer, shot put, javelin) on the MIT Track and Field team. Their hobbies are rollerblading around campus and singing in MIT’s Centrifugues a capella group. Fun facts about Em are that they can wiggle their ears, and they are staunchly anti orange juice. Em is very excited for the opportunities that research in the Wendlandt lab offers.',
    profilePic: new URL('/@/assets/people/em.jpg', import.meta.url).href,
} as Person )


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