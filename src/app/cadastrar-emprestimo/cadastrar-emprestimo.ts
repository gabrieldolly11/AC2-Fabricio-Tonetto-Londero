import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { EmprestimoService } from '../services/emprestimo.service';

@Component({
  selector: 'app-cadastrar-emprestimo',
  imports: [FormsModule],
  templateUrl: './cadastrar-emprestimo.html',
  styleUrl: './cadastrar-emprestimo.css'
})
export class CadastrarEmprestimo {
  nomePessoa = '';
  tituloLivro = '';
  dataPrevistaDevolucao = '';
  mensagemSucesso = '';

  constructor(private emprestimoService: EmprestimoService) {}

  cadastrar(formulario: NgForm): void {
    if (!formulario.valid || !this.nomePessoa.trim() || !this.tituloLivro.trim()) {
      return;
    }

    this.emprestimoService.adicionar(
      this.nomePessoa,
      this.tituloLivro,
      this.dataPrevistaDevolucao
    );

    formulario.resetForm();
    this.mensagemSucesso = 'Empréstimo cadastrado com sucesso!';
  }
}
