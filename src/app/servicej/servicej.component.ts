import {Article} from '../article/article.model';
import {HttpserviceService} from '../httpservice.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servicej',
  templateUrl: './servicej.component.html',
  styleUrls: ['./servicej.component.css'],
  providers: [HttpserviceService]
})

export class ServicejComponent implements OnInit {

  articles: Article[];
   updateOn: boolean;
   selectedArticle: Article;

  constructor(private service: HttpserviceService) {}

  getArticles() {
    this.service.getArticles().subscribe(data => this.articles = data,
      error => console.log('error inservice'));
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement) {
    console.log(`adding article title: ${title.value} `);
    this.service.addArticle(new Article(title.value, link.value)).subscribe(data => this.getArticles());
  }

  selecArticle(article: Article) {this.selectedArticle = article;
   this.updateOn = true;
  }

  updateArticle(title: HTMLInputElement, link: HTMLInputElement) {
     this.selectedArticle.title = title.value;
     this.selectedArticle.link = link.value;
     this.service.addArticle(this.selectedArticle).subscribe(data => this.getArticles());
  }

deletArticle(id: number) {
  this.service.deleteArticle(id).subscribe(data => this.getArticles());
  }

  ngOnInit() {
    this.getArticles();
  }

}
