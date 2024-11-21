import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private apiUrl = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: HttpClient) { }

  getGeneros(): string[] {
    return [
'Ciência',
'Fantasia',
'Suspense',
'Romance',
'Terror',
'Biografia',
'Autoajuda',
'História',
'Viagem',
'Saúde',
'Ficção Científica',
'Poesia',
'Aventura'
    ];
  }

  getLivrosPorGenero(genero: string, startIndex: number = 0): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?q=subject:${genero}&maxResults=40&startIndex=${startIndex}`);
  }
}