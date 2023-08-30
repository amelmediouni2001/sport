import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { T } from 'src/app/data/data';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})
export class EditMatchComponent implements OnInit {
  //TDF
  //object
  match: any = {};
  //cest le form id
  editMatchForm: FormGroup;
  id: number;
  matchesTab: any;
  constructor(private matchService:MatchService, private router:Router) { }

  ngOnInit() {
    this.id = JSON.parse(localStorage.getItem("matchId"));
    this.matchService.getMatchById(this.id).subscribe ((data)=> {
      this.match = data.match;
    });

    // for (let i = 0; i < this.matchesTab.length; i++) {
    //   if (this.matchesTab[i].id == this.id) {
    //     this.match = this.matchesTab[i];
    //     break;
    //   }
    // }
  }

  validate(){
    this.matchService.updatMatch(this.match).subscribe((result)=> {
      console.log("here result after update", result);
      this.router.navigate(["admin"]);
      
    })
  }


  //la methode qui vas etre appeler
  editMatch() {
    alert("edit match clicked");
    // console.log("here object", this.match);

  }
}
