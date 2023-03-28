import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private _fb: FormBuilder,
    private _apiSv: ApiService,
    private _navCtrl: NavController,
    private _toastSv: ToastService) { }

  ngOnInit() {
  }

  form = this._fb.group({
    email: ['user@pigtureit.com', [Validators.required, Validators.email]],
    password: ['Q1w2e3r4!', Validators.required],
  });

  type_password: boolean = true;
  passwordTypeToggle() {
    this.type_password = !this.type_password;
  }

  submit() {
    if (this.form.valid) {
      this._toastSv.present().finally(() => {
        this._apiSv.post("login", this.form.getRawValue()).then((r: any) => {
          localStorage.setItem("user_data", JSON.stringify(r));
          this._navCtrl.navigateRoot('/logged/home');
        }).catch(e => {

        })
      })
    }
  }
}
