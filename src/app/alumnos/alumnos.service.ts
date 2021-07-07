import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Alumno } from './alumnos.model';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  private alumnos: Alumno[];

  constructor() { 
    /*this.alumnos = [
      {
        id: 0,
        nombre: 'Sin definir'
      },
      {
        id: 1,
        nombre: 'Activos'
      },
      {
        id: 2,
        nombre: 'Inactivos'
      },
      {
        id: 3,
        nombre: 'Deudores'
      },
    ];*/
    this.alumnos = [];
  }

  getAlumnos() {
    return this.alumnos;
  }
  //agrgar un a
  getAlumnoPorId(dni: string | null /*undefined*/): Observable<Alumno | undefined>{
    //alumnosEncontrado : Alumno;
    //Buscar el alumnos que tenga el dni proporcionado
    //Regresar el alumno que tenga el dni proporcionado
    return of(this.alumnos.find(alum => alum.dni === dni));
  }

  agregarAlumno(alum: Alumno) {
    this.alumnos.push(alum);
  }

  nuevoAlumno(): Alumno {
    return {
      dni: '',
      //dni: this.alumnos.length,
      nombre: '',
      //notas: number;
      nota1: 0,
      nota2: 0,
      nota3: 0
    };
  }
}
