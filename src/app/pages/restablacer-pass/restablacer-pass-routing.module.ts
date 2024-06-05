import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestablacerPassPage } from './restablacer-pass.page';

const routes: Routes = [
  {
    path: '',
    component: RestablacerPassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestablacerPassPageRoutingModule {}
