const perguntas = [
  {
    pergunta: "Qual é a função do elemento <div> em HTML?",
    respostas: 
    [ "Definir uma lista ordenada",
      "Agrupar elementos e criar seções",
      "Criar um link para outra página"],
    correta: 1
  },

  {
    pergunta: "O que significa CSS?",
    respostas: 
    ["Cascading Style Sheets",
    "Creative Style Syntax",
    "Computer Style System"],
    correta: 0
  },

  {
    pergunta: "Como se refere a um elemento específico em JavaScript utilizando seu ID?",
    respostas: [
    "getElementByAttribute()",
    "getElementById()",
    "getElementByClass()"],
    correta: 1
  },

  {
    pergunta: "Qual é a finalidade do seletor '' em CSS?",
    respostas: [
    "Selecionar todos os elementos",
    "Selecionar elementos com classe específica",
    "Selecionar elementos pelo seu ID"],
    correta: 0
  },

  {
    pergunta: "Qual é a função do operador '==' em JavaScript?",
    respostas: [
    "Verificar igualdade estrita (valor e tipo)",
    "Verificar igualdade de valor",
    "Verificar igualdade de tipo"],
    correta: 1
  },

  {
    pergunta: "Como se define um estilo inline em HTML?",
    respostas: [
    "Utilizando o elemento <style>",
    "Utilizando o elemento <link>",
    "Atribuindo um atributo 'style' diretamente ao elemento"],
    correta: 2
  },

  {
    pergunta: "Qual é a finalidade da função 'appendChild()' em JavaScript?",
    respostas: [
    "Remover um elemento do DOM",
    "Adicionar um novo elemento ao DOM como filho de um elemento existente",
    "Alterar o conteúdo de um elemento no DOM"],
    correta: 1
  },

  {
    pergunta: "Qual é a finalidade do evento 'onclick' em JavaScript?",
    respostas: [
    "Executar uma função quando o elemento é clicado",
    "Inserir estilos CSS em um elemento",
    "Definir uma classe CSS para um elemento"],
    correta: 0
  },

  {
    pergunta: "Como se faz um comentário de várias linhas em JavaScript?",
    respostas: [
    "// Este é um comentário de várias linhas //",
    "/ Este é um comentário de várias linhas */",
    "<!-- Este é um comentário de várias linhas -->"],
    correta: 1
  },

  {
    pergunta: "Qual é a finalidade do atributo 'href' em HTML?",
    respostas: [
    "Definir uma classe CSS",
    "Inserir um link para outra página",
    "Adicionar uma imagem"],
    correta: 1
  },
]

const quizz = document.querySelector('#quizz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas


//loop ou laço de repetição
for(const item of perguntas) {
  const quizzItem = template.content.cloneNode(true)
  quizzItem.querySelector('h3').textContent = item.pergunta

for(let resposta of item.respostas) {
  const dt = quizzItem.querySelector('dl dt').cloneNode(true)
  dt.querySelector('span').textContent = resposta
  dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
  dt.querySelector('input').value = item.respostas.indexOf(resposta)
  dt.querySelector('input').onchange = (event) => {
    const estaCorreta = event.target.value == item.correta

    corretas.delete(item)
    if(estaCorreta) {
    corretas.add(item)
}

mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
}

quizzItem.querySelector("dl").appendChild(dt)
}

quizzItem.querySelector('dl dt').remove()

  
  //Coloca as perguntas na tela
  quizz.appendChild(quizzItem)
}

