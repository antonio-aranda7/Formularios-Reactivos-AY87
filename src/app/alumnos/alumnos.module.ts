import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'

import { AlumnosService } from './alumnos.service';
import { AltaAlumnoComponent } from './alta-alumno/alta-alumno.component';
import { ListadoAlumnoComponent } from './listado-alumno/listado-alumno.component';
import { DetalleAlumnoComponent } from './detalle-alumno/detalle-alumno.component';

@NgModule({
  declarations: [
    AltaAlumnoComponent,
    ListadoAlumnoComponent,
    DetalleAlumnoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    //FormsModule,
    //routing
    /*RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )*/
  ],
  providers: [AlumnosService],
  /*exports: [
    AltaAlumnoComponent,
    ListadoAlumnoComponent
  ]*/
})
export class AlumnosModule { }
