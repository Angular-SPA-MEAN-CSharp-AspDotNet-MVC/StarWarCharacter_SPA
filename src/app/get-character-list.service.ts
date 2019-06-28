import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetCharacterListService {

  constructor(private http: HttpClient) { }

  configUrl = 'http swapi.co/api/planets/1/assets/config.json';

  getCharacterData() {
    return this.http.get(this.configUrl);
  }
  
}
