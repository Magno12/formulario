import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalContasPageRoutingModule } from './modal-contas-routing.module';

import { ModalContasPage } from './modal-contas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalContasPageRoutingModule
  ],
  declarations: [ModalContasPage]
})
export class ModalContasPageModule {}
