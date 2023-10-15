import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from '../utilities/api-url';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http:HttpClient){}
  
  async get(controller:any){
    try {
      return await this.http.get(apiUrl.url + controller).toPromise();
    } catch (error) {
      console.log('Error:', error);
      throw error;
    }
  }

}