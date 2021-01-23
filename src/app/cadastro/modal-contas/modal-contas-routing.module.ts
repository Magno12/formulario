import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalContasPage } from './modal-contas.page';

const routes: Routes = [
  {
    path: '',
    component: ModalContasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalContasPageRoutingModule {}
