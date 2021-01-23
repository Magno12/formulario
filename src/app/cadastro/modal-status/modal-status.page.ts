import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-status',
  templateUrl: './modal-status.page.html',
  styleUrls: ['./modal-status.page.scss'],
})
export class ModalStatusPage implements OnInit {

  constructor(private modalController :ModalController) { }

  ngOnInit() {
  }
  closeModal(){
    this.modalController.dismiss();
  }

}
