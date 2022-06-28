import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  name = 'fhg';
  firstCompMsg = 'Fist Component';
  @Output() customEve = new EventEmitter();

  constructor() { 
    this.name = 'srinivas';
    console.log('from constructor', this.name);
  }

  ngOnInit(): void {
    console.log('from ngoninit', this.name);
    
  }

  firstCompClick() {
    this.customEve.emit(this.firstCompMsg);
  }
}
