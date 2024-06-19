import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
constructor(public login:LoginService,public router:Router){}
  username:string=this.login.getUser()!=null?this.login.getUser().username:"";

 logout(){
  console.log("Logout clicked");
  this.login.logout();
  this.router.navigate([""]);
 }

}
