# Roteiro de apresentação da AC2

**Integrantes:** Gabriel Henrique Fernandes Torres (251157) e Enzo Anthony Mazini Monteiro (251209).

## 1. Apresentar a aplicação

Explique: "Criamos uma aplicação Angular para registrar empréstimos de livros e acompanhar as devoluções. Ela utiliza componentes para a interface e um Service para armazenar e gerenciar os registros."

## 2. Demonstrar cada requisito na prática

1. **Tela inicial vazia:** mostrar os contadores zerados e o texto "Nenhum empréstimo cadastrado".
2. **Cadastrar:** preencher um nome, título de livro e data. Clicar em "Cadastrar empréstimo".
3. **Status e contadores:** mostrar que o livro aparece como **Em aberto** (amarelo) e o total aumenta.
4. **Segundo cadastro:** inserir outro livro para mostrar vários registros.
5. **Devolver:** clicar em "Registrar devolução"; o status muda para **Devolvido** (verde), os contadores mudam e o botão fica desabilitado.
6. **Remover:** clicar em "Remover"; o registro desaparece e os contadores se atualizam.

## 3. Explicar o código para o professor

- `models/emprestimo.ts`: interface que define os campos do empréstimo.
- `services/emprestimo.service.ts`: Service com `@Injectable({ providedIn: 'root' })`. A mesma instância é usada pelos componentes.
- `cadastrar-emprestimo.ts`: envia os dados do formulário ao `adicionar()` do Service.
- `lista-emprestimos.ts`: chama `listar()`, `remover()` e `registrarDevolucao()`.
- `app.ts`: lê a lista do Service e calcula os três contadores.
- `@for` e `@if`: diretivas de template usadas para mostrar a lista e o estado vazio.

## 4. Perguntas prováveis e respostas simples

**Por que usar um Service?**  Para centralizar a lista e as operações, sem duplicar a lógica em cada componente.

**Como dois componentes usam os mesmos dados?**  Pelo `EmprestimoService`, disponível na aplicação inteira por `providedIn: 'root'`.

**Como impede devolver duas vezes?**  O atributo `[disabled]="emprestimo.devolvido"` desabilita o botão; o Service também verifica a condição.

**Como os contadores atualizam?**  O componente principal consulta os dados do Service e calcula o total, os abertos e os devolvidos.

**Os dados continuam após atualizar o navegador?**  Não. Nesta AC2 os dados ficam na memória; banco de dados não foi exigido.

## 5. GitHub (obrigatório)

Antes da apresentação, publique os arquivos em um repositório GitHub próprio da dupla. Abra o terminal na pasta `ac2`:

```bash
git add .
git commit -m "AC2 - Controle de emprestimos de livros"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/AC2-Livros.git
git push -u origin main
```

Crie primeiro um repositório **vazio** no GitHub e substitua `SEU_USUARIO` pelo nome de usuário da conta utilizada. Se já houver um `origin`, não repita `git remote add origin`: use `git remote -v` para conferir. Caso necessário, `git remote set-url origin URL` ajusta o destino.

Não envie a pasta `node_modules` ao GitHub (ela está no `.gitignore`).

**Importante:** o enunciado afirma que não entregar e não apresentar resulta em nota zero.
