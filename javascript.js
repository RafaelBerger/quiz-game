const primeiraPergunta = {
  pergunta: "Em qual ano a linguagem JavaScript foi criada?",
  a: "2015",
  b: "1970",
  c: "1995",
  d: "1983",
  correta: "c",
};

const segundaPergunta = {
  pergunta: "Qual o significado da sigla CSS?",
  a: "Cascading Style Sheets",
  b: "Hypertext Markup Language",
  c: "JavaScript Object Notation",
  d: "Cab Small Snacks",
  correta: "a",
};

const terceiraPergunta = {
  pergunta: "Qual das opções é uma linguagem de programação?",
  a: "CSS",
  b: "Python",
  c: "HTML",
  d: "API",
  correta: "b",
};

const quartaPergunta = {
  pergunta: "O Desenvolvedor Web que trabalha com o Client Side é considerado:",
  a: "Front-end",
  b: "Fullstack",
  c: "Back-end",
  d: "Nenhuma das anteriores",
  correta: "a",
};

const perguntaEl = document.querySelector("#pergunta");
const a = document.querySelector("#a");
const b = document.querySelector("#b");
const c = document.querySelector("#c");
const d = document.querySelector("#d");
const botao = document.querySelector("#btn");

window.addEventListener("load", () => {
  perguntaEl.innerHTML = primeiraPergunta.pergunta;
  a.innerHTML = primeiraPergunta.a;
  b.innerHTML = primeiraPergunta.b;
  c.innerHTML = primeiraPergunta.c;
  d.innerHTML = primeiraPergunta.d;
});

botao.addEventListener("click", () => {});
