import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private mat:MatSnackBar,private loginService:LoginService,private router:Router){}
  loginData={
    userName:'',
    password:''
  };

formSubmit(){
if(this.loginData.userName.trim()==''|| this.loginData.userName==null){
  this.mat.open('UserName is Required !!', '', {
    duration: 3000,
    verticalPosition:'top'
  });
  return;
}
if(this.loginData.password.trim()==''|| this.loginData.password==null){
  this.mat.open('Password is Required !!', '', {
    duration: 3000,
    verticalPosition:'top'
  });
  return;
}

//request server to generate token
  this.loginService.generateToken(this.loginData).
    subscribe(
      (data:any) => {
        console.log(data.token)
        this.loginService.saveToken(data.token);
        this.loginService.getCurrentUser().subscribe(
          (user:any)=>{
            this.loginService.setUser(user);
            //redirect.... ADMIN:admin-dashboard 
            if(this.loginService.getUserRole()=="ADMIN"){
              this.router.navigate(['/admin-dashboard']);
            } 
            //redirect.... NORMAl :user-dashboard
            else if(this.loginService.getUserRole()=="NORMAL"){
              this.router.navigate(['/user-dashboard']);
            }
            else{
              console.log("KUCH TO GADBAD HAI...............!!");
            }
            
            
          },
          (error)=>{
            console.log(error);
          }
        )
      },
      error => {
        if(error.status==401){
          swal.fire({
            icon: 'error',
            title: 'Invalid Credentials',
            text: 'Username or Password Does not match !!',
          })
        }
        console.log("error occured")
        console.log(error)
      }
   
    )  

}

}
