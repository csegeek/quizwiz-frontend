import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../login.service';
import { inject } from '@angular/core';

export const normalGuard: CanActivateFn = (route, state) => {
 
  if(inject(LoginService).isLoggedIn()==true && inject(LoginService).getUserRole()=='NORMAL'){
    return true;
   }
   inject(Router).navigate(['/login'])
   return false;
};
