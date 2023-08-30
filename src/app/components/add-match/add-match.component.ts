import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
match : any ={} ;
addMatchForm: FormGroup;
  constructor(private mService:MatchService, private router: Router) { }

  ngOnInit() {}
addMatch(){
  alert("add match clicked");
  console.log("here object", this.match);
  this.mService.addMatch(this.match).subscribe((data) => {
    console.log("here response from BE", data.msg);
    this.router.navigate(["admin"]);
    
  } );
}
}
