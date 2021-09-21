import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivarwindowsPageRoutingModule } from './activarwindows-routing.module';

import { ActivarwindowsPage } from './activarwindows.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivarwindowsPageRoutingModule
  ],
  declarations: [ActivarwindowsPage]
})
export class ActivarwindowsPageModule {}
