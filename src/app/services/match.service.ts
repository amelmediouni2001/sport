import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  //BE adress
  matchURL: string ="http://localhost:3000/matches" ;
  
  // Boustagi
    constructor(private http: HttpClient) {}
    // Request to get all matches
    getAllMatches() {
      console.log("here into service");
      
      // <{ matches: any }> : cest le retour whos coming back from BE app.js
      return this.http.get<{ matches: any }>(this.matchURL);

      
    }

// Request to get match by iD
    getMatchById(id) {
      return this.http.get<{ match: any, msg:string }>(`${this.matchURL}/${id}`);

      // 1er methode
      // return this.http.get(this.matchURL + "/" + id);
      // 2eme methode 
    }

    //Request to add match 
    addMatch(obj) {
      return this.http.post<{ msg: string }>(this.matchURL,obj);
    }

    //Request to update match 
    updatMatch(obj) {
      return this.http.put<{msg : string}>(this.matchURL,obj);
    }

    deleteMatch(id) {
        //Request to delete match 
        return this.http.delete<{ msg : string }>(`${this.matchURL}/${id}`)
      }

}
