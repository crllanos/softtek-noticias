import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ArticleComponent } from './component/article/article.component';
import { AppRoutingModule } from './app-routing.module';

import { DateFnsModule } from 'ngx-date-fns';
import { DateformatcustomPipe } from './pipes/dateformatcustom.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { FavoritesComponent } from './component/favorites/favorites.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    DateformatcustomPipe,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DateFnsModule.forRoot(),
    NgxPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
