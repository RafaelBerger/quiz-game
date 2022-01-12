const dadosQuiz = [
  {
    pergunta: "Em qual ano a linguagem JavaScript foi criada?",
    a: "2015",
    b: "1970",
    c: "1995",
    d: "1983",
    correta: "c",
  },
  {
    pergunta: "Qual o significado da sigla CSS?",
    a: "Cascading Style Sheets",
    b: "Hypertext Markup Language",
    c: "JavaScript Object Notation",
    d: "Cab Small Snacks",
    correta: "a",
  },
  {
    pergunta: "Qual das opções é uma linguagem de programação?",
    a: "CSS",
    b: "C++",
    c: "HTML",
    d: "API",
    correta: "b",
  },
  {
    pergunta:
      "O Desenvolvedor Web que trabalha com o Client Side é considerado:",
    a: "Front-end",
    b: "Fullstack",
    c: "Back-end",
    d: "Nenhuma das anteriores",
    correta: "a",
  },
];

const perguntaEl = document.querySelector("#pergunta");
const a = document.querySelector("#a");
const b = document.querySelector("#b");
const c = document.querySelector("#c");
const d = document.querySelector("#d");
const botao = document.querySelector("#btn");

window.addEventListener("load", () => {
  //carrega a página com a primeira pergunta
  perguntaEl.innerText = dadosQuiz[0].pergunta;
  a.innerText = dadosQuiz[0].a;
  b.innerText = dadosQuiz[0].b;
  c.innerText = dadosQuiz[0].c;
  d.innerText = dadosQuiz[0].d;
});

function selecionar() {
  const inputsRadio = document.querySelectorAll(".respostas");

  inputsRadio.forEach((resposta) => {
    //pega o texto do lado do input selecionado
    if (resposta.checked === true) {
      console.log(resposta.nextElementSibling.innerText);
    }
  });
}

botao.addEventListener("click", () => {
  selecionar();
});
