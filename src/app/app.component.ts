import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample';
  text = 'I am from app componenet text variable'

  name = 'testasdfasdfa';
  @ViewChild('firstcomp') fistCompnent:any;
  
  sayHello(name: string) {
    console.log('hello....', name);
    debugger;
    console.log('fist cmp is..', this.fistCompnent);
  }

  clearName() {
    console.log('clearName method calling!!');
    this.name = '';
  }

  keyUpMethod() {
    console.log('from blur event..')
  }

  modelChangeFunction() {
    console.log('from modelChangeFunction event..');
  }

  fromFirstComp() {
    console.log('custom event from first comp');
  }
}
