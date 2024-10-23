let valorLinha = 0.10;
let valorParOlhos = 0.50;
let valorChaveiro = 1.54;
let valorHoraProducao = 3.50; //horas

let resultadoCusto = document.getElementById("resultado__custo");
let resultadoLucro = document.getElementById("resultado__preco");

function botaoCalcular() {

    let quantidadeLinha = document.getElementById("quantidade__linha").value;
    let quantidadeParOlhos = document.getElementById("quantidade__par__olhos").value;
    let quantidadeChaveiros = document.getElementById("quantidade__chaveiros").value;
    let horasProducao = document.getElementById("horas__producao").value;

    let custoLinha = quantidadeLinha * valorLinha;
    let custoParOlhos = quantidadeParOlhos * valorParOlhos;
    let custoChaveiro = quantidadeChaveiros * valorChaveiro;
    let custoProducao = horasProducao * valorHoraProducao;

    let precoCusto = (custoLinha + custoParOlhos + custoChaveiro + custoProducao);
    let lucro = (precoCusto * 1.3);

    resultadoCusto.innerHTML = `<p class="conteudo__resultado__texto" id="resultado__custo">O custo total deste produto é: 
<span style="font-weight: 700;">R$${precoCusto.toFixed(2)}</span></p>`;
    resultadoLucro.innerHTML = `<p class="conteudo__resultado__texto" id="resultado__custo">O preço final deste produto é: 
<span style="font-weight: 700;">R$${lucro.toFixed(2)}</span></p>`;
    mostrarResultado();
}

function mostrarResultado() {
    let resultado = document.getElementById("resultado");
    if (resultado.classList.contains("mostrar")) {
        resultado.classList.remove("mostrar");
    } else {
        resultado.classList.add("mostrar");
    }

}

function botaoNovoPreco() {
    document.getElementById("quantidade__linha").value = "";
    document.getElementById("quantidade__par__olhos").value = "";
    document.getElementById("quantidade__chaveiros").value = "";
    document.getElementById("horas__producao").value = "";
    resultadoCusto.innerHTML = "";
    resultadoLucro.innerHTML = "";
    mostrarResultado();
}