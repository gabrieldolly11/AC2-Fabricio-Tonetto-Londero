AC2 – Sistema de Empréstimo de Livros

Desenvolvimento Web Front-End

Professor: Fabrício Tonetto Londero

Integrantes:
- Gabriel Henrique Fernandes Torres – RA: 251157
- Enzo Anthony Mazini Monteiro – RA: 251209

1. Sobre o Projeto

Este projeto foi desenvolvido como parte da AC2 da disciplina de Desenvolvimento Web Front-End.

O objetivo é criar uma aplicação utilizando Angular para cadastrar empréstimos de livros, acompanhar suas devoluções e organizar os registros.

2. Funcionalidades

O sistema permite:

- Cadastrar empréstimos informando o nome da pessoa, o título do livro e a data prevista de devolução.
- Visualizar todos os empréstimos cadastrados.
- Registrar a devolução de um livro.
- Remover empréstimos da lista.
- Identificar empréstimos em aberto e devolvidos.
- Exibir contadores de empréstimos totais, em aberto e devolvidos.
- Mostrar uma mensagem quando não houver empréstimos cadastrados.

3. Tecnologias Utilizadas

-Angular
-TypeScript
-HTML
-CSS
-Node.js
-npm

4. Estrutura do Projeto

-A aplicação utiliza componentes e serviços do Angular.
-EmprestimoService: responsável por gerenciar os empréstimos, utilizando os métodos listar(), adicionar(), remover() e registrarDevolucao().
-CadastrarEmprestimo: componente responsável pelo formulário de cadastro.
-ListaEmprestimos: componente responsável por apresentar os empréstimos e permitir sua remoção ou devolução.
-Interface Emprestimo: define os dados de cada registro, incluindo identificador, nome da pessoa, título do livro, data prevista e situação da devolução.

5. Como Executar o Projeto

É necessário ter o Node.js instalado.

Abra a pasta do projeto no terminal e execute:

npm install

Depois, inicie a aplicação:

npx ng serve -o

O sistema poderá ser acessado pelo navegador no endereço:

http://localhost:4200/

6. Objetivo Acadêmico

A atividade tem como finalidade aplicar os conhecimentos adquiridos durante as aulas, principalmente a criação de componentes, utilização de Services, comunicação entre componentes e apresentação de informações utilizando Angular.

Facens – Desenvolvimento Web Front-End
