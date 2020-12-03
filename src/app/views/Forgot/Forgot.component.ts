import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: 'Forgot.component.html'
})
export class ForgotComponent  implements OnInit {
  RequestResetForm: FormGroup;
  forbiddenEmails: any;
  errorMessage: string;
  successMessage: string;
  submitted = false;

  constructor(
    private userService: UserServiceService,
    private router: Router,
   ) {

  }


  ngOnInit() {

    this.RequestResetForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
    });
  }
  get f() { return this.RequestResetForm.controls;}

  RequestResetUser() {
    console.log()
    this.submitted = true;
    if (this.RequestResetForm.invalid) {
    
      this.userService.requestReset(this.RequestResetForm.value).subscribe(
        (bodyResponse) => { console.log(bodyResponse);

          this.RequestResetForm.reset();
          this.successMessage = bodyResponse.message;
          this.successMessage = "Reset password link send to email sucessfully.";
          setTimeout(() => {
            this.successMessage = null;
            this.router.navigateByUrl('/forgot-password');
          });
        },
        err => {

          if (err.error.message) {
            this.errorMessage = err.error.message;
          }
        }
      );
    } else {
      this.submitted = false;
    }
  }
}