import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos.component';
import { FormTdComponent } from './form-td/form-td.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [CursosComponent, FormTdComponent],
  imports: [
    CommonModule,
    FormsModule,
    CursosRoutingModule
  ]
})
export class CursosModule { }
