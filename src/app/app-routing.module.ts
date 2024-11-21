import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenerosComponent } from './pages/generos/generos.component';
import { HomeComponent } from './pages/home/home.component';
import { FreeBooksComponent } from './pages/free-books/free-books.component';
import { SellBooksComponent } from './pages/sell-books/sell-books.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'generos', component: GenerosComponent },
  { path: 'ebooks-gratuitos', component: FreeBooksComponent },
  { path: 'ebooks-vendidos', component: SellBooksComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
