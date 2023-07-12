# NodeJS - REST API

<p align="center">
  <img src="https://img.shields.io/static/v1?label=api&message=rest&color=blueviolet&style=for-the-badge"/>
  <img src="https://img.shields.io/github/license/MrRioja/nodejs-api-rest?color=blueviolet&logo=License&style=for-the-badge"/>
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/MrRioja/nodejs-api-rest?color=blueviolet&logo=TypeScript&logoColor=white&style=for-the-badge">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/MrRioja/nodejs-api-rest?color=blueviolet&style=for-the-badge">
</p>

<p align="center">
  <a href="#sobre">Sobre</a> •
  <a href="#nodejs---api-rest">NodeJS - API REST</a> •
  <a href="#instalação">Instalação</a> •
  <a href="#tecnologias">Tecnologias</a> •
  <a href="#autor">Autor</a>  
</p>

## Sobre

Projeto desenvolvido durante o módulo II do bootcamp Ignite da Rocketseat cujo objetivo foi entender como criar uma API REST com NodeJS utilizando boas práticas e tecnologias do ecossistema Node.

## NodeJS - API REST

Projeto desenvolvido durante o módulo II do Ignite 2023 na trilha de NodeJS cujo objetivo foi entender como construir uma API REST na prática utilizando as melhores práticas e ferramentas do ecossistema Javascript.

### Capitulo 1 - Estrutura da aplicação

O primeiro capítulo do módulo foi voltado à estruturação da aplicação, durante as aulas que o compõem:

- [x] Conhecemos o Fastify (Framework web que utilizamos no projeto).
- [x] Entendemos o Typescript, como ele funciona, suas vantagens e como utiliza-lo em nossas aplicações.
- [x] Criarmos o servidor da nossa aplicação com Fastify e realizamos seu setup inicial.
- [x] Conhecemos o ESLint, as razões para usa-lo e como configura-lo.

### Capitulo 2 - Banco de dados

Nesse capitulo vimos como utilizar banco de dados na nossa aplicação. Vimos quais as formas de acessar um banco através do código e as suas diferenças. Além disso, vimos:

- [x] O que é e como configurar o Knex na nossa aplicação.
- [x] O que são e como criar migrations.
- [x] Como criar tabelas utilizando o queryBuilder Knex.
- [x] Como realizar queries com o Knex.
- [x] Como definir e acessar variáveis de ambiente.
- [x] Como tratar env com a lib de validação Zod.

### Capitulo 3 - Implementando as rotas

Aqui o conteúdo foi o core da projeto, definimos os requisitos funcionais e não funcionais e as regras de negócio da nossa aplicação. Abaixo uma lista dos assuntos abordados e tarefas realizadas durante esse capitulo:

- [x] Definição dos Requisitos funcionais, não funcionais e Regras de negocio:

  - [x] Requisitos Funcionais (RF):

    - [x] O usuário deve poder criar uma conta.
    - [x] O usuário deve poder obter um extrato da sua conta.
    - [x] O usuário deve poder visualizar uma transação única.
    - [x] O usuário deve poder listar todas transações que já ocorreram.

  - [x] Regras Não Funcionais (RNF):

    - [x] Será criado ao longo da aplicação.

  - [x] Regras de Negócios (RN):
    - [x] O usuário só pode visualizar transações que ele criou.
    - [x] Deve ser possível identificar o usuário entre as requisições.
    - [x] A transação pode do tipo crédito que somará ao valor total ou débito que será subtraído.

- [x] Compreensão e adição de plugins no Fastify.
- [x] Criação de transações.
- [x] Como adicionar tipagem no Knex.
- [x] Listagem de transações.
- [x] Resumo de transações.
- [x] Como utilizar cookies no Fastify.
- [x] Como validar existência de cookie.
- [x] Como configurar um hook global.

### Capitulo 4 - Testes automatizados

Nesse capitulo entendemos sobre a importância de realizar testes automatizados, incluindo os conceitos de testes unitários, testes de integração e testes e2e, assim como a importância da pirâmide de testes para se ter uma estratégia de testes sólida e eficiente. Durante as aulas nós:

- [x] Conhecemos os tipos e o que é a piramide de testes.

  - [x] **Testes unitários** são testes que validam o comportamento de uma única unidade de código, como uma função ou método. Eles são úteis para garantir que cada parte da aplicação esteja funcionando corretamente, sem depender de outras partes.

  - [x] **Testes de integração** são testes que validam a integração entre várias partes da aplicação, como a integração entre a camada de banco de dados e a camada de serviço. Eles são importantes para garantir que a aplicação esteja funcionando corretamente como um todo.

  - [x] **Testes e2e** (end-to-end) são testes que validam o comportamento da aplicação como um todo, simulando a interação do usuário com a aplicação. Eles são importantes para garantir que a aplicação esteja funcionando corretamente em todos os níveis, desde a camada de interface até a camada de banco de dados.

  - [x] A **pirâmide de testes** é uma estratégia que se baseia em ter mais testes unitários e menos testes de integração e e2e, pois testes unitários são mais rápidos e fáceis de escrever e manter do que outros tipos de testes.

- [x] Criamos testes para nossa API.

- [x] Categorizamos os testes criados.

- [x] Configuramos um banco de teste.

### Capitulo 5 - Preparando app para deploy

No capitulo final do módulo vimos:

- [x] Como preparar nossa aplicação para ir ao ar.
- [x] Configurações necessárias e pontos de atenção para o deploy.
- [x] Uso da ferramenta tsup para buildar o projeto.
- [x] Como fazer o deploy da nossa API REST na plataforma Render.

As requisições para testar a API estão disponíveis no botão abaixo e o link para acessar a API no ar está na descrição do repositório:

[![Run in Insomnia](https://insomnia.rest/images/run.svg)](https://github.com/MrRioja/nodejs-api-rest/blob/26ce5500dd1847b9d45281ff17d4189fa4ab7ca8/.github/Insomnia.json)

## Instalação

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com) e [Node.js](https://nodejs.org/en/). Além disso é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone git@github.com:MrRioja/nodejs-api-rest.git

# Acesse a pasta do projeto no terminal/cmd
$ cd nodejs-api-rest

# Instale as dependências
$ npm install
# Caso prefira usar o Yarn execute o comando abaixo
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ npm run dev
# Caso prefira usar o Yarn execute o comando abaixo
$ yarn dev

# O servidor iniciará na porta 3333 ou na porta definida no arquivo .env na variável PORT - acesse <http://localhost:3333>
```

## Tecnologias

[![My Skills](https://skillicons.dev/icons?i=nodejs,ts,eslint&perline=10&theme=dark)](https://skillicons.dev)

## Autor

<div align="center">
<img src="https://images.weserv.nl/?url=avatars.githubusercontent.com/u/55336456?v=4&h=100&w=100&fit=cover&mask=circle&maxage=7d" />
<h1>Luiz Rioja</h1>
<strong>Backend Developer</strong>
<br/>
<br/>

<a href="https://linkedin.com/in/luizrioja" target="_blank">
<img alt="LinkedIn" src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white"/>
</a>

<a href="https://github.com/mrrioja" target="_blank">
<img alt="GitHub" src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"/>
</a>

<a href="mailto:lulyrioja@gmail.com?subject=Fala%20Dev" target="_blank">
<img alt="Gmail" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" />
</a>

<a href="https://api.whatsapp.com/send?phone=5511933572652" target="_blank">
<img alt="WhatsApp" src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white"/>
</a>

<a href="https://join.skype.com/invite/tvBbOq03j5Uu" target="_blank">
<img alt="Skype" src="https://img.shields.io/badge/SKYPE-%2300AFF0.svg?style=for-the-badge&logo=Skype&logoColor=white"/>
</a>

<br/>
<br/>
</div>
