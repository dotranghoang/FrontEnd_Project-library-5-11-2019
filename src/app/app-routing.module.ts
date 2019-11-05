import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {BooksComponent} from './books/books.component';


const routes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'books', component: BooksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
