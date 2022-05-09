import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styles: [
    `
    span{
      color: white;
    }
    `
  ]
})
export class NewsListComponent {
@Input() newsList:any
}
