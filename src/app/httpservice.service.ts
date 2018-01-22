import { Article } from './article/article.model';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpserviceService {

  constructor(private http: Http) { }


  getArticles(): Observable<any> {
    return this.http.get('http://localhost:3000/articles')
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw('Big issue!'));
  }

    addArticle(article: Article): Observable<any> {
    return this.http.post('http://localhost:3000/articles', article)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw('Big issue!'));
}
  updateArticle(article: Article): Observable<any> {
    return this.http.put('http://localhost:3000/articles' + article.id , article)
       .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw('Big issue!'));
}
  deleteArticle(id: number): Observable<any> {
    return this.http.delete('http://localhost:3000/articles' + id)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw('Big issue!'));
}
}

