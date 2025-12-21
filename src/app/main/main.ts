import { Component, OnInit, inject } from '@angular/core';
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
  private http = inject(HttpClient);

  //creazione della variabile signal
  data = signal<string>('Caricamento...');

  //attesa dei dati
  async ngOnInit(): Promise<void> {
    const response = await firstValueFrom(this.http.get<any>('/api/users'));
    console.log(response);

    //salva i dati nella variabile
    this.data.set(response.data[0].first_name);
  }
}
