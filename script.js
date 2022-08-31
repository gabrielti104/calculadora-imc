let calcular = document.getElementById('calcular')

function imc(){

    let nome = document.getElementById('nome').value
    let altura = document.getElementById('altura').value
    let peso = document.getElementById('peso').value
    let resultado = document.getElementById('resultado')


if(nome !== '' && altura !== '' && peso !== ''){

    let valorIMC = (peso / (altura * altura))

    if(valorIMC < 18.4){
        tipoIMC = 'abaixo do peso'
    }else if(valorIMC > 18.5 && valorIMC < 24.9){
        tipoIMC = 'peso normal'
    }else if(valorIMC > 25.0 && valorIMC < 29.9){
        tipoIMC = 'excesso de peso'
    }else if(valorIMC > 30.0 && valorIMC < 34.9){
        tipoIMC = 'obesidade grau I'
    }else if(valorIMC > 35.0 && valorIMC< 39.9){
        tipoIMC = 'obesidade grau II'
    }else{
        tipoIMC =  'obesidade grau III'
    }

    resultado.textContent = `${nome} o seu IMC é ${valorIMC.toFixed(2)} e você está ${tipoIMC}`
} else{
    resultado.textContent = 'Preencha todos os campos'
}
}

calcular.addEventListener('click', imc)