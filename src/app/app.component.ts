import { Component, OnInit } from '@angular/core';
import { FormControl, /*AY88 */ FormGroup } from '@angular/forms';
//import { AlumnosService } from './alumnos/alumnos.service';
//import { Alumno } from './alumnos/alumnos.model';
//import { AltaAlumnoComponent } from './alumnos/alta-alumno/alta-alumno.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent /**/implements OnInit{
  title2 = 'Formularios-Reactivos-AY88';
  //SERVICE AY 90 Reactivo
  //alumno: Alumno;
  //AY 90
  resultado:string;

  formAlumno = new FormGroup({
    dni: new FormControl(''),
    //alumno.dni: new FormControl(''),
    nombre: new FormControl(''),
    notas: new FormGroup({
      nota1: new FormControl(''),
      nota2: new FormControl(''),
      nota3: new FormControl('')
    })
  });
  //AY 89
  conversion: string;
  potenciaNumero: number;
  cantidad: number;

  formularioConversion = new FormGroup({
    numerodecimal: new FormControl(''),
    base: new FormControl('octal'),
    potencia: new FormControl('2'),
    largo: new FormControl(true)
  });
  //AY 88
  datos:string;

  formularioContacto = new FormGroup({
    nombre: new FormControl(''),
    mail: new FormControl(''),
    mensaje: new FormControl('')
  });

  //SERVICE AY 90 Reactivo
  /*constructor(private alumnosService: AlumnosService){
    //this.alumno = this.alumnosService.nuevoAlumno();
  };*/

  title = 'Formularios-Reactivos-AY87';

  //AY 87
  actividad = new FormControl();//creamos un objeto de la clase 'FormControl' llamado 'actividad' (uno solo ya que solo tenemos un control de entrada de datos):

  lista: string[];//El problema requiere que se almacenen todas las actividades que ingresa el usuario por teclado, esto sucede en el arreglo 'lista'. La definimos dentro de la clase:

  /**Otro punto importante es que cuando se ejecuta el método 'onInit' al cargar se la componente, verificamos si hay datos almacenados en el 'localStorage' para leerlos y cargar el arreglo 'lista' con los datos previos de ejecuciones anteriores de la aplicación Angular: */
  ngOnInit(): void {
    //SERVICE AY 90 Reactivo
    //this.alumno = this.alumnosService.nuevoAlumno();

    //
    this.lista=[];
    let arreglo=JSON.parse(localStorage.getItem("actividades"));
    if (arreglo!=null)
      for(let actividad of arreglo)
        this.lista.push(actividad);
  }

  //SERVICE AY 90 Reactivo
  //Lamar o adecuar cuandos e usa el submint
  /*nuevoAlumno(): void {
    this.asignarDatos();
    this.alumnosService.agregarAlumno(this.alumno);
    //this.alumno = this.alumnoService.nuevoAlumno();
  }*/

  /*asignarDatos(){
    this.alumno.dni = this.formAlumno.value.dni;
    this.alumno.nombre =  this.formAlumno.value.nombre;
    this.alumno.nota1 = this.formAlumno.value.notas.nota1;
    this.alumno.nota2 = this.formAlumno.value.notas.nota2;
    this.alumno.nota3 = this.formAlumno.value.notas.nota3;
  }*/

  submit() {
    //AY 90
    /*let nota1=parseInt(this.formAlumno.value.notas.nota1);
    let nota2=parseInt(this.formAlumno.value.notas.nota2);
    let nota3=parseInt(this.formAlumno.value.notas.nota3);
    if (nota1>=4 && nota2>=4 && nota3>=4)
      this.resultado="El alumno queda aprobado por esas notas";
    else
      this.resultado="El alumno no aprueba por esas notas";

    this.nuevoAlumno();
    this.alumno = this.alumnosService.getAlumnos()[0];*/

    //AY 89
    if (this.formularioConversion.value.base == "hexadecimal")
      this.conversion = parseInt(this.formularioConversion.value.numerodecimal).toString(16);
    if (this.formularioConversion.value.base == "octal")
      this.conversion = parseInt(this.formularioConversion.value.numerodecimal).toString(8);
    this.potenciaNumero = Math.pow(parseInt(this.formularioConversion.value.numerodecimal), parseInt(this.formularioConversion.value.potencia));
    if (this.formularioConversion.value.largo)
      this.cantidad = this.formularioConversion.value.numerodecimal.length;
      //AY 88
    this.datos=`Nombre=${this.formularioContacto.value.nombre}
                Mail=${this.formularioContacto.value.mail}
                Mensaje=${this.formularioContacto.value.mensaje}
                `;
  }

  /*Cuando se presiona el botón 'agregar', luego de guardar la actividad del formulario procedemos a almacenar mediante el método 'setItem' del objeto 'localStorage' los datos de la lista pero en formato JSON:*/
  agregar() {
    this.lista.push(this.actividad.value);//Cuando el operador presiona el botón de 'Agregar' se llama el método 'agregar' y procedemos a recuperar el dato del control visual mediante la propiedad value y la agregamos al arreglo: 
    localStorage.setItem('actividades', JSON.stringify(this.lista));
    this.actividad.setValue('');//Inmediatamente procedemos a borrar el contenido del control visual llamando al método 'setValue':
  }

  borrar(pos:number) {
    this.lista.splice(pos,1);
    localStorage.clear();
    localStorage.setItem('actividades', JSON.stringify(this.lista));
  }

  /*Si se presiona el botón de borrar todas las actividades procedemos por un lado a borrar los elementos del arreglo y además a borrar los datos almacenados en 'localStorage':*/
  borrarTodas() {
    localStorage.clear();
    this.lista=[];
  }
}

