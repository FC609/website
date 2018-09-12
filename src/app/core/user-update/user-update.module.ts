import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserUpdateComponent } from './user-update.component';
import {RouterModule} from '@angular/router';
import { ClickComponent } from './click/click.component';
import { InputComponent } from './input/input.component';


const routes = [
  {
    path: 'core/userUpdate',
    component: UserUpdateComponent
  }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UserUpdateComponent, ClickComponent, InputComponent]
})
export class UserUpdateModule { }
