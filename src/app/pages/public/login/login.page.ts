import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  cargando: boolean = false;
  constructor(
    private _fb: FormBuilder,
    private _apiSv: ApiService,
    private _navCtrl: NavController,
    private _toastSv: ToastService,
    private _authSv: AuthService) { }

  ngOnInit() {
    if (this._authSv.getCurrentUser())
      this._navCtrl.navigateRoot('/logged/tabs')
  }

  form = this._fb.group({
    email: ['qr@eventossv.com', [Validators.required, Validators.email]],
    password: ['Qr25032023', Validators.required],
  });

  type_password: boolean = true;
  passwordTypeToggle() {
    this.type_password = !this.type_password;
  }

  submit() {
    if (this.form.valid) {
      this.cargando = true;
      this._apiSv.post("login", this.form.getRawValue()).then((r: any) => {
        this.cargando = false;
        localStorage.setItem("user_data", JSON.stringify(r));
        this._navCtrl.navigateRoot('/logged/tabs');
      }).catch(e => {
        this.cargando = false;
      })
    }
  }
}
