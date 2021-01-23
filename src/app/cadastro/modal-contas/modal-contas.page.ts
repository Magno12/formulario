import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modal-contas',
  templateUrl: './modal-contas.page.html',
  styleUrls: ['./modal-contas.page.scss'],
})
export class ModalContasPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalController.dismiss()
  }

}
