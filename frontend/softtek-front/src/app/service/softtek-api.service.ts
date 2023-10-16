import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs';
import { Article } from '../model/article';



@Injectable({
  providedIn: 'root'
})
export class SofttekApiService {
  private apiUrl = environment.apiSoftek;

  constructor(private http: HttpClient) { }

  saveFav(article: any) {
    article.id = null;
    console.log(article)
    return this.http.post(this.apiUrl, article);
  }


  getFavorites(): Observable<Article[]> {
    return this.http.get<Article[]>(this.apiUrl);
  }


}
