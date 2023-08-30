import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
actualDate:Date = new Date();
title:string="dashboard admin" ; 
searchByTeam: string = '';
filteredData = [];
  constructor() { }

  ngOnInit() {
  }
  // search() {

  //   for (const item of this.data) {
  //     if (item.team.toLowerCase().includes(this.searchByTeam.toLowerCase())) {
  //       this.filteredData.push(item);
  //     }
  //   }
  // }
   
}


 