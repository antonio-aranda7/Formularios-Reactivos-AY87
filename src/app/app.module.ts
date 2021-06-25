import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AlumnosService } from './alumnos/alumnos.service';
import { AltaAlumnoComponent } from './alumnos/alta-alumno/alta-alumno.component';
import { ListadoAlumnoComponent } from './alumnos/listado-alumno/listado-alumno.component';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AltaAlumnoComponent,
    ListadoAlumnoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [AlumnosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
