import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
@Input() X:any;
myPath:any;
  constructor(private router:Router, private mService: MatchService) { }

  ngOnInit() {
    this.myPath = this.router.url;
    console.log("here my path", this.myPath);
      
  }
scoreColor(sc1: number, sc2 : number) {
   if (sc1>sc2) {
    return "green" ;    
   } 
   else if (sc1 < sc2) {
    return "red" ;  
   } 
   else {
    return "blue" ;
   }
}

}
