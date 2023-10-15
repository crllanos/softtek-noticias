export class Article {
    id: number;
    title: string;
    summary: string;
    url: string;
    publicationDate: Date;
    isFavorite: boolean;

    constructor(id: number, title: string, summary: string, url: string, publicationDate: Date, isFavorite: boolean) {
        this.id = id;
        this.title = title;
        this.summary = summary;
        this.url = url;
        this.publicationDate = publicationDate;
        this.isFavorite = isFavorite;
      }
}