import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpeningRoutingModule } from './opening-routing.module';
import { OpeningComponent } from './opening.component';



@NgModule({
  declarations: [
    OpeningComponent
  ],
  imports: [
    CommonModule,
    OpeningRoutingModule
  ]
})
export class OpeningModule { }
