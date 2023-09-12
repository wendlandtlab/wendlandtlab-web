
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

group.set('gino', {
    name: 'Gino Occhialini',
    profile: true,
    position: 'PhD Student',
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