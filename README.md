# Intro Component with Sign Up Form

Essa é uma solução para o [Desafio: "Intro Component with Sign Up Form" do Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Os desafios que esse site oferece ajuda desenvolvedores a melhorar suas habilidades de código!

## O Desafio

### Requisitos

Usuários devem poder ver:

- O layout ideal para o conteúdo dependendo do tamanho da tela do dispositivo

- Estados hover para todos os elementos interativos da página

- Mensagem de erro quando o formulário for submetido se:
  - Algum campo estiver vazio
  - O e-mail não for formatado corretamente

## Tecnologias Utilizadas

- HTML

- CSS

- JavaScript

## Aprendizado

- Pratiquei validação de formulários com JavaScript.

- Aprendi a identificar se o que foi digitado, pelo usuário, no campo de e-mail é um formato válido ou não. Segue código abaixo:

``` javascript
    const email = emailInput.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailValido = false;
    } else {
        emailValido = true;
    }
```

## Preview

![Preview do Projeto](./design/intro-component-with-signup-form.gif)
