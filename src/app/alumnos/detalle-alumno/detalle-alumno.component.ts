import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Alumno } from './../alumnos.model';
import { AlumnosService } from '../alumnos.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detalle-alumno',
  templateUrl: './detalle-alumno.component.html',
  styleUrls: ['./detalle-alumno.component.css']
})
export class DetalleAlumnoComponent implements OnInit {
  //Esto se anula apra usar rutas. Ya no e sparametro por directiva
  //@Input() 
  public alumno!: Alumno | undefined;

  constructor(
    private route: ActivatedRoute,
    private alumnosService: AlumnosService,
    private location: Location,
    /*private listaAlumno: ListadoAlumnoComponent*/
    ) { 
      /*this.alumno = this.listaAlumno.OnSelect();*/
    }

  ngOnInit(): void {
    this.getAlumno();
  }

  getAlumno(): void{
    const id = this.route.snapshot.paramMap.get('nc')/*?.toString()*/;
    this.alumnosService.getAlumnoPorId(id)
    .subscribe(itemAlumno => this.alumno = itemAlumno)
  }

  goBack(){
    this.location.back();
  }
}
