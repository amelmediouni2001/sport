import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
user:any ={};
  constructor(private router: Router) { }

  ngOnInit() {}
  // Retrieve the JWT token from session storage
  isLoggedIn(){
    const jwt = sessionStorage.getItem('token');
    if (jwt) {
      this.user = this.decodeToken(jwt);
    }
    // !! not not jwt : heya initialement null, kif nzidou !! twali boolean: false
    return !!jwt;
    }
    decodeToken(token: string) {
      return jwt_decode(token);
    }


// log out 
logout(){
  sessionStorage.removeItem('token');
  this.router.navigate(["signin"]);


  }
  


}
