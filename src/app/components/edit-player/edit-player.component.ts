import { playersT } from './../../data/data';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {
  //TDF
  //object
  player: any = {};
  //Le form id
  editPlayerForm: FormGroup;
  id: number;
  playersTab: any = playersT;
  constructor() { }

  ngOnInit() {
    this.id = JSON.parse(localStorage.getItem("playerId"));
    for (let i = 0; i < this.playersTab.length; i++) {
      if (this.playersTab[i].id == this.id) {
        this.player = this.playersTab[i];
        break;

      }
    }
  }

}
