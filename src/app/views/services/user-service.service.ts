  
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  public users: any;
  constructor() { 
    this.users = JSON.parse(localStorage.getItem("user")) || [];
  }


  public pushtolocalstorgeUser(user: any) {
    this.users.push(user);
    localStorage.setItem('user', JSON.stringify(this.users));
  }

  public getMail(mail:string){

    return this.users.find((user:any)=> user.Email===mail);
  }
  public getPasswod(psw:any){
    return this.users.find((user:any)=> user.Passwrd===psw);
  }

}