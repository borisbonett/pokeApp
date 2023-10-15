import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service'; 
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {


  public data:any;
  public pokemons:any[] = [];
  public page:number = 0;


  constructor(
    private apiService:ApiService,
    private dataService:DataService
  ){}

  ngOnInit(): void {
    this.getInitalPokemons(this.page);
  }

  public async getInitalPokemons(page:number): Promise<any> {
    try {
      this.data = await this.apiService.get(`pokemon?offset=${page}&limit=10`);
      console.log(this.data);
      this.pokemons = await this.dataService.getPokemons(this.data);
      console.log(this.pokemons);

    } catch (error) {
      console.error('Error:', error);
    }
  }

  public next() {
    console.log(this.data);
    this.page++;
    this.getInitalPokemons(this.page)
  }

  public prev(){
    if(this.data.previous === null) return;
    this.page--;
    this.getInitalPokemons(this.page);
  }


}
