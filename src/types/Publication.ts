interface News {
    source: string;
    newsurl: string;
}

interface Publication {
    pubType: string;
    title: string;
    authors: string;
    abbreviatedAuthors: string;
    patent: string;
    journal: string;
    year: number;
    date: string;
    volume: number | string;
    pages: string;
    doi: string;
    articleLink: string;
    esiLink: string;
    publisherLink: string;
    toc: string;
    newslist: Array<News>;
}

export default Publication;