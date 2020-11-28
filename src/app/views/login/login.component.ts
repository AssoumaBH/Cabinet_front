import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { UserServiceService } from '../services/user-service.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup
  submitted = true;
  router: any;

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
    
    this.submitted = true;
    if (this.formLogin.invalid) {
      return;
    }
    this.userService.register(this.formLogin.value).subscribe((response) => {
      console.log(response);
      this.router.navigateByUrl('/dashboard');
    }, (error) => {
      console.log(error);
    });
  }
}