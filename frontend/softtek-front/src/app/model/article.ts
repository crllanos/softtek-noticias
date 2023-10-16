export class Article {
    id: number;
    title: string;
    summary: string;
    url: string;
    published_at: string;
    isFavorite: boolean;

    constructor(id: number, title: string, summary: string, url: string, published_at: string, isFavorite: boolean) {
        this.id = id;
        this.title = title;
        this.summary = summary;
        this.url = url;
        this.published_at = published_at;
        this.isFavorite = isFavorite;
      }
}