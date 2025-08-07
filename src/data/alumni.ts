
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

const alumni = [
    {
        name: 'Frank de Kleijne',
        linkedin: 'https://www.linkedin.com/in/frank-de-kleijne/',
        position: 'Grad Student (2025)',
        profilePic: new URL('/@/assets/people/alumni/frank.jpg', import.meta.url).href,
        // currentPos: "MD\/PHD student, MUSC"
    },{
        name: 'Leon Wang',
        linkedin: 'https://www.linkedin.com/in/leon-wang-6b6071225/',
        position: 'Undergrad (2025)',
        profilePic: new URL('/@/assets/people/alumni/leon.jpg', import.meta.url).href,
        currentPos: "MD\/PHD student, MUSC"
    },
    {
        name: 'Mina Yamane',
        linkedin: 'https://www.linkedin.com/in/mina-yamane-5952b2348/',
        position: 'Visiting Grad Student (2025)',
        profilePic: new URL('/@/assets/people/alumni/mina.jpg', import.meta.url).href,
        currentPos: "Asst. Prof., UTokyo"
    },
    {
        name: 'Tae Hwang',
        linkedin: 'https://www.linkedin.com/in/taehwan-hwang-38ab58130/',
        position: 'Postdoc (2023-2025)',
        profilePic: new URL('/@/assets/people/alumni/tae.jpg', import.meta.url).href,
        currentPos: "Senior Scientist, Merck"
    },
    {
        name: 'Gino Occhialini',
        linkedin: 'https://www.linkedin.com/in/ginoocch/',
        position: 'Ph.D. (2024)',
        profilePic: new URL('/@/assets/people/alumni/gino.jpg', import.meta.url).href,
        currentPos: "Postdoc, Reisman Group, Caltech"
    },
    {
        name: 'Yuan Zhang',
        position: 'Postdoc (2020-2024)',
        profilePic: new URL('/@/assets/people/alumni/yuan.jpg', import.meta.url).href,
        linkedin: "https://www.linkedin.com/in/yuan-zhang-531275105/",
        currentPos: "Asst. Prof., Iowa State University"
    },
    {
        name: 'Daniel Gorelik',
        position: 'Postdoc (2022-2024)',
        profilePic: new URL('/@/assets/people/alumni/daniel.jpg', import.meta.url).href,
        linkedin: "https://www.linkedin.com/in/daniel-gorelik-2a89732a4/",
        currentPos: "Process Chem Scientist, ORIC"
    },
    {
        name: 'Lianyan Xu',
        position: 'Postdoc (2022-2024)',
        profilePic: new URL('/@/assets/people/alumni/lianyan.jpg', import.meta.url).href,
        linkedin: "https://www.linkedin.com/in/lianyan-x-3a23a88b/",
        currentPos: "Sr Proc Chemist, Exemplify BioPharma"
    },
    {
        name: 'Xin Gu',
        position: 'Ph.D. (2024)',
        profilePic: new URL('/@/assets/people/alumni/xin.jpg', import.meta.url).href,
        linkedin: "https://www.linkedin.com/in/xin-gu-77a1a5228/",
        currentPos: "Postdoc Scientist, Eli Lilly"
    },
    {
        name: 'Jason Zhang',
        position: 'Undergrad (2024)',
        profilePic: new URL('/@/assets/people/alumni/jason.jpg', import.meta.url).href,
        linkedin: "https://www.linkedin.com/in/jason-zhang-06b93b203/",
        currentPos: "Grad Student, Caltech"
    },
    {
        name: 'Em Ball',
        position: 'Undergrad (2023)',
        profilePic: new URL('/@/assets/people/alumni/em.jpg', import.meta.url).href,
        linkedin: "https://www.linkedin.com/in/emily-ball-142ba5225/",
        // currentPos: "Postdoc, Food and Drug Administration"
    },
    {
        name: 'Jiayi Li',
        position: 'Postdoc (2022-2023)',
        profilePic: new URL('/@/assets/people/alumni/jiayi.jpg', import.meta.url).href,
        linkedin: "https://www.linkedin.com/in/jiayi-li-51018216a/",
        currentPos: "Postdoc, Food and Drug Administration"
    },
    {
        name: 'Vignesh Palani',
        position: 'Postdoc (2021-2023)',
        profilePic: new URL('/@/assets/people/alumni/vignesh.jpg', import.meta.url).href,
        linkedin: "https://www.linkedin.com/in/vignesh-palani-1145b9ba/",
        currentPos: "Professor, IISc Bangalore (India)"
    },
    {
        name: 'Hayden Carder',
        linkedin: 'https://www.linkedin.com/in/hayden-carder-45757a171/',
        position: 'Ph.D. (2023)',
        email: 'hcarder',
        profilePic: new URL('/@/assets/people/alumni/hayden.jpg', import.meta.url).href,
        currentPos: "Postdoc, Arnold Group, Caltech"
    },
    {
        name: 'Aaron Liu',
        position: 'M.S. (2022)',
        profilePic: new URL('/@/assets/people/alumni/aaron.jpg', import.meta.url).href,
        linkedin: "https://www.linkedin.com/in/aaronliuhk/",
        currentPos: "Morgan Stanley"
    },
    {
        name: 'Alexander Seim',
        position: 'M.S. (2022)',
        profilePic: new URL('/@/assets/people/alumni/alex.jpg', import.meta.url).href,
        currentPos: "Treeline Biosciences",
        linkedin: "https://www.linkedin.com/in/alex-seim-218724228"
    },
    {
        name: 'Zhaohong Lu',
        position: 'Postdoc (2019-2020)',
        profilePic: new URL('/@/assets/people/alumni/lu.jpg', import.meta.url).href,
        linkedin: "https://www.linkedin.com/in/zhaohong-lu-b8a3aa190/",
        currentPos: "Professor, Xiamen University (China)"
    },
    {
        name: 'Jonah Barbour',
        position: 'M.S. (2020)',
        profilePic: new URL('/@/assets/people/alumni/johanna.jpg', import.meta.url).href,
        linkedin: "https://www.linkedin.com/in/johbrbr/",
        currentPos: "R&D Scientist II, Form Energy"
    },
    {
        name: 'Carolyn Suh',
        position: 'M.S. (2020)',
        profilePic: new URL('/@/assets/people/alumni/carolyn.jpg', import.meta.url).href,
        linkedin: "https://www.linkedin.com/in/carolyn-suh/",
        currentPos: "Senior Scientist, Kalsec Inc."
    },
    {
        name: 'Krista Dong',
        position: 'Undergrad (2019-2020)',
        profilePic: new URL('/@/assets/people/alumni/krista.jpg', import.meta.url).href,
        linkedin: "https://www.linkedin.com/in/kristadong/",
        currentPos: "PhD Student, Caltech"
    },
    {
        name: 'Ellie Plachinski',
        position: 'Undergrad (2019-2020)',
        profilePic: new URL('/@/assets/people/alumni/ellie.jpg', import.meta.url).href,
        linkedin: "https://www.linkedin.com/in/ellie-plachinski-8a2168149/",
        currentPos: "PhD Student, UW Madison"
    },
    {
        name: 'Kathleen Wang',
        position: 'M.S. (2020)',
        profilePic: new URL('/@/assets/people/alumni/kathleen.jpg', import.meta.url).href,
        linkedin: "https://www.linkedin.com/in/kathleenjwang/",
        currentPos: "Consultant, N-SIDE"
    },
    {
        name: 'Yong Wang',
        position: 'Postdoc (2019-2020)',
        profilePic: new URL('/@/assets/people/alumni/yong.jpg', import.meta.url).href,
        linkedin: "https://www.linkedin.com/in/yong-wang-5a30b470/",
        currentPos: "Principal Scientist, Genentech"
    },
] as unknown as Person[];


export default alumni as Person[];
