import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('I did many changes');
    console.log('I did many changes');
    console.log('I did many changes');
    console.log('I did many changes');
    console.log('I did many changes');
  }

  method1() {
    console.log('asdfasdfa asdf asd)f asd');
  }

}
