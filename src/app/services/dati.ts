import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Dati {

  private apiurl = 'https://pokeapi.co/api/v2/pokemon/ditto'

  constructor(private http: HttpClient) { }

  getPokemon(): Observable<any> {
    return this.http.get<any>(this.apiurl)
  }

}
