import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

import {ReactiveFormsModule} from "@angular/forms";
import {MyFormComponent} from "../my-form/my-form.component";
import {MyViewFormComponent} from "../my-view-form/my-view-form.component";
import {MyHeaderModule} from "../header/header.component.module";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ReactiveFormsModule,
    MyHeaderModule,
  ],
  declarations: [HomePage, MyFormComponent, MyViewFormComponent]
})
export class HomePageModule {}
