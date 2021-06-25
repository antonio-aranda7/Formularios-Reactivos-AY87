import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AltaAlumnoComponent } from './alta-alumno/alta-alumno.component';
import { ListadoAlumnoComponent } from './listado-alumno/listado-alumno.component';

import { ReactiveFormsModule } from '@angular/forms'
import { AlumnosService } from './alumnos.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AltaAlumnoComponent,
    ListadoAlumnoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [AlumnosService],
  exports: [
    AltaAlumnoComponent,
    ListadoAlumnoComponent
  ]
})
export class AlumnosModule { }
