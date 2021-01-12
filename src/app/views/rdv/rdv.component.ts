import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { UserServiceService } from '../services/user-service.service';

@Component({
  templateUrl: 'rdv.component.html'
})
export class rdvComponent implements OnInit {
  formRdv: FormGroup
  submitted: boolean = false;
  router: any;
 
  constructor(

    public userService: UserServiceService,
    
  ) {

    this.formRdv = new FormGroup({
      name: new FormControl('', [Validators.required]),
      nameDoct: new FormControl('', [Validators.required]),
      brith: new FormControl('', [, Validators.required]),
      time: new FormControl('', [, Validators.required]),
      description: new FormControl('', [, Validators.required]),
    });
  }
  ngOnInit() {
  }
  registerRVD() {
    this.submitted = true;
    if (this.formRdv.invalid) {
      return;
    }
    this.userService.register(this.formRdv.value).subscribe((response) => {
      console.log(response);
      this.router.navigateByUrl('/login');
    }, (error) => {
      console.log(error);
    });
  }
}