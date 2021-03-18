import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './component/login/login.component';
import {AdminComponent} from './component/admin/admin.component';
import {ResgisterComponent} from './component/resgister/resgister.component';
import {LoginHomeComponent} from './component/login-home/login-home.component';


const routes: Routes = [{
  path: 'login' ,
  component: LoginComponent
},
  {
    path: 'admin' ,
    component: AdminComponent
  },
  {
    path: 'register',
    component: ResgisterComponent
  },
  {
    path: 'loginHome',
    component: LoginHomeComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
