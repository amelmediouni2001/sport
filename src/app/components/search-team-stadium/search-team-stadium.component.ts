import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { stadiumsTab, teamsTab } from 'src/app/data/data';

@Component({
  selector: 'app-search-team-stadium',
  templateUrl: './search-team-stadium.component.html',
  styleUrls: ['./search-team-stadium.component.css']
})
export class SearchTeamStadiumComponent implements OnInit {
  searchTeamStadiumForm: FormGroup;
  teamsInfo: any[] = [];
  // teamsT: any = teamsTab;
  // stdiumsT: any = stadiumsTab;
  teamsT: any= teamsTab;
  stadiumsT: any= stadiumsTab;
  errorMsg: string;
   findedStadiumId:any;
   findedTeam:any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.searchTeamStadiumForm = this.formBuilder.group({
      stadiumName: ["", [Validators.required, Validators.minLength(3)]],
    })
  }



search() {
alert("search 1 is clicked");
  let stadiumName = this.searchTeamStadiumForm.value.stadiumName; 
  console.log("test 1");
  console.log("Here stadium name : ", stadiumName);
  console.log("test 2");  
  
  // search stadium by name and return stadium ID for (let i = 0; i < this.stadiumsT.length; i++) {
    for (let i = 0; i < this.stadiumsT.length; i++) {
      if (this.stadiumsT[i].name == stadiumName) { 
        this.findedStadiumId = this.stadiumsT[i].id;
        break;
  
      }
    }
    console.log("test 3");  

  
  if (this.findedStadiumId) {
    this.errorMsg="" ;
  // search team by StadiumId
  console.log("test 4");  

  for (let i = 0; i < this.teamsT.length; i++) { 
    if (this.teamsT[i].stadiumId == this.findedStadiumId) {
        this.findedTeam = this.teamsT[i];
        break;
  
  }
  }
  console.log("test 5");  

  } else {
  
  this.errorMsg = "Team Not Found";
  
  }
  console.log("test 6");  

  }


  }
  