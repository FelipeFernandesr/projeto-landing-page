var setadireita = window.document.getElementById("setadireita")
var setaesquerda = window.document.getElementById("setaesquerda")
var leonardo = window.document.getElementById("leonardo")
var samanta = window.document.getElementById("samanta")
var bruna = window.document.getElementById("bruna")

function rolarParaDireita(){
    leonardo.style = "display:none"
    bruna.style = "display:flex"
    setadireita.style = "display:none"
    setaesquerda.style = "display:flex"
}

function rolarParaEsquerda(){
    bruna.style = "display:none"
    leonardo.style = "display:flex"
    setaesquerda.style = "display:none"
    setadireita.style = "display:flex"
}

