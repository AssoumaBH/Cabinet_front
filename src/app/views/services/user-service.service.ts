  
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  baseURL:String = environment.baseURL;
  public users: any;
  constructor(private http: HttpClient) { 
    this.users = JSON.parse(localStorage.getItem("user")) || [];
  }


  public register(user: any): Observable<any> {
    return this.http.post(this.baseURL + 'register', user)
  }

  public login(user): Observable<any> {
    return this.http.post(this.baseURL + 'login', user)
  }

  public getMail(mail:string){
    return this.users.find((user:any)=> user.Email===mail);
  }
  
  public getPasswod(psw:any){
    return this.users.find((user:any)=> user.Passwrd===psw);
  }
  requestReset(body): Observable<any> {
    return this.http.post(`${this.baseURL}req-reset-password`, body);
  }

  newPassword(body): Observable<any> {
    return this.http.post(`${this.baseURL}new-password`, body);
  }
  ValidPasswordToken(body): Observable<any> {
    return this.http.post(`${this.baseURL}valid-password-token`, body);
  }


}