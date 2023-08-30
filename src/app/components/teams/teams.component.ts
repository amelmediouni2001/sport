import { Component, OnInit } from '@angular/core';
import { teamsT } from 'src/app/data/data';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
teamsTab : any = teamsT;
  constructor() { }

  ngOnInit() {
  }

}
