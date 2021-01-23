import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular'
import { ModalCategoriaPage } from './../cadastro/modal-categoria/modal-categoria.page';
import { ModalStatusPage } from './../cadastro/modal-status/modal-status.page';
import { ModalContasPage } from './../cadastro/modal-contas/modal-contas.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {



  constructor(private modalControle: ModalController) { }

  /*  async presentModal() {
      const modal = await this.modalController.create({
        component: ModalPage,
        cssClass: 'my-custom-class'
      });
      return await modal.present();
    }
  } */

  async AddCategoria() {
    const modal = await this.modalControle.create(
      {
        component: ModalCategoriaPage,
      });
    return await modal.present();
  }

  async AddStatus() {
    const modalStatus = await this.modalControle.create(
      {
        component: ModalStatusPage
      });
    return await modalStatus.present();
  }

  async AddContas() {
    const modalContas = await this.modalControle.create(
      {
        component: ModalContasPage
      });
    return modalContas.present();
  }

}
