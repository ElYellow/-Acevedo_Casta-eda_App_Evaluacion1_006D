import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivarwindowsPage } from './activarwindows.page';

const routes: Routes = [
  {
    path: '',
    component: ActivarwindowsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivarwindowsPageRoutingModule {}
