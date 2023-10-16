export class Article {
    id: string;
    title: string;
    summary: string;
    url: string;
    published_at: string;

    constructor(id: string, title: string, summary: string, url: string, published_at: string) {
        this.id = id;
        this.title = title;
        this.summary = summary;
        this.url = url;
        this.published_at = published_at;
      }
}