import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestablacerPassPageRoutingModule } from './restablacer-pass-routing.module';

import { RestablacerPassPage } from './restablacer-pass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestablacerPassPageRoutingModule
  ],
  declarations: [RestablacerPassPage]
})
export class RestablacerPassPageModule {}
