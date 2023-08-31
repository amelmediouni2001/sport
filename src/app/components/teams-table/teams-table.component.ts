import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { teamsT } from 'src/app/data/data';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-teams-table',
  templateUrl: './teams-table.component.html',
  styleUrls: ['./teams-table.component.css']
})
export class TeamsTableComponent implements OnInit {
  teamsTab:any ;
  // [
  //   {id : 1, name : "FC Barcelona" , stadium : "Camp Nou", owner:"Club members"},
  //   {id : 2, name : "Manchester United FC" , stadium : "Old Trafford", owner:"Manchester United plc"},
  //   {id : 3, name : "Juventus FC" , stadium : "Allianz Stadium", owner:"Agnelli family"},

  // ];
  constructor(private myRouter:Router, private teamService: TeamService) { }

  ngOnInit() {
    this.teamService.getAllTeams().subscribe(
      (response) => {
        this.teamsTab = response.teams; 
      }
    )
  }
  displayTeam(id: number) {
    alert(`Team N° ${id} is displayed`);
    this.myRouter.navigate([`teamInfo/${id}`]);
  }
  editTeam(id: number) {
    alert(`Team N° ${id} is edited`);
    localStorage.setItem("teamId",JSON.stringify(id));
    this.myRouter.navigate(["editTeam"]);

  }

  deleteTeam(id: number) {
    alert(`Team N° ${id} is deleted`);
  }
}
