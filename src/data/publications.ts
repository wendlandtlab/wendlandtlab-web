import Publication from '/@/types/Publication'

const pubs = [
    // pubs is a list of publications, patents, etc.
    // each publication is a Publication object
    // see src/types/Publication.ts for the Publication interface

    // generally articles have the following fields:
    // pubType='article', title, authors, journal, year, doi, articleLink, esiLink, publisherLink, toc, volume, pages

    // generally patents have the following fields:
    // pubType='patent', authors, title, patent, date, publisherLink

    // generally perspectives have the following fields:
    // pubType='perspective', title, authors, journal, year, doi, publisherLink, toc, volume, pages

    // generally reviews have the following fields:
    // pubType='review', title, authors, journal, year, doi, publisherLink, toc, volume, pages

    // newslist is a list of news articles about the publication
    // each news article is a News object
    // see src/types/Publication.ts for the News interface
    // each news article has the following fields:
    // source, newsurl

    // for citations abbreviatedAuthors is determined from authors
    // it can also be set manually by adding the field abbreviatedAuthors

    {
        pubType: 'article',
        title: 'The sugar cube: Network control and emergence in stereoediting reactions',
        authors: 'Hayden M. Carder‡, Gino Occhialini‡, Giovanni Bistoni, Christoph Riplinger, Eugene E. Kwan, Alison E. Wendlandt*',
        journal: 'Science',
        year: 2024,
        doi: 'Science, 2024, 10.1126/science.adp2447',
        articleLink:
            'https://wendlandtlab.blob.core.windows.net/pubs/2024-Science-CarderOcchialini.pdf',
        esiLink:
            'https://wendlandtlab.blob.core.windows.net/pubs/2024-Science-CarderOcchialini-ESI.pdf',
        publisherLink: 'https://www.science.org/doi/10.1126/science.adp2447',
        toc: new URL('/@/assets/publications/toc/2024-Science-Carder-Occhialini.jpeg', import.meta.url).href,
        volume: '385',
        pages: '456-463',
    }, {
        pubType: 'article',
        title: 'Strain-Inducing Positional Alkene Isomerization',
        authors: 'Vignesh Palani, Alison E. Wendlandt*',
        journal: 'J. Am. Chem. Soc.',
        year: 2023,
        doi: 'J. Am. Chem. Soc. 2023, 10.1021/jacs.3c06935',
        articleLink:
            'https://wendlandtlab.blob.core.windows.net/pubs/2023-JACS-Palani-article.pdf',
        esiLink:
            'https://wendlandtlab.blob.core.windows.net/pubs/2023-JACS-Palani-ESI.pdf',
        publisherLink: 'https://doi.org/10.1021/jacs.3c06935',
        toc: new URL('/@/assets/publications/toc/2023-palani-toc.png', import.meta.url).href,
        volume: '36',
        pages: '20053–20061',
    },
    {
        pubType: 'article',
        title:
            'Stereochemical editing logic powered by the epimerization of unactivated tertiary stereocenters',
        authors:
            'Yu-An Zhang‡, Vignesh Palani‡, Alexander E. Seim, Yong Wang, Kathleen J. Wang, Alison E. Wendlandt*',
        journal: 'Science',
        year: 2022,
        doi: 'Science, 2022, 10.1126/science.add6852',
        articleLink:
            'https://wendlandtlab.blob.core.windows.net/pubs/2022-Science-Zhang-Palani-article.pdf',
        esiLink:
            'https://wendlandtlab.blob.core.windows.net/pubs/2022-Science-Zhang-Palani-ESI.pdf',
        publisherLink: 'https://www.science.org/doi/10.1126/science.add6852',
        toc: new URL('/@/assets/publications/toc/2022-Science-Zhang-Palani-TOC.svg', import.meta.url).href,
        volume: 378,
        pages: '383-390',
        newslist: [
            {
                source: 'C&E News',
                newsurl:
                    'https://cen.acs.org/synthesis/Switching-tertiary-stereocenters/100/web/2022/10',
            },
            {
                source: 'Chemistry World',
                newsurl:
                    'https://www.chemistryworld.com/news/chirality-flipping-reaction-could-completely-change-total-synthesis-strategies/4016501.article',
            },
            {
                source: 'In the pipeline',
                newsurl:
                    'https://www.science.org/content/blog-post/flip-those-tertiary-centers',
            },
        ],
    },
    {
        pubType: 'perspective',
        title:
            'A stable alternative to an explosive synthetic reaction',
        authors: 'Vignesh Palani, Alison E. Wendlandt*',
        journal: 'Nature',
        year: 2022,
        doi: 'Nature, 2022, d41586-022-02952-w',
        articleLink:
            'https://wendlandtlab.blob.core.windows.net/pubs/2022-Nature-Palani-perspective.pdf',
        publisherLink: 'https://www.nature.com/articles/d41586-022-02952-w',
        volume: 610,
        pages: '40-41',
    },
    {
        pubType: 'article',
        title: 'Selective axial-to-equatorial epimerization of carbohydrates',
        authors: 'Hayden M. Carder, Yong Wang, Alison E. Wendlandt*',
        journal: 'J. Am. Chem. Soc.',
        year: 2022,
        doi: 'J. Am. Chem. Soc. 2022, 10.1021/jacs.2c04743',
        articleLink:
            'https://wendlandtlab.blob.core.windows.net/pubs/2022-JACS-Carder-article.pdf',
        esiLink:
            'https://wendlandtlab.blob.core.windows.net/pubs/2022-JACS-Carder-ESI.pdf',
        publisherLink: 'https://pubs.acs.org/doi/10.1021/jacs.2c04743',
        toc: new URL('/@/assets/publications/toc/JACS-2022-Carder.png', import.meta.url).href,
        volume: 144,
        pages: '11870-11877',
    },
    {
        pubType: 'article',
        title: 'Catalytic, contra-thermodynamic positional alkene isomerization',
        authors: 'Gino Occhialini, Vignesh Palani, Alison E. Wendlandt*',
        journal: 'J. Am. Chem. Soc.',
        year: 2021,
        doi: 'J. Am. Chem. Soc. 2021, 10.1021/jacs.1c12043',
        articleLink:
            'https://wendlandtlab.blob.core.windows.net/pubs/2021-JACS-Occhialini-article.pdf',
        esiLink:
            'https://wendlandtlab.blob.core.windows.net/pubs/2021-JACS-Occhialini-ESI.pdf',
        publisherLink: 'https://pubs.acs.org/doi/10.1021/jacs.1c12043',
        toc: new URL('/@/assets/publications/toc/JACS-2021-Occhialini.png', import.meta.url).href,
        volume: 144,
        pages: '145-152',
        newslist: [
            {
                source: 'MIT News',
                newsurl:
                    'https://news.mit.edu/2022/whimsy-and-alkene-isomerization-wendlandt-lab-0225',
            },
            {
                source: 'Trends in Chemistry',
                newsurl:
                    'https://www.sciencedirect.com/science/article/abs/pii/S2589597422000636',
            },
        ],
    },
    {
        pubType: 'article',
        title:
            'A change from kinetic to thermodynamic control enables trans-selective stereochemical editing of vicinal diols',
        authors:
            'Yu-an Zhang‡, Xin Gu‡, Alison E. Wendlandt*',
        journal: 'J. Am. Chem. Soc.',
        year: 2021,
        doi: 'J. Am. Chem. Soc. 2021, 10.1021/jacs.1c11902',
        articleLink:
            'https://wendlandtlab.blob.core.windows.net/pubs/2021-JACS-ZhangGu-article.pdf',
        esiLink:
            'https://wendlandtlab.blob.core.windows.net/pubs/2021-JACS-ZhangGu-ESI.pdf',
        publisherLink: 'https://pubs.acs.org/doi/10.1021/jacs.1c11902',
        toc: new URL('/@/assets/publications/toc/JACS-2021-ZhangGu.jpg', import.meta.url).href,
        volume: 144,
        pages: '599-605',
    },
    {
        pubType: 'article',
        title:
            'A unified strategy to access 2- and 4-deoxygenated sugars enabled by manganese-promoted 1,2-radical migration',
        authors: 'Hayden M. Carder, Carolyn E. Suh, Alison E. Wendlandt*',
        journal: 'J. Am. Chem. Soc.',
        year: 2021,
        doi: 'J. Am. Chem. Soc. 2021, 10.1021/jacs.1c05993',
        articleLink:
            'https://wendlandtlab.blob.core.windows.net/pubs/2021-JACS-Carder-article.pdf',
        esiLink:
            'https://wendlandtlab.blob.core.windows.net/pubs/2021-JACS-Carder-ESI.pdf',
        publisherLink: 'https://pubs.acs.org/doi/full/10.1021/jacs.1c05993',
        toc: new URL('/@/assets/publications/toc/JACS-2021-Carder.svg', import.meta.url).href,
        volume: 143,
        pages: '13798-13805',
        newslist: [
            {
                source: 'Synthesis Workshop',
                newsurl: 'https://www.youtube.com/watch?v: z0qiNfkdL10',
            },
        ],
    },
    {
        pubType: 'review',
        title:
            'Selective transformations of carbohydrates inspired by radical-based enzymatic mechanisms',
        authors:
            'Carolyn E. Suh‡, Hayden M. Carder‡, Alison E. Wendlandt*',
        journal: 'ACS Chem. Biol.',
        year: 2021,
        doi: 'ACS Chem. Biol. 2021, 10.1021/acschembio.1c00190',
        articleLink:
            'https://wendlandtlab.blob.core.windows.net/pubs/2021-ACSChemBiol-SuhCarder-review.pdf',
        publisherLink: 'https://pubs.acs.org/doi/10.1021/acschembio.1c00190',
        toc: new URL('/@/assets/publications/toc/ACSChemBiol-2021-SuhCarder.png', import.meta.url).href,
        volume: 16,
        pages: '1814-1828',
    },
    {
        pubType: "patent",
        authors: "Alison Wendlandt, Yong Wang, and Hayden M. Carder",
        title: "Selective valorization of biomass sugars",
        patent: "U.S. Patent WO 2021127642",
        date: "June 24, 2021",
        publisherLink: "https://patentscope.wipo.int/search/en/detail.jsf?docId=US328049193",
    },
    {
        pubType: 'article',
        title:
            'Synthesis of rare sugar isomers through site-selective epimerization',
        authors: 'Yong Wang, Hayden M. Carder, Alison E. Wendlandt*',
        journal: 'Nature',
        year: 2020,
        doi: 'Nature, 2020, 10.1038/s41586-020-1937-1',
        articleLink:
            'https://wendlandtlab.blob.core.windows.net/pubs/2020-Nature-Wang-article.pdf',
        esiLink:
            'https://wendlandtlab.blob.core.windows.net/pubs/2020-Nature-Wang-ESI.pdf',
        publisherLink: 'https://www.nature.com/articles/s41586-020-1937-1',
        toc: new URL('/@/assets/publications/toc/Nature-2020-Wang.svg', import.meta.url).href,
        volume: 578,
        pages: '403-408',
        newslist: [
            {
                source: 'C&E News',
                newsurl:
                    'https://cen.acs.org/synthesis/Switching-tertiary-stereocenters/100/web/2022/10',
            },
            {
                source: 'In the Pipeline',
                newsurl:
                    'https://www.science.org/content/blog-post/one-sugar-turns-into-another',
            },
            {
                source: 'MIT News',
                newsurl:
                    'https://news.mit.edu/2020/mit-chemist-alison-wendlandt-plays-with-space-0903',
            },
        ],
    },
    {
        pubType: 'perspective',
        title: 'Photocatalytic deracemization fixes the mix',
        authors: 'Alison E. Wendlandt',
        journal: 'Science',
        year: 2019,
        volume: 366,
        pages: '304-305',
        doi: 'Science, 2019, 10.1126/science.aay6919',
        esiLink:
            'https://wendlandtlab.blob.core.windows.net/pubs/2019-Science-Wendlandt-perspective.pdf',
        publisherLink: 'https://science.sciencemag.org/content/366/6463/304',
    },
] as unknown as Publication[];

function abbreviateName(name: string): string {
    // drop anything between parenthesis
    name = name.replace(/\(.*\)/g, '').trim();

    const nameParts = name.split(' ');
    const lastName = nameParts[nameParts.length - 1];
    const lastNameClean = lastName.replace(/[^a-zA-Z]/g, '');

    // take first letter of first name
    const firstName = nameParts[0][0] + '.';

    // if length of nameParts is 2, then there are no middle initials
    if (nameParts.length === 2) {
        return `${lastNameClean}, ${firstName}`;
    }

    const middleInitials = nameParts.slice(1, nameParts.length - 1);
    const middleInitialsString = middleInitials.join(' ');
    const middleInitialsStringAbbreviated = middleInitialsString
        .split(' ')
        .map((middleInitial) => {
            return middleInitial[0] + '.';
        })
        .join(' ');
    return `${lastNameClean}, ${firstName} ${middleInitialsStringAbbreviated}`;
}

function abbreviateAuthors(authors: string): string {
    const authorsArray = authors.replace(', and ', ', ').replace(' and ', ', ').split(', ');
    const authorsArrayAbbreviated = authorsArray.map((author) => {
        return abbreviateName(author);
    });
    return authorsArrayAbbreviated.join('; ');
}

pubs.forEach((pub) => {
    // if abbreviatedAuthors is not defined, then set it
    if (!pub.abbreviatedAuthors) {
        pub.abbreviatedAuthors = abbreviateAuthors(pub.authors);
    }
});

export default pubs;