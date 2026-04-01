
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

group.set('simkolb', {
    name: 'Simon Kolb',
    profile: true,
    position: 'Postdoctoral fellow',
    email: 'simkolb',
    pronouns: 'He/Him',
    profilePic: new URL('/@/assets/people/simon/simon.jpg', import.meta.url).href,
    bio: 'Simon was born and raised in Upper Franconia, Germany. He remained in this area to obtain his B.S. and M.S. degrees in Chemistry from the University of Bayreuth where he specialized in natural product chemistry and organic synthesis. To pursue a PhD, he joined the lab of Prof. Daniel B. Werz working on synthetic electrochemistry and methodology with small strained carbocycles at the Technical University of Braunschweig and the University of Freiburg. Simon visited Scripps Research as a PhD student to conduct research on Ni-electrocatalysis under the supervision of Prof. Phil Baran. For his postdoctoral studies which are supported by a Walter Benjamin fellowship (DFG), he decided to move to the US East Coast to join the Wendlandt lab. Outside the lab he enjoys nature, loves playing soccer, cooking, and traveling.',
    funFacts: [
        "His home area is called “land of breweries” – he does indeed enjoy a “Seidla” beer.",
        "Simon prefers Asian food over western cuisine.",
        "He is very interested in football and baseball but has never played himself.",
    ],
    linkedin: 'https://www.linkedin.com/in/simon-kolb-7b0533232/',
    orcid: "https://orcid.org/0000-0001-6352-4619",
    profilePhotos: [
        new URL('/@/assets/people/simon/simon-1.jpg', import.meta.url).href,
        new URL('/@/assets/people/simon/simon-2.jpg', import.meta.url).href,
        new URL('/@/assets/people/simon/simon-3.jpg', import.meta.url).href,
        new URL('/@/assets/people/simon/simon-4.jpg', import.meta.url).href,
    ],
} as Person)

group.set('coltonjo', {
    name: 'Colton Johnson',
    profile: true,
    position: 'Postdoctoral fellow',
    email: 'coltonjo',
    pronouns: 'He/Him',
    profilePic: new URL('/@/assets/people/colton/colton.jpg', import.meta.url).href,
    bio: 'Colton grew up in Fort St John, BC, Canada before venturing down south in 2015 to Vancouver to pursue his BSc in chemistry at The University of British Columbia. In 2018 he travelled to Montreal, QC to work under the supervision of Prof. André Charette at the University of Montreal studying the generation of diazo compounds in continuous flow. Upon returning to UBC he completed his BSc under the supervision of Prof. David Perrin studying the synthesis of gem-difluoromethyl boronates in 2020. He then moved to Toronto, ON to pursue his PhD under the supervision of Prof. Mark Lautens studying the total synthesis of norditerpenoid alkaloid natural products, organo- and transition metal catalysis. In 2026 he joined the Wendlandt lab to explore editing reactions under photoredox catalysis. Outside the lab, Colton enjoys the outdoors and can be found camping, canoeing or fishing; often in a combination of the three.',
    funFacts: [
        "The largest fish Colton has caught is a 41” northern pike in British Columbia",
        "The coldest temperature Colton has ever been outside in is -71°F",
        "Boston is the furthest south Colton has ever lived!",
    ],
    linkedin: 'https://www.linkedin.com/in/colton-johnson-5b08a4125/',
    orcid: "https://orcid.org/0000-0002-0905-1248",
    profilePhotos: [
        new URL('/@/assets/people/colton/colton-1.jpg', import.meta.url).href,
        new URL('/@/assets/people/colton/colton-2.jpg', import.meta.url).href,
        new URL('/@/assets/people/colton/colton-3.jpg', import.meta.url).href,
        new URL('/@/assets/people/colton/colton-4.jpg', import.meta.url).href,
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
    linkedin: 'https://www.linkedin.com/in/siyuan-gong-2503891b3/',
    profilePic: new URL('/@/assets/people/gary/gary.jpg', import.meta.url).href,
    profilePhotos: [
        new URL('/@/assets/people/gary/gary-1.jpg', import.meta.url).href,
        new URL('/@/assets/people/gary/gary-2.jpg', import.meta.url).href,
        new URL('/@/assets/people/gary/gary-3.jpg', import.meta.url).href,
        new URL('/@/assets/people/gary/gary-4.jpg', import.meta.url).href,
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
    linkedin: 'https://www.linkedin.com/in/kara-moulton-0b8275238/',
    profilePic: new URL('/@/assets/people/kara/kara.jpg', import.meta.url).href,
    profilePhotos: [
        new URL('/@/assets/people/kara/kara-1.jpg', import.meta.url).href,
        new URL('/@/assets/people/kara/kara-2.jpg', import.meta.url).href,
        new URL('/@/assets/people/kara/kara-3.jpg', import.meta.url).href,
        new URL('/@/assets/people/kara/kara-4.jpg', import.meta.url).href,
    ],
} as Person)

group.set('geastham', {
    name: 'Georgia Eastham',
    profile: true,
    position: 'Graduate student',
    email: 'geastham',
    bio: 'Georgia Eastham lived in several different US states growing up but attended high school in Davis, California. She began her undergraduate degree at Oklahoma State University in 2020 as a plant and soil science major with aspirations of being a plant breeder. She began research in a nutritional science lab evaluating anthocyanins in purple wheat. After taking the second semester of organic chemistry, she joined Professor Jimmie Weaver\'s lab and declared a second major in chemistry. In the Weaver lab she worked on developing photochemical bioorthogonal reactions. For her research in wheat and reaction development she was awarded the Goldwater scholarship in 2023. She joined the Wendlandt lab in 2024 and looks forward to investigating sugar epimerization.',
    pronouns: 'She/Her',
    funFacts: [
        'Georgia bakes sourdough bread at least once a week.',
        'Georgia loves biking and has competed in endurance gravel bike races (60 and 100 miles).',
        'She always has several creative projects going on.'
    ],
    linkedin: 'https://www.linkedin.com/in/georgia-eastham-4510971aa/',
    profilePic: new URL('/@/assets/people/georgia/georgia.jpg', import.meta.url).href,
    profilePhotos: [
        new URL('/@/assets/people/georgia/georgia-1.jpg', import.meta.url).href,
        new URL('/@/assets/people/georgia/georgia-2.jpg', import.meta.url).href,
    ],
} as Person)

group.set('clian6', {
    name: 'Christina Lian',
    profile: true,
    position: 'Graduate student',
    email: 'clian6',
    bio: 'Christina was born and raised in New York City. She obtained a B.S. in Chemistry from New York University in May 2024. Under the supervision of Professor Tianning Diao, she completed her undergraduate thesis on the upcycling of poly(methyl methacrylate) and the synthesis of small molecules capable of cleaving DNA at nanomolar concentrations. In the fall of 2024, she joined the Wendlandt lab, hoping to develop interesting and useful chemical transformations.',
    pronouns: 'She/Her',
    funFacts: [
        'Christina loves furry animals, especially cats and dogs (that don\'t bark or bite).',
        'Christina likes to drink boba tea.'
    ],
    orcid: "https://orcid.org/0009-0009-7938-5276",
    profilePic: new URL('/@/assets/people/christina/christina.jpg', import.meta.url).href,
    profilePhotos: [
        new URL('/@/assets/people/christina/christina-1.jpg', import.meta.url).href,
        new URL('/@/assets/people/christina/christina-2.jpg', import.meta.url).href,
        new URL('/@/assets/people/christina/christina-3.jpg', import.meta.url).href,
        new URL('/@/assets/people/christina/christina-4.jpg', import.meta.url).href,
    ],
} as Person)

group.set('sunnytan', {
    name: 'Sunny Tang',
    profile: true,
    position: 'Graduate student',
    email: 'sunnytan',
    bio: 'Sunny is originally from Houston, Texas. She received an A.B. in Chemistry and Physics from Harvard University in May 2024. At Harvard, she worked with Professor Stuart Schreiber on DNA-encoded library synthesis for molecular glue discovery, and she also worked with Professor Eric Jacobsen on β-selective glycosylation using hydrogen-bond-donor catalysis. In Fall 2024, she joined the Wendlandt group to continue research in organic methods development and mechanistic studies.',
    pronouns: 'She/Her',
    funFacts: [
        'Outside of chemistry, Sunny likes to bake, run, and explore coffee shops.',
        'She also plays the oboe.'
    ],
    profilePic: new URL('/@/assets/people/sunny/sunny.jpg', import.meta.url).href,
    profilePhotos: [
        new URL('/@/assets/people/sunny/sunny-1.jpg', import.meta.url).href,
        new URL('/@/assets/people/sunny/sunny-2.jpg', import.meta.url).href,
        new URL('/@/assets/people/sunny/sunny-3.jpg', import.meta.url).href,
    ],
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