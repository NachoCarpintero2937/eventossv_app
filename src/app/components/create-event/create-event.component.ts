import { DatePipe } from '@angular/common';
import { Component, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { GlobalService } from 'src/app/services/global.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss'],
})
export class CreateEventComponent implements OnInit {
  event: any;
  cargando: boolean = false;
  dateValue = new Date().toISOString();
  img_edit: boolean = false;
  public imageSrc: string = '';
  readonly MIN = new Date().toISOString().split('T')[0];
  constructor(
    private _apiSv: ApiService,
    private _fb: FormBuilder,
    private _modalCtrl: ModalController,
    private _toastSv: ToastService,
    public globalsSv: GlobalService,
    private _datePipe: DatePipe) { }
  form = this._fb.group({
    name: [null, Validators.required],
    description: [null],
    date: ['', Validators.required],
    public: [1],
    active: [true, Validators.required],
    img: ['', Validators.required],
    id: [null],
  });


  ngOnInit() {
    if (this.event) {
      this.setValueFormEdit();
    }
  }

  formatDate(date: any) {
    var newDate = this._datePipe.transform(date, 'yyyy-MM-dd HH:mm:ss');
    this.form.get('date')?.setValue(newDate);
    return date;
  }
  handleInputChange(e?: any) {
    this.img_edit = true;
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      this._toastSv.presentError("Formato de imagen incorrecto");
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e?: any) {
    let reader = e.target;
    this.imageSrc = reader.result;
    this.form.get('img')?.setValue(this.imageSrc)
  }

  close() {
    this._modalCtrl.dismiss();
  }
  deleteimg() {
    this.img_edit = false;
    this.imageSrc = '';
    this.form.get('img')?.setValue(this.event.img)
  }

  setValueFormEdit() {
    this.img_edit = true;
    this.imageSrc = this.event?.img;
    this.dateValue = this.event?.date;
    this.form.get('name')?.setValue(this.event?.name)
    this.form.get('description')?.setValue(this.event?.description)
    this.form.get('active')?.setValue(this.event?.active)
    this.form.get('img')?.setValue(this.event?.img)
    this.form.get('date')?.setValue(this.event?.date)
    this.form.get('id')?.setValue(this.event?.id)
  }

  submit() {
    if (this.form.valid) {
      this.cargando = true;
      this._apiSv.post(this.event ? "event/update" : "event/create", this.form.getRawValue()).then((resp: any) => {
        this.cargando = false;
        if (resp.status = "success") {
          this._toastSv.presentSuccess(this.event ? "Evento editado correctamente" : "Evento creado correctamente");
          // Si no devuelvo el evento al cerrar el modal no se muestra el flujo para asignar tickets
          this._modalCtrl.dismiss(!this.event ? resp?.event : null);
        } else {
          throw new Error(resp?.message);
        }
      }).catch((e: any) => {
        this._toastSv.presentError(e?.message);
        this.cargando = false;
      });
    } else {
      this._toastSv.presentToast("Complete todos los campos para continuar")
    }
  }
}
