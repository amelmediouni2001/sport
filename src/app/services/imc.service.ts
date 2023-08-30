import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImcService {
    //BE adress
  imcURL: string ="http://localhost:3000/imc";

  constructor(private http: HttpClient) { }

//Request to calcul imc 
calculIMC(obj){
  return this.http.post<{msg : string}>(this.imcURL, obj);

  
}
}

