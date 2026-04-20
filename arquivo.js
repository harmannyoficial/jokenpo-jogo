

// ENUM - GUARDA COCIGO REPETITIVO  COM MUITA ALTERAÇOES  
const GAME_MESSAGES = {
    WIN: 'Você ganhou! jogue novamente',
    LOSE: 'Perdeu! tenta na proxima.',
    DRAW: 'Empate! Jogue novamente.'
}
// ENUM - GUARDA COCIGO REPETITIVO  COM MUITA ALTERAÇOES 
const JOKEN = {
    TESOURA: 'tesoura',
    PAPEl: 'papel',
    PEDRAl: 'pedra'
}
//ARRAY 
const opcao = [JOKEN.PAPEl, JOKEN.PEDRAl, JOKEN.TESOURA];

//SORTEA O NOME  SOMA  SORTEIO 
function nomesorteado() {
    const indiceAleatorio = Math.floor(Math.random() * opcao.length);
    const nomeSorteado = opcao[indiceAleatorio];
    return nomeSorteado
}
console.log(nomesorteado())// resultado do sorteio 


// PARTICIPANTE PC  // GUARDA O NOME SORTEADO PARA NAO TROCA DE NOME A CADA CLIQUE 
function pcescolhe() {
    const pcescolhe = nomesorteado()
    return pcescolhe
}
console.log(pcescolhe())//mostra o nome do sorteio 

//CONTA PONTOS = FUNCÇÃO PODE SER USADA EM OUTROS 
//pc pontos 
let pontopc = 0
function contapontopc() {
    pontopc += 1
    console.log(pontopc)
    return pontopc
}
//meus pontos 
let pontos = 0
function contapontos() {
    pontos += 1
    console.log(pontos)
    return pontos
}


//              INICIO DA ESTRUTURA 
// PAPEL 
const button1 = document.querySelector('#button1')
const paragrafo1 = document.querySelector("#resultado")
const meuponto = document.querySelector('#meuponto')
const pcponto = document.querySelector('#pcponto')
const imgresultado = document.querySelector('#img-resultado')

//1°
button1.addEventListener('click', function () {
    const pc = pcescolhe() // GUARDA O NOME SORTEADO PARA NAO TROCA DE NOME A CADA CLIQUE 

    if ((button1.value === pc)) { //PAPEL
        paragrafo1.innerHTML = GAME_MESSAGES.DRAW   // troca a mensagem 
        imgresultado.src = "./assets.img/2papel.img" //troca a imagem 
        imgresultado.style = "block" // faz a imagem a parecer  utilizar no html style=" none" para sumir 
        console.log(pc)
        console.log(` PAPEL ${GAME_MESSAGES.DRAW}`)

    }
    else if (button1.value != pc && pc === button2.value) {//pedra
        paragrafo1.innerHTML = GAME_MESSAGES.WIN // troca a mensagem 
        meuponto.innerHTML = contapontos() // conta os pontos 
        imgresultado.src = "./assets.img/2pedra.img"//troca a imagem 
        imgresultado.style = "block"  // faz a imagem a parecer  utilizar no html style=" none" para sumir
        console.log(pc) // GUARDA O NOME SORTEADO PARA NAO TROCA DE NOME A CADA CLIQUE 
        console.log(GAME_MESSAGES.WIN)
    }
    else if (button1.value != pc && pc === button3.value) {//tesoura
        paragrafo1.innerHTML = GAME_MESSAGES.LOSE // troca a mensagem 
        pcponto.innerHTML = contapontopc() // conta os pontos 
        imgresultado.src = "./assets.img/2tesoura.img"//troca a imagem 
        imgresultado.style = "block" // faz a imagem a parecer  utilizar no html style=" none" para sumir
        console.log(pc) // GUARDA O NOME SORTEADO PARA NAO TROCA DE NOME A CADA CLIQUE 
        console.log(GAME_MESSAGES.LOSE)
    }
})



// PEDRA 
const button2 = document.querySelector('#button2')
//2°
button2.addEventListener('click', function () {
    const pc = pcescolhe()// GUARDA O NOME SORTEADO PARA NAO TROCA DE NOME A CADA CLIQUE 

    if ((button2.value === pc)) { //PEDRA
        paragrafo1.innerHTML = GAME_MESSAGES.DRAW   // troca a mensagem 
        imgresultado.src = "./assets.img/2pedra.img" //troca a imagem 
        imgresultado.style = "block" // faz a imagem a parecer  utilizar no html style=" none" para sumir 
        console.log(pc) // GUARDA O NOME SORTEADO PARA NAO TROCA DE NOME A CADA CLIQUE 
        console.log(` PEDRA ${GAME_MESSAGES.DRAW}`)
    }
    else if (button2.value != pc && pc === button3.value) {//TESOURA
        paragrafo1.innerHTML = GAME_MESSAGES.WIN // troca a mensagem 
        meuponto.innerHTML = contapontos() // conta os pontos 
        imgresultado.src = "./assets.img/2tesoura.img" //troca a imagem 
        imgresultado.style = "block" // faz a imagem a parecer  utilizar no html style=" none" para sumir 
        console.log(pc)// GUARDA O NOME SORTEADO PARA NAO TROCA DE NOME A CADA CLIQUE 
        console.log(GAME_MESSAGES.WIN)
    }
    else if (button2.value != pc && pc === button1.value) {//papel
        paragrafo1.innerHTML = GAME_MESSAGES.LOSE // troca a mensagem
        pcponto.innerHTML = contapontopc() // conta os pontos
        imgresultado.src = "./assets.img/2papel.img" //troca a imagem 
        imgresultado.style = "block" // faz a imagem a parecer  utilizar no html style=" none" para sumir 
        console.log(pc) // GUARDA O NOME SORTEADO PARA NAO TROCA DE NOME A CADA CLIQUE 
        console.log(GAME_MESSAGES.LOSE)
    }
})



//TESOURA
const button3 = document.querySelector('#button3')
//3°
button3.addEventListener('click', function () {
    const pc = pcescolhe() // GUARDA O NOME SORTEADO PARA NAO TROCA DE NOME A CADA CLIQUE 

    if ((button3.value === pc)) {   //TESOURA 
        paragrafo1.innerHTML = GAME_MESSAGES.DRAW   // troca a mensagem 
        imgresultado.src = "./assets.img/2tesoura.img" //troca a imagem 
        imgresultado.style = "block" // faz a imagem a parecer  utilizar no html style=" none" para sumir 
        console.log(pc)
        console.log(` TESOURA ${GAME_MESSAGES.DRAW}`)
    }
    else if (button3.value != pc && pc === button1.value) {//papel
        paragrafo1.innerHTML = GAME_MESSAGES.WIN // troca a mensagem 
        meuponto.innerHTML = contapontos() // conta os pontos 
        imgresultado.src = "./assets.img/2papel.img" //troca a imagem 
        imgresultado.style = "block" // faz a imagem a parecer  utilizar no html style=" none" para sumir 
        console.log(pc)
        console.log(GAME_MESSAGES.WIN)
    }
    else if (button3.value != pc && pc === button2.value) {//PEDRA
        paragrafo1.innerHTML = GAME_MESSAGES.LOSE // troca a mensagem
        pcponto.innerHTML = contapontopc() // conta os pontos
        imgresultado.src = "./assets.img/2pedra.img"//troca a imagem 
        imgresultado.style = "block" // faz a imagem a parecer  utilizar no html style=" none" para sumir
        console.log(pc)
        console.log(GAME_MESSAGES.LOSE)
    }

})

