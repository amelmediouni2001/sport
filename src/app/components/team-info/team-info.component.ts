import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { teamsT } from 'src/app/data/data';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css']
})
export class TeamInfoComponent implements OnInit {
  teams: any = teamsT;
  id:any;
findedTeams:any;
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
for (let i = 0; i < this.teams.length; i++) {
if (this.teams[i].id ==this.id) {
this.findedTeams = this.teams[i];
break;  
}  
}
  }

}
