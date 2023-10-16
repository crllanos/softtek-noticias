export class Article {
    id: number;
    title: string;
    summary: string;
    url: string;
    publishedAt: Date;
    isFavorite: boolean;

    constructor(id: number, title: string, summary: string, url: string, publishedAt: Date, isFavorite: boolean) {
        this.id = id;
        this.title = title;
        this.summary = summary;
        this.url = url;
        this.publishedAt = publishedAt;
        this.isFavorite = isFavorite;
      }
}