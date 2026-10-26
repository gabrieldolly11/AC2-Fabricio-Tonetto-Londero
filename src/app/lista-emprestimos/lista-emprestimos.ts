import { Component } from '@angular/core';
import { EmprestimoService } from '../services/emprestimo.service';

@Component({
  selector: 'app-lista-emprestimos',
  imports: [],
  templateUrl: './lista-emprestimos.html',
  styleUrl: './lista-emprestimos.css'
})
export class ListaEmprestimos {
  constructor(public emprestimoService: EmprestimoService) {}

  remover(id: number): void {
    this.emprestimoService.remover(id);
  }

  registrarDevolucao(id: number): void {
    this.emprestimoService.registrarDevolucao(id);
  }

  formatarData(data: string): string {
    const [ano, mes, dia] = data.split('-');
    return `${dia}/${mes}/${ano}`;
  }
}
