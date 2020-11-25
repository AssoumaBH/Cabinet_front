import { Component, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  templateUrl: 'tabs.component.html'
})
export class TabsComponent {
  @ViewChild('myModal') public myModal: ModalDirective;
  constructor() { }

}
