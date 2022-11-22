import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SegundatelaPage } from './segundatela.page';

const routes: Routes = [
  {
    path: '',
    component: SegundatelaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SegundatelaPageRoutingModule {}
