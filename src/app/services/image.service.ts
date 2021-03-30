import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }

  API_URL: string = 'https://api.500px.com/v1/photos/search?type=photos&image_size%5B%5D=14&consumer_key=your-api-key-here&include_states=true&formats=jpeg&exclude_nude=true';
  DRINKS_URL: string = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?';

  getImages(searchImageTerm?: string): Observable<any> {
    const url = `${this.API_URL}&term=${searchImageTerm}`;
    return this.http.get<any>(url);
  }

  getSuperHero(drink?: string): Observable<any[]> {
    const url = `${this.DRINKS_URL}s=${drink}`;
    return this.http.get<any[]>(url);
  }
}
