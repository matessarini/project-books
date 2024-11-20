import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent {
  query: string = '';
  books: any[] = [];

  constructor(private http: HttpClient) {}

  searchBooks() {
    const apiUrl = 'https://www.googleapis.com/books/v1/volumes';
    const params = {
        q: this.query,
        maxResults: 20, // Número máximo de resultados por requisição
    };

    this.http.get(apiUrl, { params }).subscribe((response: any) => {
        this.books = response.items; // Armazena os resultados
    });
  }

  
}