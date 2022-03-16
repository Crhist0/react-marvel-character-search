# React app - Marvel Character Search

Aplicação React para busca de personagens na api da Marvel.

## Features

- Chamada para api externa
- Autocomplete no campo de busca

## Demo

Teste o demo [aqui](http://react-marvel-character-search.herokuapp.com/) (talvez precise remover o 'S' do 'HTTPS', e esperar uns 30 segundos o servidor heroku acordar 😅)

## Lessons Learned

Nesse projeto pratiquei busca em api externa no React, e implementei um autocomplete no campo de busca com o retorno da api em tempo real.

## Run Locally

Clone o projeto

```bash
  git clone https://github.com/Crhist0/react-marvel-character-search.git
```

Navegue até o diretorio

```bash
  cd react-marvel-character-search
```

Instale as dependências

```bash
  npm install
```

Crie um arquivo .env e insira as keys que a api da Marvel disponibiliza [aqui](https://developer.marvel.com/account)

```env
REACT_APP_PUBLICKEY=SUA-KEY-AQUI
REACT_APP_PRIVATEKEY=SUA-KEY-AQUI
```

Inicie o servidor

```bash
  npm run dev
```
