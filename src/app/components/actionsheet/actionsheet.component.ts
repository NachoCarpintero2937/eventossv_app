import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-actionsheet',
  templateUrl: './actionsheet.component.html',
  styleUrls: ['./actionsheet.component.scss'],
})
export class ActionsheetComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() { }

  close() {
    return this.modalCtrl.dismiss();
  }

}
