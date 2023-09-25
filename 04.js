
let saldo = 500.0;


let valorCheque = parseFloat(prompt("Digite o valor do cheque: "));


saldo = saldo + valorCheque;


console.log(`Novo saldo após a entrada do cheque: R$ ${saldo.toFixed(2)}`);
