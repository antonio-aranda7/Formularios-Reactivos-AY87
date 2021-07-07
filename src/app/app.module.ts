import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AlumnosService } from './alumnos/alumnos.service';
import { AltaAlumnoComponent } from './alumnos/alta-alumno/alta-alumno.component';
import { ListadoAlumnoComponent } from './alumnos/listado-alumno/listado-alumno.component';
import { DetalleAlumnoComponent } from './alumnos/detalle-alumno/detalle-alumno.component';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AltaAlumnoComponent,
    ListadoAlumnoComponent,
    DetalleAlumnoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [AlumnosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
