import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
team : any = {};
addTeamForm: FormGroup;
  constructor(private tService:TeamService, private router: Router) { }

  ngOnInit() {
  }

  addTeam(){
    alert("add Team clicked");
    console.log("here object", this.team);
    this.tService.addTeam(this.team).subscribe((data) => {
      console.log("here response from BE", data.msg);
      this.router.navigate(["admin"]);
      
    } );
  }
}
