let valorLinha = 0.10;
let valorParOlhos = 1.00;
let valorChaveiro = 1.54;
let valorHoraProducao = 3.50; //horas

function botaoCalcular() {

    let quantidadeLinha = document.getElementById("quantidade__linha").value;
    let quantidadeParOlhos = document.getElementById("quantidade__par__olhos").value;
    let quantidadeChaveiros = document.getElementById("quantidade__chaveiros").value;
    let horasProducao = document.getElementById("horas__procucao").value;

    let custoLinha = quantidadeLinha * valorLinha;
    let custoParOlhos = quantidadeParOlhos * valorParOlhos;
    let custoChaveiro = quantidadeChaveiros * valorChaveiro;
    let custoProducao = horasProducao * valorHoraProducao;

    let precoCusto = (custoLinha + custoParOlhos + custoChaveiro + custoProducao);
    let lucro = (precoCusto * 1.3);

    let resultadoCusto = document.getElementById("resultado__custo");
    resultadoCusto.innerHTML = `O custo total do serviço é: <span style="font-weight: 700;">R$${precoCusto.toFixed(2)}</span>`;
    let resultadoLucro = document.getElementById("resultado__preco");
    resultadoLucro.innerHTML = `O preço final deste produto é: <span style="font-weight: 700;">R$${lucro.toFixed(2)}</span>`;

    // console.log(`O custo total do serviço é: R$${precoCusto.toFixed(2)}`);
    // console.log(`O preço final deste produto é: R$${lucro.toFixed(2)}`); 
}