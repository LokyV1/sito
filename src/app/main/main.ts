import { Component, OnInit, effect, inject, input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { signal } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.html',
  styleUrl: './main.css',
})



export class Main implements OnInit {

  constructor(private http: HttpClient) { }

  data = signal<any>(null);
  isLoading = signal<boolean>(false);


  ngOnInit(): void {
    this.http.get<any>('https://pokeapi.co/api/v2/pokemon/ditto').subscribe((data) => {
      console.log(data);
      this.data.set(data);
    })
  }

}
