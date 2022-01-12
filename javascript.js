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

let quizAtual = 0;
let respostasSelecionadas = [];

const perguntaEl = document.querySelector("#pergunta");
const a = document.querySelector("#a");
const b = document.querySelector("#b");
const c = document.querySelector("#c");
const d = document.querySelector("#d");
const botao = document.querySelector("#btn");

window.addEventListener("load", carregarQuiz());

function carregarQuiz() {
  //carrega a página com a primeira pergunta
  perguntaEl.innerText = dadosQuiz[quizAtual].pergunta;
  a.innerText = dadosQuiz[quizAtual].a;
  b.innerText = dadosQuiz[quizAtual].b;
  c.innerText = dadosQuiz[quizAtual].c;
  d.innerText = dadosQuiz[quizAtual].d;
}

function selecionar() {
  const inputsRadio = document.querySelectorAll(".respostas");

  inputsRadio.forEach((resposta) => {
    //pega o texto do lado do input selecionado
    if (resposta.checked === true) {
      respostasSelecionadas.push(resposta.nextElementSibling.innerText);
      quizAtual++;
    }
  });
}

const verificaResposta = () => {
  //FAZER: fazer com que a opção correta do objeto seja igual á resposta selecionada, atualmente a opção do objeto é "C" e o array é a resposta em texto
  if (dadosQuiz[quizAtual].correta == respostasSelecionadas[0]) {
    console.log("deu certo");
  }
};

botao.addEventListener("click", () => {
  selecionar();

  if (quizAtual < dadosQuiz.length) {
    carregarQuiz();
  } else {
    alert(respostasSelecionadas);
  }

  console.log("funcionando");
});

console.log(dadosQuiz[quizAtual].correta);
