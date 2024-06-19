import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
//generate token
public generateToken(loginData:any){
return this.http.post(`${baseUrl}/auth/login`,loginData);
}

public saveToken(token:string){
  localStorage.setItem('token',token);
  return true;
}

public isLoggedIn(){
  let tokenStr=localStorage.getItem('token');
  if(tokenStr==undefined|| tokenStr==null || tokenStr==''){
    return false;
  }
  else{
    return true;
  }
}

// logout : remove token from 
public logout(){
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  return true;
}

public getToken(){
  return localStorage.getItem('token');
}

public setUser(user:any){
  localStorage.setItem('user',JSON.stringify(user));
}

public getUser(){
  let userStr=localStorage.getItem("user");
  if(userStr!=null){
    return JSON.parse(userStr);
  }
  else{
    this.logout();
    return null;
  }
}

public getUserRole(){
  let user=this.getUser()
  return user.authorities[0].authority;
}

public getCurrentUser(){
  return this.http.get(`${baseUrl}/auth/current-user`);
}



}
