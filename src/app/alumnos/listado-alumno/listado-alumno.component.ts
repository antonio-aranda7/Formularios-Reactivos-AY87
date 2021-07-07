import { Component, OnInit, Input } from '@angular/core';

import { Alumno } from './../alumnos.model';
import { AlumnosService } from './../alumnos.service';
import { DetalleAlumnoComponent } from '../detalle-alumno/detalle-alumno.component';

@Component({
  selector: 'app-listado-alumno',
  templateUrl: './listado-alumno.component.html',
  styleUrls: ['./listado-alumno.component.css']
})

export class ListadoAlumnoComponent implements OnInit {

  //@Input() valor: number;

  alumnos: Alumno[];
  //Ya no por rutas
  //alumnoSeleccionado: Alumno;

  constructor(
    private alumnosService: AlumnosService,
    //private route: ActivatedRoute
    ) { 
      
      //console.log(route.snapshot.params['id'];)
  }

  ngOnInit(): void {
    this.alumnos =  this.alumnosService.getAlumnos();
  }

  /*Ya no por rutas
  OnSelect(alumno: Alumno){
    this.alumnoSeleccionado= alumno;

  }*/

}
