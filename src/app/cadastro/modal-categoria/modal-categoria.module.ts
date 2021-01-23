import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalCategoriaPageRoutingModule } from './modal-categoria-routing.module';

import { ModalCategoriaPage } from './modal-categoria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalCategoriaPageRoutingModule
  ],
  declarations: [ModalCategoriaPage]
})
export class ModalCategoriaPageModule {}
