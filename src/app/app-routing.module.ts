import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MovieTagComponent } from './movie-tag/movie-tag.component';

const routes: Routes = [
  {path: '', component: HeaderComponent},
  {path: 'movie', component:MovieTagComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
