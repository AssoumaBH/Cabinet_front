import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { UserServiceService } from '../services/user-service.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup
  constructor(
    public userService: UserServiceService

  ) {
    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.minLength(7), Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(10), Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/)])
    })


  }

  ngOnInit() {
  }

  authentification() {
    var tab = JSON.parse(localStorage.getItem("user")) || [];
    var psw = this.formLogin.controls['password'].value;
    var mail = this.formLogin.controls['email'].value;
    console.log('passs', psw);
    console.log('mail', mail);



    for (let i = 0; i < tab.length; i++) {
      if (tab[i].Email == mail && tab[i].Passwrd == psw) {

        if (tab[i].food === 'user') {
          localStorage.setItem('connectedUser', JSON.stringify(tab[i]));
          console.log('yes ath valid userr')
          alert('user')
        }
        else {
          localStorage.setItem('connectedUser', JSON.stringify(tab[i]));
          console.log('yes ath valid adminn')
          alert('admin')
        }
      }
      else {
        console.log('errrrreur')
      }
    }


  }
}