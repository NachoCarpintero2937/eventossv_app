import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import { InicialesModule } from 'src/app/components/iniciales/iniciales.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule,
    InicialesModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ProfilePage]
})
export class ProfilePageModule { }
