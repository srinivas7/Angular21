import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { HelloComponent } from './hello/hello.component';

const routes: Routes = [
  {path: 'first', component: FirstComponent},
  {path: 'hello', component: HelloComponent},
  {path: 'test', loadChildren: () => import('./test/test.module').then(m => m.TestModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
