import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserUpdateModule} from './user-update/user-update.module';


@NgModule({
  imports: [
    CommonModule,
    UserUpdateModule
  ]
})
export class CoreModule { }
