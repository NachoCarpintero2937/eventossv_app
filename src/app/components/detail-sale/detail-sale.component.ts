import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detail-sale',
  templateUrl: './detail-sale.component.html',
  styleUrls: ['./detail-sale.component.scss'],
})
export class DetailSaleComponent implements OnInit {

  constructor(
    private _fb: FormBuilder,
    private _modalCtrl: ModalController) { }
  data!: any;
  ngOnInit() {
    this.getFormValues();

  }
  form = this._fb.group({
    email: [],
    id: [],
    dni: [],
    name: [],
    surname: [],
    paid: [''],
    date: [],
    code: [],
    total: []
  });

  getFormValues() {
    this.form.get('email')?.setValue(this.data?.email);
    this.form.get('id')?.setValue(this.data?.id);
    this.form.get('dni')?.setValue(this.data?.dni);
    this.form.get('name')?.setValue(this.data?.name);
    this.form.get('surname')?.setValue(this.data?.surname);
    this.form.get('paid')?.setValue(this.data?.paid == 0 && this.data.total > 0 ? 'IMPAGO' : this.data.total == 0 || this.data.paid == 2 ? 'GIFT' : this.data.paid == 1 ? 'PAGO' : this.data.total < 0 && this.data.paid == 0 ? 'GIFT' : '')
    this.form.get('date')?.setValue(this.data?.date);
    this.form.get('code')?.setValue(this.data?.code);
    this.form.get('total')?.setValue(this.data?.total);
  }

  close() {
    this._modalCtrl.dismiss();
  }

}
