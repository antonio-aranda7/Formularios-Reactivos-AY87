import { Component, OnInit } from '@angular/core';
import { FormControl, /*AY88 */ FormGroup } from '@angular/forms';

import { Alumno } from './../alumnos.model';
import { AlumnosService } from './../alumnos.service';

@Component({
  selector: 'app-alta-alumno',
  templateUrl: './alta-alumno.component.html',
  styleUrls: ['./alta-alumno.component.css']
})
export class AltaAlumnoComponent implements OnInit {

  resultado: string | undefined;
  alumno!: Alumno;//alumno.dni, nombre,nota1...

  formAlumno = new FormGroup({
    dni: new FormControl(''), //alumno.dni: new FormControl(''),
    nombre: new FormControl(''),
    notas: new FormGroup({
      nota1: new FormControl(''),
      nota2: new FormControl(''),
      nota3: new FormControl('')
    })
  });

  constructor(
    private alumnosService: AlumnosService

    ) { 
    //console.log(route.snapshot.params['dni'];)
  }

  ngOnInit() {
    //this.alumno = this.alumnosService.nuevoAlumno();
  }

  asignarDatos(){
    this.alumno = this.alumnosService.nuevoAlumno();
    this.alumno.dni = this.formAlumno.value.dni;
    this.alumno.nombre =  this.formAlumno.value.nombre;
    this.alumno.nota1 = this.formAlumno.value.notas.nota1;
    this.alumno.nota2 = this.formAlumno.value.notas.nota2;
    this.alumno.nota3 = this.formAlumno.value.notas.nota3;
  }
  
  //Lamar o adecuar cuandos e usa el submint
  nuevoAlumno(): void {
    this.asignarDatos();
    this.alumnosService.agregarAlumno(this.alumno);
    //Para listado alumnos
    
  }

  submit() {
    let nota1=parseInt(this.formAlumno.value.notas.nota1);
    let nota2=parseInt(this.formAlumno.value.notas.nota2);
    let nota3=parseInt(this.formAlumno.value.notas.nota3);
    if (nota1>=4 && nota2>=4 && nota3>=4)
      this.resultado="El alumno queda aprobado por esas notas";
    else
      this.resultado="El alumno no aprueba por esas notas";

    this.nuevoAlumno();
    
    this.alumno = this.alumnosService.getAlumnos()[0];
  }

}
