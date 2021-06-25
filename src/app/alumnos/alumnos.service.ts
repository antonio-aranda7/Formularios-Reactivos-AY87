import { Injectable } from '@angular/core';
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
  getAlumnoPorId(dni: string){
    //alumnosEncontrado : Alumno;
    //Buscar el alumnos que tenga el dni proporcionado
    //return alumnosEncontrado
  }

  agregarAlumno(alum: Alumno) {
    this.alumnos.push(alum);
  }

  nuevoAlumno(): Alumno {
    return {
      dni: this.alumnos.length,
      nombre: '',
      //notas: number;
      nota1: 0,
      nota2: 0,
      nota3: 0
    };
  }
}
