import { Component, OnInit } from '@angular/core'
import { Cliente } from './cliente'
import { ClienteService } from './cliente.service'
import swal from 'sweetalert2'

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
})
export class ClientesComponent implements OnInit {
  clientes: Cliente[] = []

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.clienteService
      .getClientes()
      .subscribe((clientes) => (this.clientes = clientes))
  }

  public delete(cliente: Cliente): void {
    swal
      .fire({
        title: '¿Estas seguro?',
        text: 'Estas seguro de eliminar este uausrio',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar!',
        cancelButtonText: 'Cancelar'
      })
      .then((result) => {
        if (result.isConfirmed) {
          this.clienteService.delete(cliente.id).subscribe((response) => {
            this.clientes = this.clientes.filter( cli => cli !==cliente)
            swal.fire('Eliminado!', 'El usuario se ha eliminado.', 'success')
          })
        }
      })
  }
}
