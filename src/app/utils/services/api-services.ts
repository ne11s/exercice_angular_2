import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServices {
  private baseUrl = "https://pokeapi.co/api/v2/pokemon/"
  constructor(private http: HttpClient){}

  getPosts(id : number): Observable<any>{
    return this.http.get(this.baseUrl + id)
  }
}
