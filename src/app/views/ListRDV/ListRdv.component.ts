import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { UserServiceService } from '../services/user-service.service';

@Component({
  templateUrl: 'ListRdv.component.html'
})
export class ListRdvComponet implements OnInit {
 
 
  constructor(

    public userService: UserServiceService,
    
  ) {

  }
  ngOnInit() {
  }
  
}