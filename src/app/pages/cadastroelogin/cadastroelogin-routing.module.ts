import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroeloginPage } from './cadastroelogin.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroeloginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroeloginPageRoutingModule {}
