import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
searchForm:FormGroup;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.searchForm=this.formBuilder.group({
      city:[""], country:[""],
    })
  }
search(){
  localStorage.setItem("searchObj",JSON.stringify(this.searchForm.value));
  console.log("test");
}
}
