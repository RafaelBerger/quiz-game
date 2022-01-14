const dadosQuiz = [
  {
    pergunta: "Em qual ano a linguagem JavaScript foi criada?",
    a: "2015",
    b: "1970",
    c: "1995",
    d: "1983",
    correta: "1995",
  },
  {
    pergunta: "Qual o significado da sigla CSS?",
    a: "Cascading Style Sheets",
    b: "Hypertext Markup Language",
    c: "JavaScript Object Notation",
    d: "Cab Small Snacks",
    correta: "Cascading Style Sheets",
  },
  {
    pergunta: "Qual das opções é uma linguagem de programação?",
    a: "CSS",
    b: "C++",
    c: "HTML",
    d: "API",
    correta: "C++",
  },
  {
    pergunta:
      "O Desenvolvedor Web que trabalha com o Client Side é considerado:",
    a: "Front-end",
    b: "Fullstack",
    c: "Back-end",
    d: "Nenhuma das anteriores",
    correta: "Front-end",
  },
  {
    pergunta: "Qual das opções é um framework Back-End?",
    a: "React",
    b: "Vue.js",
    c: "Angular",
    d: "Django",
    correta: "Django",
  },
  {
    pergunta: "Qual das opções não é um banco de dados relacional?",
    a: "MySQL",
    b: "MongoDB",
    c: "MariaDB",
    d: "Nenhuma das anteriores",
    correta: "MongoDB",
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

function carregarQuiz() {
  //carrega a página com a pergunta atual

  perguntaEl.innerText = dadosQuiz[quizAtual].pergunta;
  a.innerText = dadosQuiz[quizAtual].a;
  b.innerText = dadosQuiz[quizAtual].b;
  c.innerText = dadosQuiz[quizAtual].c;
  d.innerText = dadosQuiz[quizAtual].d;
}

window.addEventListener("load", carregarQuiz());

function selecionar() {
  //armazena o texto do lado do input selecionado em um array

  const inputsRadio = document.querySelectorAll(".respostas");

  inputsRadio.forEach((resposta) => {
    if (resposta.checked === true) {
      respostasSelecionadas.push(resposta.nextElementSibling.innerText);
      quizAtual++;
    }
  });
}

let quizCorpo = document.querySelector("#container-quiz");

const verificaResposta = () => {
  //verifica quantas respostas estão certas e mostra ao usuário

  var respostasCorretas = 0;

  for (let index = 0; index < 6; index++) {
    if (respostasSelecionadas[index] == dadosQuiz[index].correta) {
      respostasCorretas++;
    }
  }

  quizCorpo.innerHTML = `<h1>Parabéns você concluiu o Quiz!</h1>
  <h2>Você acertou ${respostasCorretas} de ${dadosQuiz.length}</h2>
  <button id="btn" onclick="window.location.reload()">Voltar ao ínicio</button>`;
};

botao.addEventListener("click", () => {
  selecionar();

  if (quizAtual < dadosQuiz.length) {
    carregarQuiz();
    botao.innerText = "Submit";
  } else {
    verificaResposta();
    quizAtual = -1;
  }
});
