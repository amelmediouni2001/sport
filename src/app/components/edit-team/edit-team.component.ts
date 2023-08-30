import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { teamsT } from 'src/app/data/data';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent implements OnInit {
  //TDF
  //object
  team: any = {};
  //cest le form id
  editTeamForm: FormGroup;
  id: number;
  teamsTable: any = teamsT;
  constructor() { }

  ngOnInit() {
    this.id = JSON.parse(localStorage.getItem("teamId"));
    for (let i = 0; i < this.teamsTable.length; i++) {
      if (this.teamsTable[i].id == this.id) {
        this.team = this.teamsTable[i];
        break;
      }
    }
  }
  //la methode qui vas etre appeler
  editTeam() {
    alert("edit team clicked");
    // console.log

  }
}
