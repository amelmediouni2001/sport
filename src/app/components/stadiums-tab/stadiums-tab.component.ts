import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { stadiumsT } from 'src/app/data/data';

@Component({
  selector: 'app-stadiums-tab',
  templateUrl: './stadiums-tab.component.html',
  styleUrls: ['./stadiums-tab.component.css']
})
export class StadiumsTabComponent implements OnInit {
  //to get data from data stadiumsT
  // stadiumsTab : any = stadiumsT ;
    //to get data from LocalStorage
  stadiumsTab : any ;

  // stadiumsTab: any = JSON.parse (localStorage.getItem("stadiums")) || [];

  constructor(private myRouter: Router) { }


  ngOnInit() {
    this.stadiumsTab=JSON.parse(localStorage.getItem("stadiums") || "[]") ;
  }


  displayStadium(id: number) {
    alert(`Stadium N° ${id} is displayed`);
    this.myRouter.navigate([`stadiumInfo/${id}`]);

    // editStadium(id: number) {
    //   alert(`Stadium N° ${id} is edited`);
    //   localStorage.setItem("stadiumId",JSON.stringify(id));
    //   this.myRouter.navigate(["editStadium"]);
    // }
  
  }

  deleteStadium(id) {
    alert("Delete is clicked");
    // this.stadiumsTab.splice(index, 1);
    // localStorage.setItem("stadiums", JSON.stringify(this.stadiumsTab));
    for (let i = 0; i < this.stadiumsTab.length; i++) {
      if (this.stadiumsTab[i].id == id) {
        this.stadiumsTab.splice(i,1);
        break;
        
      }
      
    }
    localStorage.setItem("stadiums", JSON.stringify(this.stadiumsTab));
  }
  


  }
