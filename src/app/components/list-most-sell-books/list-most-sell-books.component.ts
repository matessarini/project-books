import { Component, OnInit } from '@angular/core';
import { BooksSellService } from 'src/app/books-sell-service.service';

@Component({
  selector: 'app-list-most-sell-books',
  templateUrl: './list-most-sell-books.component.html',
  styleUrls: ['./list-most-sell-books.component.css']
})
export class ListSellBooksComponent implements OnInit {
  livros: any[] = []; // Inicializa a lista de livros
books: any;

  constructor(private booksService: BooksSellService) { }

  ngOnInit() {
    this.carregarLivros(); // Chama a função para carregar os livros
  }

  carregarLivros() {
    this.booksService.getBooks().subscribe(
      (data) => {
        this.livros = data.items; // Armazena os livros retornados
      },
      (error) => {
        console.error('Erro ao carregar livros', error);
      }
    );
  }
}