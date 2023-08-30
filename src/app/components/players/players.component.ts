import { Component, OnInit } from '@angular/core';
import { playersT } from 'src/app/data/data';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  playersTab:any = playersT ;
  constructor() { }

  ngOnInit() {
  }

}
