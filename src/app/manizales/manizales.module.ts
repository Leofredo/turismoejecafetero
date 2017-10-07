import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddmzlComponent } from './addmzl/addmzl.component';
import { ListmzlComponent } from './listmzl/listmzl.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AddmzlComponent, ListmzlComponent]
})
export class ManizalesModule { }
