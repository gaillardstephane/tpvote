import {Article} from './article/article.model';
import {Component} from '@angular/core';
import {ArticleService} from './article.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ArticleService]
})

export class AppComponent {
  title = 'app';
  articles: Article[];

  constructor(private service: ArticleService) {
    service.getArticles();
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement) {
    return this.service.addArticle(title, link);
      }

  sortedArticles(): Article[] {
    return this.service.sortedArticles();
  }
}

