import {Injectable} from '@angular/core';
import {Article} from './article/article.model';


@Injectable()
export class ArticleService {

  articles: Article[];
  constructor() {
  }

  getArticles():  Article[]  {
    console.log('++++++++ coucou ------------');

return this.articles = [
 ];
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement) {
    console.log(`adding article title: ${title.value} and link: ${link.value}`);
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;
  }

}

