import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../books-service.service';

@Component({
  selector: 'app-list-popular-books',
  templateUrl: './list-popular-books.component.html',
  styleUrls: ['./list-popular-books.component.css']
})
export class ListPopularBooksComponent implements OnInit {
  livros: any[] = [];
books: any;

  constructor(private booksService: BooksService) { }

  ngOnInit() {
    this.carregarLivros(); 
  }

  carregarLivros() {
    this.booksService.getBooks().subscribe(
      (data) => {
        this.livros = data.items; 
      },
      (error) => {
        console.error('Erro ao carregar livros', error);
      }
    );
  }
}