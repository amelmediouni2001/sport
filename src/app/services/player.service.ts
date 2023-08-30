import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  //BE adress
  playerURL: string ="http://localhost:3000/players" ;
  // Boustagi
  constructor(private http: HttpClient) { }

  //Request to add player 
addPlayer(obj) {
  console.log("add player test");
  console.log(obj);
  return this.http.post<{isAdded : boolean}>(this.playerURL,obj);

}

 // Request to get all players
 getAllPlayers() {
  console.log("here into service");
  return this.http.get<{ players : any}>(this.playerURL);
}

 // Request to delete a player
deletePlayer(id) {
  return this.http.delete<{ msg : string }>(`${this.playerURL}/${id}`);

  }

    //Request to search player 
  searchPlayer(obj) {
    return this.http.post<{ players : any }>(this.playerURL + "/searchPlayer", obj)
  }

// }
}


