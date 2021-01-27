  
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RDVServiceService {
  baseURL:String = environment.baseURL;
  constructor(private http: HttpClient) { 
  }
  public reservation(reservation: any): Observable<any> {
    return this.http.post(this.baseURL + 'reservation', reservation)
  }


  
 


}