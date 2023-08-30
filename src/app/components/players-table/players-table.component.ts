import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { playersT } from 'src/app/data/data';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-players-table',
  templateUrl: './players-table.component.html',
  styleUrls: ['./players-table.component.css']
})
export class PlayersTableComponent implements OnInit {
  playersTab:any ;
  // [
  //   {id : 1, name : "Cristiano" , age : 36, position:"atq"},
  //   {id : 2, name : "Messi" , age : 34, position:"Forward"},
  //   {id : 3, name : "Neymar " , age : 29, position:"Defender "},

  // ];
  constructor(private myRouter:Router, private playerService: PlayerService) { }

  ngOnInit() {
        //Response : array of objects
          this.playerService.getAllPlayers().subscribe((result) => {
            this.playersTab= result.players;
          })
  }

  deletePlayer(id: number) {
    this.playerService.deletePlayer(id).subscribe((result) =>{
      console.log("here result after delete", result.msg);
      this.playerService.getAllPlayers().subscribe((result) => {
        this.playersTab= result.players;
      });
      
    });
       }

  displayPlayer(id: number) {
    // alert(`Player N° ${id} is displayed`);
    // this.myRouter.navigate([`playerInfo/${id}`]);
  }
  editPlayer(id: number) {
    // localStorage.setItem("playerId",JSON.stringify(id));
    // this.myRouter.navigate(["editPlayer"]);
    // alert(`Player N° ${id} is edited`);
    // this.myRouter.navigate([`editPlayer/${id}`]);
  }



  // reloadData() {
  //   this.playerService.getAllPlayers().subscribe((response) => {
  //     console.log("Response from BE: ", response);
  //     this.playersTab = response.players;

  //   });
  // }
}
