import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  public boxPokemons:any[] = [];

  constructor(private http:HttpClient){}
  
  async getPokemons(data:any) {
    const { results } = data;
    const requests = results.map((result:any) => {
      return new Promise((resolve, reject) => {
        this.http.get(result.url).subscribe((res:any) => {
          resolve(res)
        }, (error:any) => {
          reject(error);
        });
      });
    });

    try {
      return await Promise.all(requests);
    } catch (error) {
      console.log('Error:', error);
      throw error;
    }
  }
}