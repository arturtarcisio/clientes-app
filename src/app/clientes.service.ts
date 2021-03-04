import { Cliente } from './clientes/cliente';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor() { }

  getCliente(): Cliente {
    let cliente: Cliente = new Cliente()
    cliente.nome = 'Artur'
    cliente.cpf = '8888'
    return cliente
  }
}
