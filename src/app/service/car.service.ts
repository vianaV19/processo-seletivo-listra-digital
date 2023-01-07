import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  base_url:string =  "https://run.mocky.io/v3/24fda311-d8b1-49ca-b35d-74ea1949020d"

  constructor(private httpClient:HttpClient) {

   }
  
  retrieveAll() {
    return this.httpClient.get(this.base_url)
  }
}