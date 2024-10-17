const valorLinha = 0.10;
const valorParOlhos = 1.00;
const valorChaveiro = 1.54;
const valorDiariaProducao = 5.88;

function calcularCusto (quantidadeLinha, quantidadeParOlhos, quantidadeChaveiros, diasProducao) {
    const custoLinha = quantidadeLinha * valorLinha;
    const custoParOlhos = quantidadeParOlhos * valorParOlhos;
    const custoChaveiro = quantidadeChaveiros * valorChaveiro;
    const custoProducao = diasProducao * valorDiariaProducao;

    const precoCusto = custoLinha + custoParOlhos + custoChaveiro + custoProducao;

    const lucro = precoCusto * 1.2;

    return {
        precoCusto: precoCusto.toFixed(2),
        lucro: lucro.toFixed(2)
    }

}

const quantidadeLinha = 12;
const quantidadeParOlhos = 1;
const quantidadeChaveiros = 1;
const diasProducao = 6;

const resultado = calcularCusto(quantidadeLinha, quantidadeParOlhos, quantidadeChaveiros, diasProducao);
console.log(`O custo total do serviço é: R$${resultado.precoCusto}`);
console.log(`Seu preço final é: R$${resultado.lucro}`)