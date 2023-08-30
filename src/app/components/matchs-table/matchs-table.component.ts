import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matchs-table',
  templateUrl: './matchs-table.component.html',
  styleUrls: ['./matchs-table.component.css']
})
export class MatchsTableComponent implements OnInit {
  matchesTab: any;
  @Input() searchTerm: string = '';
  searchTeam: string = '';
  pageOfItems: Array<any>;


  //AKA matchesT
  // matchesTab: any = T;
  // [
  //   // array of objects
  //   { id: 1, scoreOne: 3, scoreTwo: 0, teamOne: "FCB", teamTwo: "RMD", },
  //   { id: 2, scoreOne: 0, scoreTwo: 2, teamOne: "JUV", teamTwo: "ROM", },
  //   { id: 3, scoreOne: 1, scoreTwo: 1, teamOne: "ATM", teamTwo: "SEV", },
  //   { id: 4, scoreOne: 2, scoreTwo: 3, teamOne: "LIV", teamTwo: "INT", },
  // ];

  // x="assets/images/bg_1" ;
  constructor(private myRouter: Router, private matchService: MatchService) { }

  ngOnInit() {
    //Response : array of objects
    this.reloadData();
  }

  displayMatch(id: number) {
    alert(`Match N° ${id} is displayed`);
    this.myRouter.navigate([`matchInfo/${id}`]);
  }
  editMatch(id: number) {
    //Stocker l id dans LS pour ne pas lafficher dans le path (cest une 2eme methode pour le path statique et lautre 1er methode c'est un path parametrer)
    localStorage.setItem("matchId", JSON.stringify(id));
    // console.log("here msg from BE after delete", data.msg);

    this.myRouter.navigate(["editMatch"]);
    // alert(`Match N° ${id} is edited`);
    // this.myRouter.navigate(["editMatch"]);
  }
  deleteMatch(x: number) {
    this.matchService.deleteMatch(x).subscribe((response) => {
      console.log("here msg from BE after delete", response.msg);
      
      this.reloadData();

    });
  }

  reloadData() {
    this.matchService.getAllMatches().subscribe((response) => {
      console.log("Response from BE: ", response);
      this.matchesTab = response.matches;

    });
  }

  onChangePage(x: Array<any>) {
    // update current page of items
    this.pageOfItems = x;
  }

}