 import { Injectable } from '@angular/core';
 import { Clientes } from './clientes.json'
 import { Cliente } from './cliente'
 import { of, Observable } from 'rxjs'
 import { HttpClient } from '@angular/common/http'

 @Injectable()
 export class ClienteService{

private urlEndPoint:string = 'http://localhost:8080/api/clientes/listar';
    constructor(private http: HttpClient){}

    getClientes(): Observable<Cliente[]> {
        //return of(Clientes); 

        return this.http.get<Cliente[]>(this.urlEndPoint);
    }
 }