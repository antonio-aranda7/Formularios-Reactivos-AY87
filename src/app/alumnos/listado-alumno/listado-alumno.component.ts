import { Component, OnInit, Input } from '@angular/core';
import { FormControl, /*AY88 */ FormGroup } from '@angular/forms';

import { AlumnosService } from './../alumnos.service';
import { Alumno } from './../alumnos.model';

@Component({
  selector: 'app-listado-alumno',
  templateUrl: './listado-alumno.component.html',
  styleUrls: ['./listado-alumno.component.css']
})
export class ListadoAlumnoComponent implements OnInit {

  @Input() valor: number;

  constructor() { }

  ngOnInit(): void {
  }

}
