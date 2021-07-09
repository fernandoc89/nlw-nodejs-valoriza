## NLW Valoriza

## Descrição

<p>
   <em>
     API onde usuários podem deixar elogios para outros usuários.
  </em>
</p>
<br>

<br>  
  
## Stacks
<p>
<a>
  <img alt="TypeScript" width="35px" height="64px" src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg">
</a>
<a>
  <img alt="NodeJs" width="35px" height="64px" src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg">
</a>
</p>

<br>

## Bibliotecas

  - bcryptjs
  - class-transformer
  - express
  - express-async-errors
  - jsonwebtoken
  - reflect-metadata
  - sqlite3
  - typeorm
  - uuid

<br>

## Regras de negócio

- Cadastro de usuários
  - [] Não é permitido cadastrar mais de um usuário com o mesmo e-mail
  - [] Não é permitido cadastrar usuário sem e-mail com

- Cadastro de tags
  - [] Não é permitido cadastrar mais de uma tag com o mesmo nome
  - [] Não é permitido cadastrar tag sem nome
  - [] Não é permitido cadastro por usuário que não sejam administradores

- Cadastro de elogios
  - [] Não é permitido um usuário cadastrar um elogio para si
  - [] Não é permitido cadastrar elogios para usuário inválido
  - [] O usuário precisa estar autenticado na aplicação
