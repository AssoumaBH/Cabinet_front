import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { UserServiceService } from '../services/user-service.service';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit {

  formRegister: FormGroup
  color: string;
  submitted: boolean = false;
 
  constructor(

    public userService: UserServiceService,
    private router: Router
  ) {

    this.formRegister = new FormGroup({
      nom: new FormControl('', [Validators.required]),
      prenom: new FormControl('', [Validators.required]),
      dateNaissance: new FormControl('', [, Validators.required]),
      sexe: new FormControl('', [, Validators.required]),
      adresse: new FormControl('', [, Validators.required]),
      tel: new FormControl('', [, Validators.required]),
      numCNSS: new FormControl('', [, Validators.required]),
      email: new FormControl('', [, Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/)]),
      passwordConfirm: new FormControl('', [Validators.required,RxwebValidators.compare({fieldName:'password' })])

    });
  }

  ngOnInit() {
  }

  signUp() {
    this.submitted = true;
    if (this.formRegister.invalid) {
      return;
    }
    
    this.userService.register(this.formRegister.value).subscribe((response) => {
      console.log(response);
      this.router.navigateByUrl('/login');
    }, (error) => {
      console.log(error);
    });

  }
}
