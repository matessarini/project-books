import { Component } from '@angular/core';
import { CategoriesService } from '../../categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  generos: string[] = [];
  livros: any[] = [];
  selectedGenero: string | null = null;

  constructor(private CategoriesService: CategoriesService) {
    this.generos = this.CategoriesService.getGeneros();
  }

  buscarLivros(genero: string): void {
    this.selectedGenero = genero;
    this.livros = []; 
    this.CategoriesService.getLivrosPorGenero(genero).subscribe(data => {
      this.livros = data.items || [];
    });
  }
}