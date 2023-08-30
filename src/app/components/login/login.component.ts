import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: any = {};
  errorMsg : any;

  constructor(private userService: UserService, private router : Router) { }

  login() {
    this.userService.login(this.user).subscribe(
      (data) => {
        console.log(" here data after login ",data);
        if (data.result) {

      sessionStorage.setItem('token', data.result);
      let decodedToken:any = this.decodeToken(data.result);
      console.log(" here decodedToken ",decodedToken);

      decodedToken.role == "admin" ?
        this.router.navigate(["admin"]):
        this.router.navigate([""]);
          
        }else {
          this.errorMsg = "please check your email/pwd";
        }
      }
      // (error) => {
      //   console.log(error);
      // }
    );
  }
  decodeToken(token: string) {
    return jwt_decode(token);
    }
    }


