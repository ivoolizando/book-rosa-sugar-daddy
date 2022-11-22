import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SegundatelaPageRoutingModule } from './segundatela-routing.module';

import { SegundatelaPage } from './segundatela.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SegundatelaPageRoutingModule
  ],
  declarations: [SegundatelaPage]
})
export class SegundatelaPageModule {}
