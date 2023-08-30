import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-search-player',
  templateUrl: './search-player.component.html',
  styleUrls: ['./search-player.component.css']
})
export class SearchPlayerComponent implements OnInit {
  searchPlayerForm: FormGroup;
  players: any;
  constructor(private formBuilder: FormBuilder, private pService: PlayerService) { }

  ngOnInit() {
    this.searchPlayerForm = this.formBuilder.group({
      name: ["", [Validators.required,]],
      age: ["", [Validators.required,]]
    })
  }



  search() { 
    this.pService.searchPlayer(this.searchPlayerForm.value).subscribe((result) => {
      console.log("here result be", result.players);
      this.players = result.players;

    })
  }




}





