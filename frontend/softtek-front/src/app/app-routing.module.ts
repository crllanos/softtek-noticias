import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticleComponent } from './component/article/article.component';
import { FavoritesComponent } from './component/favorites/favorites.component'

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
 { path: 'articles', component: ArticleComponent },
  { path: 'favorites', component: FavoritesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/