import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/model/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent implements OnInit {

  private articles: Article[];

  constructor() {
    this.articles = [];
  }


  ngOnInit() {
    // llamada servicio
  }

}