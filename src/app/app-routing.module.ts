import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/Login/login/login.component';
import { ViewsComponent } from './views/views/views.component';


const routes: Routes = [
  {
    path:'', redirectTo:'/login', pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'app',
    component:ViewsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
