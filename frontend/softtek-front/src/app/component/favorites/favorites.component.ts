import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/model/article';
import { SofttekApiService } from 'src/app/service/softtek-api.service'

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})

export class FavoritesComponent implements OnInit {

  articles: Article[];
  pagedArticles: any[];
  itemsPerPage = 3
  page = 1;
  filteredArticles: any[] = [];
  searchTerm: string = '';

  constructor(private softtekApi: SofttekApiService ) {
    this.articles = [];
    this.pagedArticles = [];
    
    
    this.softtekApi.getFavorites().subscribe(articles => {
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