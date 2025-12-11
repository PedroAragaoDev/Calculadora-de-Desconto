    function atualizarCalculo(){
    const valorOriginal =Number( document.querySelector('#valorOriginal').value);
    const Desconto = Number (document.querySelector('#percentualDeDesconto').value)/100;
    const quantidadeDescontada = document.querySelector('#valorDescontado');
    const valorFinall = document.querySelector("#valorFinal");

    const calculo = (valorOriginal * Desconto)
    
    quantidadeDescontada.innerHTML = `Desconto em reais: R$: ${calculo.toFixed(2)}`
    valorFinall.innerHTML = `Preço final com Desconto: R$ ${(valorOriginal - calculo).toFixed(2)}`
    
}

    document.querySelector('#percentualDeDesconto').addEventListener('input',atualizarCalculo)

