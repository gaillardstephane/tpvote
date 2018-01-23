import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ServicejComponent } from './servicej/servicej.component';
import { ListClientComponent } from './list-client/list-client.component';


@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ServicejComponent,
    ListClientComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
