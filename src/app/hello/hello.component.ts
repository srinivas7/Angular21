import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  
  @Input('textDataaa') text: any;

  constructor() { }
  ngOnInit(): void {
    console.log('value from app component is..', this.text);
  }

  test() {

  }

}



