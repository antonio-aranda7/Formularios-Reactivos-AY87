import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AltaAlumnoComponent } from './alumnos/alta-alumno/alta-alumno.component';
import { ListadoAlumnoComponent } from './alumnos/listado-alumno/listado-alumno.component';
import { DetalleAlumnoComponent } from './alumnos/detalle-alumno/detalle-alumno.component';

const routes: Routes = [
  //{ path: 'lista-alumnos/:id', component: AltaAlumnoComponent,  }
  { path: 'lista-alumnos', component: ListadoAlumnoComponent },
  { path: 'detalle-alumnos/:nc', component: DetalleAlumnoComponent },
  { path: 'alta-alumnos', component: AltaAlumnoComponent },
  { path: '', redirectTo: '/alta-alumnos', pathMatch: 'full'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
