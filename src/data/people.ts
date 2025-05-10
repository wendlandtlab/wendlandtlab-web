
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

group.set('szhang36', {
    name: 'Shuo Zhang',
    position: 'Postdoctoral fellow',
    email: 'szhang36',
    pronouns: 'He/Him',
    profilePic: new URL('/@/assets/people/shuo/shuo.jpg', import.meta.url).href,
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

group.set('s_gandhi', {
    name: 'Shivaani Gandhi',
    profile: true,
    position: 'Postdoctoral fellow',
    email: 's_gandhi',
    pronouns: 'She/Her',
    profilePic: new URL('/@/assets/people/shivaani/shivaani.jpg', import.meta.url).href,
    bio: `Shivaani grew up in Redondo Beach, California. She graduated from UC Berkeley in 2017 with a B.S. in chemistry, where she worked under Prof. Evan Miller designing and synthesizing novel fluorescent voltage sensors. After undergrad, she worked at UCSF under Dr. Stanley Prusiner on a drug discovery campaign to find small-molecule therapeutics for neurodegenerative diseases. Seeking to deepen her expertise in organic chemistry, she moved to Princeton, NJ (and later back to Los Angeles, CA) for her doctoral studies. During graduate school, she studied the development and experimental application of data science tools for synthetic methodology development under the guidance of Prof. Abigail Doyle. Outside of the lab, Shivaani enjoys trying new restaurants/cafes, spending time with her family, attending concerts, reading, and making jewelry.`,
    funFacts: [
        'In adulthood, Shivaani developed a mysterious allergy to ibuprofen.',
        'The first concert Shivaani attended was the Jonas Brothers in 2007.',
        'Shivaani drove across the country from NJ to CA when she moved back to LA.'
    ],
    profilePhotos: [
        new URL('/@/assets/people/shivaani/website1.jpg', import.meta.url).href,
        new URL('/@/assets/people/shivaani/website2.jpg', import.meta.url).href,
        new URL('/@/assets/people/shivaani/website3.jpg', import.meta.url).href,
        new URL('/@/assets/people/shivaani/website4.jpg', import.meta.url).href,
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

group.set('frankdk', {
    name: 'Frank de Kleijne',
    profile: true,
    position: 'Graduate student',
    email: 'frankdk',
    bio: 'Frank grew up in a small town in the Netherlands and obtained his B.S. in Chemistry from the Fontys University of Applied Science at Eindhoven (Netherlands) in 2019 and his master in Chemistry from the Radboud University Nijmegen (Netherlands) in 2022. Franks interest in organic synthesis, reaction mechanisms, and reaction methodologies was catalysed during his first internship in 2017 where he worked in the group of dr. Patrick Murphy at the Bangor University (Wales, UK). Later, in 2018, he joined the lab of dr. Thomas Boltje at the Radboud University Nijmegen (Netherlands). Frank visited the lab of professor Alison Wendlandt at MIT (USA) for a seven month internship to complete his master’s degree during the summer of 2022. In 2023 he returned home to work with dr. Thomas Boltje and dr. Paul White on studying the glycosylation reaction using exchange NMR spectroscopy. Along his research he experienced the laborious reaction sequences to selectively modify a single sugar hydroxyl. Recent publications by our group intrigued him and motivated Frank to join the lab and explore the possibilities and opportunities of radical reactions for carbohydrate synthesis.',
    pronouns: 'He/Him',
    funFacts: [
        'Frank has a dog named Frits.',
        'What he likes most about Boston are the squirrels',
        'Frank likes to explore, travel, and visit places new to him.'
    ],
    linkedin: 'https://www.linkedin.com/in/frank-de-kleijne/',
    profilePic: new URL('/@/assets/people/frank/frank.jpg', import.meta.url).href,
    profilePhotos: [
        new URL('/@/assets/people/frank/frank1.jpeg', import.meta.url).href,
        new URL('/@/assets/people/frank/frank2.jpeg', import.meta.url).href,
        new URL('/@/assets/people/frank/frank3.jpeg', import.meta.url).href,
        new URL('/@/assets/people/frank/frank4.jpeg', import.meta.url).href,
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

group.set('jharren', {
    name: 'Jonas Harren',
    profile: true,
    position: 'Visiting Master Student',
    email: 'jharren@mit.edu',
    bio: 'Jonas was born and raised in the Rhineland, Germany, before moving north to the Ruhr area. Later he returned to study chemistry at RWTH Aachen university. With the beginning of his studies Jonas was immediately interested in organic chemistry, earning his B.Sc. under Prof. Bolm, where he focused on sulfoximine chemistry. During his first internship in the group of Prof. Leonori, Jonas became fascinated with photochemistry and its various possibilities, eager to explore this field deeper. Now, Jonas is excited to spend 6 months in the Wendlandt group, meeting new people, expanding his horizon, and exploring exciting chemistry.',
    pronouns: 'He/Him',
    funFacts: [
        'Jonas hates coconuts in every form.',
        'He loves snowboarding, scuba diving, and cooking (particularly Italian cuisine).',
        'Jonas is a big fan of Star Wars and Lego (A combination of both is best).'
    ],
    linkedin: 'http://linkedin.com/in/jonas-harren-0a18a2354',
    // orcid: "https://orcid.org/0009-0005-8195-9946",
    profilePic: new URL('/@/assets/people/jonas/jonas.jpg', import.meta.url).href,
    profilePhotos: [
        new URL('/@/assets/people/jonas/jonas-1.jpg', import.meta.url).href,
        new URL('/@/assets/people/jonas/jonas-2.jpg', import.meta.url).href,
        new URL('/@/assets/people/jonas/jonas-3.jpg', import.meta.url).href,
        new URL('/@/assets/people/jonas/jonas-4.png', import.meta.url).href,
    ],
} as Person)

group.set('jacobjan', {
    name: 'Jacob-Jan Haaksma',
    profile: true,
    position: 'Visiting Master Student',
    email: 'jacobjan@mit.edu',
    bio: 'Jacob grew up in Ljussens, a small village of 400 inhabitants in the province of Friesland, the Netherlands, where he lived until the age of 17. He then moved to Groningen to pursue a BSc in Chemistry at the University of Groningen, where he developed a strong interest in organic chemistry. During his undergraduate studies, he spent a semester at the Hong Kong University of Science and Technology as part of a minor program. In 2023, he wrote his Bachelor\’s thesis in the group of Prof. Adriaan Minnaard on the ammoxidation of unprotected glycosides. \n Jacob continued at the University of Groningen for his Master’s in Chemistry which concluded with a thesis project – also in the Minnaard group – where he worked towards a bio-inspired total synthesis of Cihunamide B, a macrocyclic peptide natural product. In April 2025, he joined the Wendlandt group as a visiting Master’s student for a six-month research internship, where he looks forward to learning from the talented and inspiring people around him. \n Outside the lab, Jacob enjoys bouldering, thrift shopping, analog photography, and exploring the Cambridge/Boston area. Though the Netherlands isn’t exactly known for its mountains, he loves hiking whenever the opportunity arises. He also has a deep appreciation for music and is always on the lookout for new song or even genres (recommendations welcome).',
    pronouns: 'He/Him',
    funFacts: [
        'Jacob takes Mario Kart 8 Deluxe a little too seriously.',
        'He owns a wine brewing kit and he recently made mango wine; it was not very tasty.',
        'He tends to hyperfixate on niche hobbies only to abandon them after a month. Past examples include (but are not limited to): speedcubing, metal detecting, disc golf, embroidery, and genealogy.'
    ],
    linkedin: 'https://www.linkedin.com/in/jacob-jan-haaksma/',
    orcid: "https://orcid.org/0009-0006-3663-7179",
    profilePic: new URL('/@/assets/people/jacob/jacob.jpg', import.meta.url).href,
    profilePhotos: [
        new URL('/@/assets/people/jacob/jacob-1.jpg', import.meta.url).href,
        new URL('/@/assets/people/jacob/jacob-2.jpg', import.meta.url).href,
        new URL('/@/assets/people/jacob/jacob-3.jpg', import.meta.url).href,
        new URL('/@/assets/people/jacob/jacob-4.jpg', import.meta.url).href,
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