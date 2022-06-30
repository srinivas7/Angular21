import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './data.service';

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
  
  constructor(public router: Router) {

  }
  sayHello(name: string) {
  //  this.service.getData().subscribe(res => {
  //   console.log(res);
  //  });
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

  navigateToFirstComp() {
    console.log('from navigateToFirstComp');
    this.router.navigate(['/first']);
  }

  navigateToHelloComp() {
    console.log('from navigateToHelloComp');
    this.router.navigate(['/hello']);
  }
}
