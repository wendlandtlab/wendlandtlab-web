
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
    ]
} as Person )

group.set('gux ', {
    name: 'Xin Gu',
    position: 'Graduate student',
    email: 'gux',
    pronouns: 'He/Him',
    profilePic: new URL('/@/assets/people/xin/xin.jpg', import.meta.url).href,
} as Person )

group.set('hcarder ', {
    name: 'Hayden Carder',
    position: 'Graduate student',
    email: 'hcarder',
    pronouns: 'He/Him',
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
    position: 'Undergraduate student',
    email: 'jsnzhang',
    pronouns: 'He/Him',
    profilePic: new URL('/@/assets/people/jason/jason.jpg', import.meta.url).href,
} as Person )

group.set('leonn037 ', {
    name: 'Leon Wang',
    position: 'Undergraduate student',
    email: 'leonn037',
    pronouns: 'They/He',
    profilePic: new URL('/@/assets/people/leon/leon.jpg', import.meta.url).href,
} as Person )

group.set('ekball ', {
    name: 'Em Ball',
    position: 'Undergraduate student',
    email: 'ekball',
    pronouns: 'They/Them',
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