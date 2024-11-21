import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookSearchComponent } from './components/book-search/book-search.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { GenerosComponent } from './pages/generos/generos.component';
import { HomeComponent } from './pages/home/home.component';
import { PopularBooksComponent } from './components/popular-books/popular-books.component';
import { BestSellerBooksComponent } from './components/best-seller-books/best-seller-books.component';
import { FreeBooksComponent } from './pages/free-books/free-books.component';
import { ListPopularBooksComponent } from './components/list-popular-books/list-popular-books.component';
import { ListSellBooksComponent } from './components/list-most-sell-books/list-most-sell-books.component';
import { SellBooksComponent } from './pages/sell-books/sell-books.component';
import { CategoriesComponent } from './components/categories/categories.component';

@NgModule({
  declarations: [
    AppComponent,
    BookSearchComponent,
    HeaderComponent,
    GenerosComponent,
    HomeComponent,
    PopularBooksComponent,
    BestSellerBooksComponent,
    FreeBooksComponent,
    ListPopularBooksComponent, 
    ListSellBooksComponent, SellBooksComponent, CategoriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
