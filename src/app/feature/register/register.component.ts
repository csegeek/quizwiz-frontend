import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserserviceService } from 'src/app/services/userservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private userService: UserserviceService,private snackBar:MatSnackBar) { }
  user = {
    userName: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNo: ''
  };

  submitSignupForm() {
    if(this.user.userName==''||this.user.userName==null){
      this.snackBar.open('UserName is Required !!', 'Ok', {
        duration: 3000,
        verticalPosition:'top'
      });
      return;
    }
    
    this.userService.addUser(this.user).subscribe(
      (data) => {
        console.log(data); 
        // *****SweetAlert*****
      Swal.fire({
        icon: 'success',
        title: 'Registration Successful',
        text: 'You have successfully registered!',
        confirmButtonText: 'Ok'
      })
      },
      (error) => {
        console.log(error);
        alert('something went wrong');
      }

    );
  }



}
