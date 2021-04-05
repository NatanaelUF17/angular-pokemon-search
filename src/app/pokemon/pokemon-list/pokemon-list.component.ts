import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
  constructor(private pokemonService: PokemonService) {}

  pokemons: any[] = [];
  page: number = 1;
  totalPokemons: number = 0;

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    this.pokemonService.getPokemons(10, this.page + 0).subscribe((response: any) => {
      this.totalPokemons = response.count;
      response.results.forEach((pokemon: any) => {
        this.pokemonService
          .getPokemon(pokemon.name)
          .subscribe((response: any) => {
            this.pokemons.push(response);
          });
      });
    });
  }
}
