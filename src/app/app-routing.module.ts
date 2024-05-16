import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListausuarioComponent } from './views/Usuario/listausuario.component';

const routes: Routes = [

  /*{
    path:'listar',
    component:ListausuarioComponent
  },*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
