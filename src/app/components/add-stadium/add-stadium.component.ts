import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { stadiumsT } from 'src/app/data/data';

@Component({
  selector: 'app-add-stadium',
  templateUrl: './add-stadium.component.html',
  styleUrls: ['./add-stadium.component.css']
})
export class AddStadiumComponent implements OnInit {
  addStadiumForm: FormGroup;
  stadiumsTab:any;
  stadiums: any[] = [];
  idCounter: number=1;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.stadiumsTab =JSON.parse(localStorage.getItem("stadiums") || "[]");
    this.addStadiumForm = this.formBuilder.group({
      name: ["", [Validators.required]],
      capacity: ["", [Validators.required]],
      country: [""],
    });
  }
  generateId(T:any) {
    // avec une fonction predifinie
  //   return this.idCounter++;
  // avec une fonction normal
let max;
if (T.length == 0){
  max=0;
}else {
  max= T[0].id;
  for (let i = 0; i < T.length; i++) {
if (T[i].id >max) {
      max = T[i].id;
  
}    
  }
}
return max+1;
  }

  addStadium() {
    alert("add stadium clicked");
    let obj = this.addStadiumForm.value;
    console.log("here stadium object", obj); 
    obj.id = this.generateId(this.stadiumsTab);
    this.stadiumsTab.push(obj);
    localStorage.setItem("stadiums", JSON.stringify(this.stadiumsTab));
    // this.addStadiumForm.value.id = this.generateId(this.stadiumsTab);

  //   const name = this.addStadiumForm.get('name').value;
  //   const capacity = this.addStadiumForm.get('capacity').value;
  //   const country = this.addStadiumForm.get('country').value;

  //   const newStadium = {
  //     id: this.generateId(),
  //     name: name,
  //     capacity: capacity,
  //     country: country
  //   };

  //   this.stadiums.push(newStadium);
  //   localStorage.setItem('stadiums', JSON.stringify(this.stadiums));

  // }
}
}

