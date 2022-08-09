import { Injectable } from '@angular/core'
import { Clientes } from './clientes.json'
import { Cliente } from './cliente'
import { of, Observable} from 'rxjs'
import { catchError } from 'rxjs/operators'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import swal from 'sweetalert2'
import { Router } from '@angular/router'

@Injectable()
export class ClienteService {
  private urlEndPoint: string = 'http://localhost:8080/api/clientes'
  private urlEndPointCreate: string = 'http://localhost:8080/api/clientes'
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient, private router: Router) {}

  getClientes(): Observable<Cliente[]> {
        return this.http.get<Cliente[]>(this.urlEndPoint)
  }

  create(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.urlEndPointCreate, cliente, {headers: this.httpHeaders}).pipe(
      catchError(e => {
        console.log(e.error.mensaje)
        swal.fire(e.error.mensaje, e.error.error, 'error');
        throw new Error(e);
      })
    )
  }

  getCliente(id: number): Observable<Cliente>{
    return this.http.get<Cliente>(`${this.urlEndPoint}/${id}`).pipe(
      catchError(e => {
        this.router.navigate(['/clientes'])
        console.log(e.error.mensaje)
        swal.fire('Error', e.error.mensaje, 'error');
        throw new Error(e);
      })
    )
  }

  update(cliente: Cliente): Observable<Cliente>{
    return this.http.put<Cliente>(`${this.urlEndPoint}/${cliente.id}`, cliente, {headers: this.httpHeaders}).pipe(
      catchError(e => {
        console.log(e.error.mensaje)
        swal.fire(e.error.mensaje, e.error.error, 'error');
        throw new Error(e);
      })
    )
  }

  delete(id: number): Observable<Cliente>{
    return this.http.delete<Cliente>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders}).pipe(
      catchError(e => {
        console.log(e.error.mensaje)
        swal.fire(e.error.mensaje, e.error.error, 'error');
        throw new Error(e);
      })
    )
  }
}
