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
    this.pokemonService
      .getPokemons(10, this.page + 0)
      .subscribe((response: any) => {
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

  setPokedexColor(type: any): string {
    let color: string = '';

    switch (type) {
      case 'fire':
        color = '#ed3e32';
        break;
      case 'grass':
        color = '#7ede5b';
        break;
      case 'bug':
        color = '#bad1a5';
        break;
      case 'water':
        color = '#65e6e3'
        break;
      case 'normal':
        color = '#f5f2c9';
        break;
      case 'psychic':
        color = '#faaae3';
        break;
      case 'ground':
        color = '#a19165';
        break;
      case 'poison':
        color = '#632d54'; 
        break;
      case 'fighting':
        color = '#fc0f56'
        break;
      case 'electric': 
        color = '#fcff5c';
        break;
      case 'rock': 
        color = '#a8a8a0';
        break;
      case 'ghost': 
        color = '#995fba';
        break;
      default:
        return color;
        break;
    }

    return color;
  }
}
