<div align="center">
   <h3>Iframe test</h3>
</div>

<p align="center">
   <a href="https://www.instagram.com/aurigod97/">
      <img alt="Aurino Junior" src="https://img.shields.io/badge/-aurigod97-0390fc?style=flat&logo=Instagram&logoColor=white&color=blue" />
   </a>
    <a href="https://www.linkedin.com/in/aurino-junior-7718a4158/">
      <img alt="Aurino Junior" src="https://img.shields.io/badge/-Aurino%20Junior-0390fc?style=flat&logo=Linkedin&logoColor=white&color=blue" />
   </a>
</p>

📍 **Conteúdo**

- [Contexto](#blue_book-contexto)
- [Como usar](#beers-como-usar)

## :blue_book: Contexto

Esse projeto foi criado para servir como apoio nas transmissão de msg entre iframes e apps.

## :beers: Como usar

1. Clone o repositorio e instale as dependencias com `yarn`.
2. Inicie com `yarn start`
3. No outro projeto adicione a url local deste projeto no src do iframe.

**Exemplo:**

```js
<iframe
  id="xpto-iframe"
  src="http://localhost:3004"
  width="100%"
  style={{
    border: "none",
    height: "0",
    minHeight: "500px",
  }}
/>
```
