import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-gift-event',
  templateUrl: './gift-event.component.html',
  styleUrls: ['./gift-event.component.scss'],
})
export class GiftEventComponent implements OnInit {

  constructor(private _modalCtrl: ModalController) { }

  ngOnInit() { }



  close() {
    this._modalCtrl.dismiss();
  }
}
