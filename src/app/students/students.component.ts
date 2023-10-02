import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
    alumnos = [
      {
        Id: 1,
        Nombre: "Martin",
        Apellido: "Arias",
        Edad: 29
      },
      {
        Id: 2,
        Nombre: "Fernanda",
        Apellido: "Sosa",
        Edad: 20
      },
      {
        Id: 3,
        Nombre: "Fabricio",
        Apellido: "Muñoz",
        Edad: 19
      },
      {
        Id: 4,
        Nombre: "Sofia",
        Apellido: "Lavalle",
        Edad: 18
      },
      {
        Id: 5,
        Nombre: "Carla",
        Apellido: "Romero",
        Edad: 20
      },
      {
        Id: 6,
        Nombre: "Nadia",
        Apellido: "Gonzalez",
        Edad: 25
      },
      {
        Id: 7,
        Nombre: "Sebastian",
        Apellido: "Perez",
        Edad: 30
      }
    ]
}
