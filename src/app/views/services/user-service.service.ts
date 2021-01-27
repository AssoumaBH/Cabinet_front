  
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  baseURL:String = environment.baseURL;
  constructor(private http: HttpClient) { 
  }

  public register(user: any): Observable<any> {
    return this.http.post(this.baseURL + 'register', user)
  }

  public login(user): Observable<any> {
    return this.http.post(this.baseURL + 'login', user)
   
  }

 
  requestReset(email:any): Observable<any> {
   // return this.http.post(`${this.baseURL}req-reset-password`, body);
    return this.http.post(this.baseURL + 'forgot-password',  email);
  }

  newPassword(bodyData): Observable<any> {
   // return this.http.post(`${this.baseURL}new-password`, body);
   return this.http.post(this.baseURL + 'rest-password',  bodyData);
  }
  ValidPasswordToken(body): Observable<any> {
    return this.http.post(`${this.baseURL}valid-password-token`, body);
  }


}