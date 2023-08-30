import { ImcService } from '../../services/imc.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-calcul-imc',
  templateUrl: './calcul-imc.component.html',
  styleUrls: ['./calcul-imc.component.css']
})
export class CalculImcComponent implements OnInit {
  calculIMCform : FormGroup;
  imc : any ={} ;
  resMsg: string = "";
  imcService: any;
  constructor(private formBuilder : FormBuilder, imcService : ImcService , private http: HttpClient) { }

  ngOnInit() {
    this.calculIMCform = this.formBuilder.group({
      name: ["", [Validators.required,]],
      taille: ["", [Validators.required,]],
      poid: ["", [Validators.required,]],
    })
  }
  calcul() {
    alert("calcul imc clicked");
    console.log("here obj", this.calculIMCform.value);
    this.imcService.calculIMC(this.calculIMCform.value).subscribe(
      (data)=> {
        console.log("here msg from BE", data.msg);
        this.resMsg = data.msg;
        

      }
    )
    
}
}
