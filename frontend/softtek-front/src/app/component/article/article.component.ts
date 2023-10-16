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

  constructor(private articleServiceService: ArticleServiceService) {
    this.articles = [];
  }


  ngOnInit() {
    // llamada servicio
    this.articleServiceService.getArticles().subscribe(articles => {
      console.log(articles)
      this.articles = articles;
    });
  }

}