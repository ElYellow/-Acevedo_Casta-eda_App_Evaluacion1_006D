import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LimpiarpcPage } from './limpiarpc.page';

const routes: Routes = [
  {
    path: '',
    component: LimpiarpcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LimpiarpcPageRoutingModule {}
