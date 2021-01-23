import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalStatusPageRoutingModule } from './modal-status-routing.module';

import { ModalStatusPage } from './modal-status.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalStatusPageRoutingModule
  ],
  declarations: [ModalStatusPage]
})
export class ModalStatusPageModule {}
