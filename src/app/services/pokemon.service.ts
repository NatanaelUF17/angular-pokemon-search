import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  private readonly API_URL: string = 'https://pokeapi.co/api/v2/pokemon';

  getPokemons(limit: number, offset: number): Observable<any> {
    const url = `${this.API_URL}?limit=${limit}&offset=${offset}`;
    return this.http.get<any>(url);
  }

  getPokemon(name: string): Observable<any> {
    const url = `${this.API_URL}/${name}`;
    return this.http.get<any>(url);
  }
}
