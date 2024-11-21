import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-best-seller',
  templateUrl: './best-seller-books.component.html',
  styleUrls: ['./best-seller-books.component.css']
})

export class BestSellerBooksComponent implements OnInit {
  livros: any[] = [];
book: any;

  constructor() { }

  ngOnInit(): void {
    this.buscarEbooksGratuitosPopulares();
  }

  async buscarEbooksGratuitosPopulares() {
    const resposta = await fetch(`https://www.googleapis.com/books/v1/volumes?q=best+seller&maxResults=8`);
    const dados = await resposta.json();
    this.livros = dados.items.map((item: { id: any; volumeInfo: { title: any; imageLinks: { thumbnail: any; }; description: any; }; }) => ({
        id: item.id, // Captura o ID do volume
        titulo: item.volumeInfo.title,
        capaUrl: item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : 'caminho/para/imagem/default.jpg',
        descricao: item.volumeInfo.description,
    }));
}}