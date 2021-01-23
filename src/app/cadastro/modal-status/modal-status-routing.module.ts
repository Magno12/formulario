import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalStatusPage } from './modal-status.page';

const routes: Routes = [
  {
    path: '',
    component: ModalStatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalStatusPageRoutingModule {}
