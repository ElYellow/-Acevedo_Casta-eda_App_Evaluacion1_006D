import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LimpiarpcPageRoutingModule } from './limpiarpc-routing.module';

import { LimpiarpcPage } from './limpiarpc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LimpiarpcPageRoutingModule
  ],
  declarations: [LimpiarpcPage]
})
export class LimpiarpcPageModule {}
