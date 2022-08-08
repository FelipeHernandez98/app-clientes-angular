import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente'

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  clientes: Cliente [] = [
    {id: 1, nombre: 'Felipe', apellido: 'Hernandez', email: 'felipe@correo.com', createAt: '2022-08-08'},
    {id: 2, nombre: 'Angie', apellido: 'Rodriguez', email: 'angie@correo.com', createAt: '2022-08-08'},
    {id: 3, nombre: 'Jose', apellido: 'Perez', email: 'jose@correo.com', createAt: '2022-08-08'},
    {id: 4, nombre: 'Pepe', apellido: 'Gomez', email: 'pepe@correo.com', createAt: '2022-08-08'},
    {id: 5, nombre: 'Pedro', apellido: 'Fernandez', email: 'pedro@correo.com', createAt: '2022-08-08'},
    {id: 6, nombre: 'Marcos', apellido: 'Galeano', email: 'marcos@correo.com', createAt: '2022-08-08'},
    {id: 7, nombre: 'Ignacio', apellido: 'Ordoñez', email: 'ignacio@correo.com', createAt: '2022-08-08'},
    {id: 8, nombre: 'Patricio', apellido: 'Lizcano', email: 'patricio@correo.com', createAt: '2022-08-08'},
    {id: 9, nombre: 'Laureano', apellido: 'Ramos', email: 'laur@correo.com', createAt: '2022-08-08'},
    {id: 10, nombre: 'Facundo', apellido: 'Tarazona', email: 'facun@correo.com', createAt: '2022-08-08'},

  
  
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
