import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {

  constructor
    (
      private _fb: FormBuilder,
      private modalCtrl: ModalController) { }
  events: any;
  form = this._fb.group({
    name: [null],
    event_id: [null],
    status: [null],
  });
  ngOnInit() {

  }

  confirm() {
    var obj: any = {};
    if (this.form.get('name')?.value)
      obj['name'] = this.form.get('name')?.value!
    if (this.form.get('event_id')?.value)
      obj['event_id'] = this.form.get('event_id')?.value!
    if (this.form.get('status')?.value)
      obj['status'] = this.form.get('status')?.value!

    this.modalCtrl.dismiss(obj);
  }

  cancel() {
    this.modalCtrl.dismiss();
  }

}
