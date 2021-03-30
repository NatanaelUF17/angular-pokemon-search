import { Component, OnInit } from '@angular/core';
import { ImageService } from './services/image.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Image Search';
 
  constructor(private imageService: ImageService) { }

  pokemons: any[] = []
  searchTerm = '';

  onSubmit(): void {
    /*this.imageService.getImages(this.searchTerm)
      .subscribe((response: any) => {
        console.log(response)
      });*/
    this.imageService.getSuperHero(this.searchTerm)
      .subscribe((response: any[]) => {
        console.log(response as [])
        this.pokemons = response;
      });
  }
}
