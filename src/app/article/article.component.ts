import { Article } from './article.model';
import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

   @Input()
   article: Article;

   constructor() {
   // this.article = new Article('angular', 'http://angular.io', 10);
  }
  voteUp() {
    // console.log(`      ${this.article.votes}          `);
    this.article.voteUp();
    return false;
  }
  voteDown() {
    this.article.voteDown();
    return false;
  }

  ngOnInit() {
  }
}
