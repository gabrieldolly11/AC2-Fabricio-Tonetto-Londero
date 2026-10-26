import { Component } from '@angular/core';
import { CadastrarEmprestimo } from './cadastrar-emprestimo/cadastrar-emprestimo';
import { ListaEmprestimos } from './lista-emprestimos/lista-emprestimos';
import { EmprestimoService } from './services/emprestimo.service';

@Component({
  selector: 'app-root',
  imports: [CadastrarEmprestimo, ListaEmprestimos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(private emprestimoService: EmprestimoService) {}

  get totalEmprestimos(): number {
    return this.emprestimoService.listar().length;
  }

  get emprestimosEmAberto(): number {
    return this.emprestimoService.listar().filter(emprestimo => !emprestimo.devolvido).length;
  }

  get emprestimosDevolvidos(): number {
    return this.emprestimoService.listar().filter(emprestimo => emprestimo.devolvido).length;
  }
}
