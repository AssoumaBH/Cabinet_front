import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit {

  formRegister: FormGroup
  public color: string;


  constructor(

    public userService: UserServiceService, private router : Router
  ) {

    this.formRegister = new FormGroup({
      nom: new FormControl('', [ Validators.required]),
      prenom: new FormControl('', [ Validators.required]),
      dateNaissance: new FormControl('', [, Validators.required]),
      sexe: new FormControl('', [, Validators.required]),
      adresse: new FormControl('', [, Validators.required]),
      tel: new FormControl('', [, Validators.required]),
      NumCNSS: new FormControl('', [, Validators.required]),
      email: new FormControl('', [, Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required,  Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/)])
    })

  }

  ngOnInit() {

  }
  signUp() {

    if (this.formRegister.valid) {
      this.userService.pushtolocalstorgeUser(this.formRegister.value)
      console.log(this.formRegister.value);
      console.log('form valid Yes');
      // window.location.href = '/login';
      this.router.navigateByUrl('/login')
    }
    else {
      console.log('form In valid Noo');
      console.log(this.formRegister);
    }
  }


  get nom() { return this.formRegister.get('nom'); }
  get prenom() { return this.formRegister.get('prenom'); }
  get dateNaissance() { return this.formRegister.get('dateNaissance'); }
  get sexe() { return this.formRegister.get('sexe'); }
  get adresse() { return this.formRegister.get('adresse'); }
  get tel() { return this.formRegister.get('tel'); }
  get NumCNSS() { return this.formRegister.get('NumCNSS'); }
  get email() { return this.formRegister.get('email'); }
  get password() { return this.formRegister.get('password'); }



  getvalid() {
    this.color = 'transparent';
    if (this.formRegister.controls['nom'].valid) {
      this.color = 'green';
    }

    if (this.formRegister.controls['nom'].invalid) {
      this.color = 'red';
    }
  }
  getvalidL() {
    this.color = 'transparent';
    if (this.formRegister.controls['prenom'].valid) {
      this.color = 'green';
    }

    if (this.formRegister.controls['prenom'].invalid) {
      this.color = 'red';
    }
  }
}
