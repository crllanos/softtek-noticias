import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/model/article';
import { ArticleServiceService } from 'src/app/service/article-service.service'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent implements OnInit {

  articles: Article[];
  pagedArticles: any[];
  itemsPerPage = 3
  page = 1;
  filteredArticles: any[] = [];
  searchTerm: string = '';

  constructor(private articleServiceService: ArticleServiceService) {
    this.articles = [];
    this.pagedArticles = [];
    
    
    this.articleServiceService.getArticles().subscribe(articles => {
      console.log(articles)
      this.articles = articles;
      this.filteredArticles = this.articles
    });


  }


  ngOnInit() {
    this.filterList()
    this.updatePage();
  }

  updatePage() {
    const startIndex = (this.page - 1) * this.itemsPerPage;
    this.pagedArticles = this.articles.slice(startIndex, startIndex + this.itemsPerPage);


  }


  filterList() {
    this.filteredArticles = this.articles.filter(article =>
      article.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}