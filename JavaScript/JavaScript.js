function selecionarComida(comida) {
    let selecionadoComida = document.querySelector(".selecaoComida");
    if (selecionadoComida !== null) {
        selecionadoComida.classList.remove("selecaoComida");
    }

    comida.classList.add("selecaoComida");
}
function selecionarBebida(bebida) {
    let selecionadoBebida = document.querySelector(".selecaoBebida");
    if (selecionadoBebida !== null) {
        selecionadoBebida.classList.remove("selecaoBebida");
    }

    bebida.classList.add("selecaoBebida");
}
function selecionarSobremesa(sobremesa) {
    let selecionadoSobremesa = document.querySelector(".selecaoSobremesa");
    if (selecionadoSobremesa !== null) {
        selecionadoSobremesa.classList.remove("selecaoSobremesa");
    }

    sobremesa.classList.add("selecaoSobremesa");
    let checkSelecionadoComida = document.querySelector(".selecaoComida");
    let checkSelecionadoBebida = document.querySelector(".selecaoBebida");
    let checkSelecionadoSobremesa = document.querySelector(".selecaoSobremesa");
    let botaoFinalizar = document.querySelector(".botao");
    console.log(botaoFinalizar)
    if (checkSelecionadoComida !== null && checkSelecionadoBebida !== null && checkSelecionadoSobremesa !== null) {
        botaoFinalizar.classList.add("botaoVerde")
        console.log("ola")
    }

    botaoFinalizar.classList.remove("botaoVerde")
}
//function confirmarPedido() {
//    let selecionadoComida = document.querySelector(".selecaoComida");
//    let selecionadoBebida = document.querySelector(".selecaoBebida");
//    let selecionadoSobremesa = document.querySelector(".selecaoSobremesa");
//    if (selecionadoComida !== null && selecionadoBebida !== null && selecionadoSobremesa !== null) {
//        botao.classList.add("botaoVerde")
//    }
//
//    botao.classList.remove("botaoVerde")
//}