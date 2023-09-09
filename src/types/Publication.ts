interface News {
    source: string;
    newsurl: string;
}
  
interface Publication {
    pubType: string;
    title: string;
    authors: string;
    journal: string;
    year: number;
    volume: number;
    pages: string;
    doi: string;
    articleLink: string;
    esiLink: string;
    publisherLink: string;
    toc: string;
    newslist: Array<News>;
}

export default Publication;