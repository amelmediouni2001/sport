import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { T } from 'src/app/data/data';
import { MatchService } from 'src/app/services/match.service';


@Component({
  selector: 'app-match-info',
  templateUrl: './match-info.component.html',
  styleUrls: ['./match-info.component.css']
})
export class MatchInfoComponent implements OnInit {
  matches: any ;
  findedMatch: any;
  id: any;
  constructor(private activatedRoute: ActivatedRoute, private matchService: MatchService) { }

  ngOnInit() {
    //Get id from path
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.matchService.getMatchById(this.id).subscribe( 
      (data)=> {
        console.log("here object from BE", data);
        this.findedMatch = data.match;
      }
    )



    // console.log("id is here : ", this.id  );
    // Recherche dans T par id
    // for (let i = 0; i < this.matches.length; i++) {
    //   // not tru 
    //   // this.findedMatch = this.matches.find((match: { id: any; }) => match.id === this.id);
    //   if (this.matches[i].id == this.id) {
    //     this.findedMatch = this.matches[i];
    //     break;
    //   }

    // }
  }

}    
