
let numeroTotalPrestacoes = parseInt(prompt("Digite o número total de prestações: "));


let prestacoesPagas = parseInt(prompt("Digite a quantidade de prestações pagas: "));


let valorPrestacao = parseFloat(prompt("Digite o valor atual da prestação: "));

o
let totalPago = prestacoesPagas * valorPrestacao;


let saldoDevedor = (numeroTotalPrestacoes - prestacoesPagas) * valorPrestacao;


console.log(`Total pago pelo consorciado: R$ ${totalPago.toFixed(2)}`);
console.log(`Saldo devedor: R$ ${saldoDevedor.toFixed(2)}`);
