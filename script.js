//O Índice de Massa Corporal (IMC) é calculado dividindo o peso em quilos pela altura ao quadrado em metros. A fórmula é: 
//IMC = peso (kg) / altura (m) x altura (m) 
function calcularIMC () { 

let altura = parseFloat(document.querySelector ('#altura').value);
let peso = parseFloat(document.querySelector ('#peso').value);

if (!altura || !peso) {
     document.getElementById ('resultado').textContent ='Por favor, insira valores válidos';
    return;
}


let IMC = peso / (altura * altura);

document.getElementById ('resultado').textContent = `Seu IMC é ${IMC.toFixed(2)}`
}

document.getElementById('calcular').addEventListener('click', calcularIMC)
