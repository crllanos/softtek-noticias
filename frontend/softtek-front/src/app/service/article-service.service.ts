import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Article } from '../model/article';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ArticleServiceService {
  private apiUrl = environment.apiArticles;

  constructor(private http: HttpClient) { }

  getArticles(): Observable<Article[]> {
    return this.http.get<{ results: Article[] }>(this.apiUrl)
      .pipe(map(response => response.results));
  }

}