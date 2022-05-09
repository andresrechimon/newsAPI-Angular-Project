import { Component } from '@angular/core';
import { NewsService } from './services/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loading:boolean = false;
  newsList:any[] = [];

  constructor(private ns:NewsService){}

  searchNews(data:any){
    this.newsList = [];
    this.loading = true
    setTimeout(() => {
     this.ns.getNews(data)
        .subscribe(data => {
          this.newsList = data.articles;
          this.loading = false;
        }) 
    }, 1000) 
  }
}
