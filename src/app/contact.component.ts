import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  submited = false;
  onSubmit(form, event) {
  	console.log(form);
   	this.submited = true;
    
  }


  
}
