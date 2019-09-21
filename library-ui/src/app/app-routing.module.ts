import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { AuthorComponent } from './components/author/author.component';
import { UserComponent } from './components/user/user.component';
import { BookComponent } from './components/book/book.component';


const routes: Routes = [
  {
    path: '',
    component:  HomeComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'authors',
    component: AuthorComponent
  },
  {
    path: 'readers',
    component: UserComponent
  },
  {
    path: 'books',
    component: BookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
