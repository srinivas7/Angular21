import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { FirstComponent } from './first/first.component';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
import { Test2Component } from './test2/test2.component';


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    FirstComponent,
    ChildComponent,
    Test2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
