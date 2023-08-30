import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  //BE adress
  teamURL: string ="http://localhost:3000" ;
  // Boustagi
  constructor(private http: HttpClient) { }
 // Request to get all teams
 getAllTeams() {
  return this.http.get<{ teams: any }>(this.teamURL);
}
//display team
getTeamById(id) {
  // 1er methode
  // return this.http.get(this.teamURL + "/" + id);
  // 2eme methode 
  return this.http.get<{ team: any, msg:string }>(`${this.teamURL}/${id}`);
}

//Request to add team 
addTeam(obj) {
  return this.http.post<{ msg: string }>(this.teamURL,obj);

}
//Request to update team 
updatTeam(obj) {
  return this.http.put<{msg : string}>(this.teamURL,obj);
}

deleteTeam(id) {
    //Request to delete team 
    return this.http.delete<{ msg : string }>(`{this.teamURL}/${id}`)
  }

}

