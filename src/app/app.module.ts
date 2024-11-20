import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookSearchComponent } from './components/book-search/book-search.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { GenerosComponent } from './pages/generos/generos.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { PopularBooksComponent } from './components/popular-books/popular-books.component';

@NgModule({
  declarations: [
    AppComponent,
    BookSearchComponent,
    HeaderComponent,
    GenerosComponent,
    AboutComponent,
    HomeComponent,
    PopularBooksComponent
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
