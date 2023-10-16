import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'


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
}
