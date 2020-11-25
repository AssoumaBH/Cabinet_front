  
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const BASEURL = 'http://localhost:3000/api/resetpassword';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  public users: any;
  constructor(private http: HttpClient) { 
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
  requestReset(body): Observable<any> {
    return this.http.post(`${BASEURL}/req-reset-password`, body);
  }

  newPassword(body): Observable<any> {
    return this.http.post(`${BASEURL}/new-password`, body);
  }
  ValidPasswordToken(body): Observable<any> {
    return this.http.post(`${BASEURL}/valid-password-token`, body);
  }


}