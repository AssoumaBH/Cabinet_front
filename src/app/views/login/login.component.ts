import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { UserServiceService } from '../services/user-service.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup
  submitted = false;
  router: any;

  constructor(
    public userService: UserServiceService,
    /*public toasterService: ToasterService,
    public validationService: ValidationService,
    public authentificationService: AuthenticationService,
    public appSidebarService: AppSidebarService*/
  ) {}
  


   ngOnInit(){
    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.minLength(7), Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(10), Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/)])
    })

  }

  onSubmit() {

    this.submitted = true;

    // stop here if form is invalid
    if (this.formLogin.invalid) {
        return;
  }
  // Send data to REST API
  this.userService.login(this.formLogin.value).subscribe(
    (bodyResponse) => {this.loginSuccess(bodyResponse); },
      (error) => { this.loginError(error); });
}
loginSuccess(bodyResponse) {
  const responseData = bodyResponse.data;
  // Save data in localStorage
 // this.userService.setRole(responseData.role);
 // this.userService.setAvatar(responseData.avatar);
 // this.userService.setTokenType(responseData.token_type);
  // save authenticationObject in localStorage
  const token = responseData.access_token;
  const expiredTokenDate = responseData.expires_at;
  const authenticationObject = {
    accessToken: token,
    expiredTokenDate: expiredTokenDate,
   email: this.formLogin.get('email').value,
   password: this.formLogin.get('password').value
  };
  localStorage.setItem('authenticationObject', JSON.stringify(authenticationObject));
  // Show toast message
// this.toasterService.pop('success', 'Connecté avec succès!', bodyResponse.message);
  // reload nav item
 // this.appSidebarService.reloadNavItem();
  // redirection  to dashboard
  this.router.navigate(['/dashboard']);
}

private loginError(error) {
 /* if (error.status === 401) {
    this.toasterService.pop('error', 'Veuillez vérifier votre e-mail ou votre mot de passe!', error.error.message);
  } else {
    this.validationService.showValidationsMessagesInToast(error);
  }*/
}

}