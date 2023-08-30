import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { stadiumsT } from 'src/app/data/data';

@Component({
  selector: 'app-stadium-info',
  templateUrl: './stadium-info.component.html',
  styleUrls: ['./stadium-info.component.css']
})
export class StadiumInfoComponent implements OnInit {
  // stadiums: any = stadiumsT;
  stadiums: any = JSON.parse(localStorage.getItem("stadiums")) || [];

  id: any;
  foundedStadium: any;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    for (let i = 0; i < this.stadiums.length; i++) {
      if (this.stadiums[i].id == this.id) {
        this.foundedStadium = this.stadiums[i];
        break;
      }
    }
  }
}
