import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.scss'],
})
export class CreateTicketComponent implements OnInit {

  data: any;
  ticket: any;
  constructor(
    private _modalCtrl: ModalController,
    private _fb: FormBuilder,
    private _apiSv: ApiService,
    private _toastSv: ToastService
  ) { }
  cargando!: boolean;
  form = this._fb.group({
    event_id: [''],
    name: ['', Validators.required],
    quantity: ['', Validators.required],
    price: ['', Validators.required],
    limit_buy: [5, Validators.required],
    available: [1],
    active: [1],
    description: [''],
    id: ['']
  });

  ngOnInit() {
    this.form.get('event_id')?.setValue(this.data?.id)
    if (this.ticket)
      this.setFormEditTicket();
  }

  close() {
    this._modalCtrl.dismiss(false);
  }

  submit() {
    if (this.form.valid) {
      this.cargando = true;
      // cambio el booleano por 1 o 0 pq no acepta el server boolean
      if (!this.form.get('available')?.value)
        this.form.get('available')?.setValue(0)
      else
        this.form.get('available')?.setValue(1)

      // el server acepta array de tickets solamente (esto es en crear nada mas.)
      var obj = { tickets: new Array() };
      obj.tickets.push(this.form.getRawValue())

      this._apiSv.post(this.ticket ? "ticket/update" : "ticket/create", this.ticket ? this.form.getRawValue() : obj
      ).then((resp: any) => {
        this.cargando = false;
        if (resp.status != 'failure') {
          this._toastSv.presentSuccess(this.ticket ? 'Ticket editado correctamente' : 'Ticket creado correctamente');
          this._modalCtrl.dismiss(true)
        } else {
          throw new Error(resp?.message)
        }
      }).catch(e => {
        this.cargando = false;
        this._toastSv.presentError(e);
      })
    }
  }


  setFormEditTicket() {
    this.form.get('name')?.setValue(this.ticket?.name)
    this.form.get('description')?.setValue(this.ticket.description)
    this.form.get('price')?.setValue(this.ticket.price)
    this.form.get('available')?.setValue(this.ticket.available)
    this.form.get('limit_buy')?.setValue(this.ticket.limit_buy)
    this.form.get('quantity')?.setValue(this.ticket.quantity)
    this.form.get('id')?.setValue(this.ticket.id)
  }
}