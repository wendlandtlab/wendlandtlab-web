
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
        name: 'Johanna Barbour',
        position: 'M.S. (2020)',
        profilePic: new URL('/@/assets/people/alumni/johanna.jpg', import.meta.url).href,
        LinkedIn: "https://www.linkedin.com/in/johbrbr/",
        currentPos: "R&D Scientist II, Form Energy"
    },
    {
        name: 'Krista Dong',
        position: 'Undergrad (2019-2020)',
        profilePic: new URL('/@/assets/people/alumni/krista.jpg', import.meta.url).href,
        LinkedIn: "https://www.linkedin.com/in/kristadong/",
        currentPos: "PhD Student, Caltech"
    },
    {
        name: 'Wenlai Han',
        position: 'Undergrad (Summer 2022)',
        profilePic: new URL('/@/assets/people/wenlai.jpg', import.meta.url).href,
        LinkedIn: "https://www.linkedin.com/in/wenlai-han/",
        currentPos: "PhD Student, MIT"
    },
    {
        name: 'Jiayi Li',
        position: 'Postdoc (2022-2023)',
        profilePic: new URL('/@/assets/people/jiayi/jiayi.jpg', import.meta.url).href,
        LinkedIn: "https://www.linkedin.com/in/jiayi-li-51018216a/",
        currentPos: "Postdoc, Food and Drug Administration"
    },
    {
        name: 'Aaron Liu',
        position: 'M.S. (2022)',
        profilePic: new URL('/@/assets/people/aaron/aaron.jpg', import.meta.url).href,
        LinkedIn: "https://www.linkedin.com/in/aaronliuhk/",
        currentPos: "Morgan Stanley"
    },
    {
        name: 'Zhaohong Lu',
        position: 'Postdoc (2019-2020)',
        profilePic: new URL('/@/assets/people/alumni/lu.jpg', import.meta.url).href,
        LinkedIn: "https://www.linkedin.com/in/zhaohong-lu-b8a3aa190/",
        currentPos: "Professor, Xiamen University (China)"
    },
    {
        name: 'Vignesh Palani',
        position: 'Postdoc (2021-2023)',
        profilePic: new URL('/@/assets/people/vignesh/vignesh.jpg', import.meta.url).href,
        LinkedIn: "https://www.linkedin.com/in/vignesh-palani-1145b9ba/",
        currentPos: "Professor, IISc Bangalore (India)"
    },
    {
        name: 'Ellie Plachinski',
        position: 'Undergrad (2019-2020)',
        profilePic: new URL('/@/assets/people/alumni/ellie.jpg', import.meta.url).href,
        LinkedIn: "https://www.linkedin.com/in/ellie-plachinski-8a2168149/",
        currentPos: "PhD Student, UW Madison"
    },
    {
        name: 'Alexander Seim',
        position: 'M.S. (2022)',
        profilePic: new URL('/@/assets/people/alex/alex.jpg', import.meta.url).href,
        currentPos: "Treeline Biosciences"
    },
    {
        name: 'Carolyn Suh',
        position: 'M.S. (2020)',
        profilePic: new URL('/@/assets/people/alumni/carolyn.jpg', import.meta.url).href,
        LinkedIn: "https://www.linkedin.com/in/carolyn-suh/",
        currentPos: "Senior Scientist, Kalsec Inc."
    },
    {
        name: 'Kathleen Wang',
        position: 'M.S. (2020)',
        profilePic: new URL('/@/assets/people/alumni/kathleen.jpg', import.meta.url).href,
        LinkedIn: "https://www.linkedin.com/in/kathleenjwang/",
        currentPos: "Consultant, N-SIDE"
    },
    {
        name: 'Yong Wang',
        position: 'Postdoc (2019-2020)',
        profilePic: new URL('/@/assets/people/alumni/yong.jpg', import.meta.url).href,
        LinkedIn: "https://www.linkedin.com/in/yong-wang-5a30b470/",
        currentPos: "Principal Scientist, Genentech"
    },
] as unknown as Person[];


export default alumni as Person[];