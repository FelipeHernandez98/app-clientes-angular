 import { Injectable } from '@angular/core';
 import { Clientes } from './clientes.json'
 import { Cliente } from './cliente'

 @Injectable()
 export class ClienteService{

    constructor(){}

    getClientes(): Cliente[] {
        return Clientes; 
    }
 }