import {Article} from './article.model';
import {Component, OnInit, Input} from '@angular/core';
import {HttpserviceService} from '../httpservice.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [HttpserviceService]
})

export class ArticleComponent implements OnInit {

  @Input()
  article: Article;
  updatOn: boolean;
  selectedArticle: Article;

  constructor() {
  }
  voteUp() {

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
