import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogingRoutingModule } from './loging-routing.module';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LogingRoutingModule
  ]
})
export class LoginModule { }
