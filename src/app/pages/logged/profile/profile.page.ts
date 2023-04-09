import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  cargando: boolean = false;

  constructor(
    private _modalCtrol: ModalController,
    public _authSv: AuthService,
    private _fb: FormBuilder) {
  }

  form = this._fb.group({
    name: [null, Validators.required],
    rol: ['', Validators.required],
    email: [null]

  })

  ngOnInit() {
    console.log(this._authSv.getCurrentUser())
    this.setFormValue();
  }

  setFormValue() {
    this.form.get('name')?.setValue(this._authSv.getCurrentUser().user.name);
    this.form.get('rol')?.setValue('Administrador');
    this.form.get('email')?.setValue(this._authSv.getCurrentUser().user.email);
  }

}
