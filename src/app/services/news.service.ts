import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http:HttpClient) { }

  getNews(data:any): Observable<any>{
    const url = `https://newsapi.org/v2/top-headlines?country=${data.country}&category=${data.category}&apiKey=8ab9f6a80b5241b4ba7f0b3938ea683e`;

    return this.http.get(url);
  }
}
