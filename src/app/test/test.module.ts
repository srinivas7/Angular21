import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XyzComponent } from './xyz/xyz.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: 'xyz', component: XyzComponent},
];


@NgModule({
  declarations: [
    XyzComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TestModule { }
