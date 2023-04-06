import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-gift-event',
  templateUrl: './gift-event.component.html',
  styleUrls: ['./gift-event.component.scss'],
})
export class GiftEventComponent implements OnInit {

  constructor(
    private _modalCtrl: ModalController,
    private _apiSv: ApiService,
    private _toastSv: ToastService,
    private _fb: FormBuilder) { }

  form = this._fb.group({
    email: [null, [Validators.required, Validators.email]],
    quantity: [null, Validators.required],
    name: [null, Validators.required],
    surname: [null, Validators.required],
    adult: [1],
    dni: [12345678]
  })
  data: any;
  cargando: boolean = false;
  ngOnInit() {
    this.cargando = false;
  }



  close() {
    this._modalCtrl.dismiss();
  }

  submit() {
    console.log(this.data)
    if (this.form.valid) {
      this.cargando = true;
      this._apiSv.post('ticket/' + this.data?.id + '/gift', this.form.getRawValue()).then((r: any) => {
        if (r?.status != 'failure') {
          this._toastSv.presentSuccess("Tickets enviados a " + this.form.get('email')?.value);
          this.cargando = false;
          this.close();
        } else {
          throw new Error(r?.message);
        }
      }).catch(e => {
        this._toastSv.presentError("Hubo un error al enviar los tickets");
        this.cargando = false;
      });
    } else {
      this._toastSv.presentToast("Complete todos los campos");
    }

  }

}
