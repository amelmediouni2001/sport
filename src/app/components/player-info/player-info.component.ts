import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { playersT } from 'src/app/data/data';


@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent implements OnInit {
players:any = playersT;
id:any;
findedPlayer: any;
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
for (let i = 0; i < this.players.length; i++) {
  if (this.players[i].id ==this.id) {
    this.findedPlayer = this.players[i];
    break;
    
  }
  
}
  }

}
