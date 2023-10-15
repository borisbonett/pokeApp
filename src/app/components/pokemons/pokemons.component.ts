import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service'; 
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {

  public pokemons:any[] = [];

  constructor(
    private apiService:ApiService,
    private dataService:DataService
  ){}

  ngOnInit(): void {
    this.getInitalPokemons();
  }

  async getInitalPokemons() {
    try {
      const data = await this.apiService.get('pokemon?offset=1&limit=20');
      this.pokemons = await this.dataService.getPokemons(data);
      console.log(this.pokemons);

    } catch (error) {
      console.error('Error:', error);
    }
  }
}
