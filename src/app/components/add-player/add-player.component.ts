import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
player : any ={};
addPlayerForm: FormGroup;
tId ;
  // pService: any;
  constructor(private formBuilder: FormBuilder, private pService:PlayerService, private teamService: TeamService,
    private router: Router) { }

  ngOnInit() {
    this.addPlayerForm = this.formBuilder.group({
      name:[""],
      age:[""],
      position:[""]
    })
  }
  addPlayer(){
    alert("add player clicked");
    console.log("here object", this.addPlayerForm.value);
    this.addPlayerForm.value.teamId = this.tId;
    console.log("player object", this.addPlayerForm.value);

    this.pService.addPlayer(this.addPlayerForm.value).subscribe((result) => {
      console.log("here response from BE", result.isAdded);
      this.router.navigate(["admin"]);
      
    } );
  }
  getTeamId(evt){
    this.tId = evt.target.value;
  }
}
