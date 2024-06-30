let A = parseFloat(prompt("Digite o valor de A:")); //converte uma string em um número decimal
let B = parseFloat(prompt("Digite o valor de B:"));
let C = parseFloat(prompt("Digite o valor de C:"));
if (A + B < C) {
    console.log("A soma de A + B é menor que C.");
} else {
    console.log("A soma de A + B NÃO é menor que C.");
}


let nome = prompt("Digite o nome da pessoa:");
let sexo = prompt("Digite o sexo da pessoa (M para masculino ou F para feminino):").toUpperCase(); //strings que converte todos os caracteres da string em letras maiúsculas
let estadoCivil = prompt("Digite o estado civil da pessoa (SOLTEIRO, CASADO, DIVORCIADO, VIÚVO):").toUpperCase();
if (sexo === "F" && estadoCivil === "CASADA") {
    let tempoCasada = prompt("Digite o tempo de casamento (anos):");
    console.log(`Nome: ${nome}`);
    console.log(`Sexo: ${sexo}`);
    console.log(`Estado Civil: ${estadoCivil}`);
    console.log(`Tempo de Casamento: ${tempoCasada} anos`);
} else {
    console.log(`Nome: ${nome}`);
    console.log(`Sexo: ${sexo}`);
    console.log(`Estado Civil: ${estadoCivil}`);
}


let numero = parseInt(prompt("Digite um número:"));
if (numero % 2 === 0) {
    console.log(`O número ${numero} é par.`);
} else {
    console.log(`O número ${numero} é ímpar.`);
}


let A = parseInt(prompt("Digite o valor de A:"));
let B = parseInt(prompt("Digite o valor de B:"));
let C; // variável para armazenar o resultado
// verifica se A e B são iguais
if (A === B) {
    C = A + B; 
} else {
    C = A * B; 
console.log(`O resultado da operação é: ${C}`)


let numero = parseFloat(prompt("Digite um número:"));
let resultado;
if (numero > 0) {
    resultado = numero * 2;
} else {
    resultado = numero * 3;
console.log(`O resultado é: ${resultado}`);


let valor1 = prompt("Digite o primeiro valor booleano (true ou false):");
let valor2 = prompt("Digite o segundo valor booleano (true ou false):");
valor1 = (valor1.toLowerCase() === "true");  
valor2 = (valor2.toLowerCase() === "true");
if (valor1 && valor2) {
    console.log("Ambos os valores são VERDADEIROS.");
} else {
    console.log("Ambos os valores não são VERDADEIROS.");
}


let numero = parseInt(prompt("Digite um número:"));
let resultado;
if (numero % 2 === 0) {
    resultado = numero + 5;
} else {
    resultado = numero + 8;
}
console.log(`O resultado da operação é: ${resultado}`);


let numero1 = parseInt(prompt("Digite o primeiro número inteiro:"));
let numero2 = parseInt(prompt("Digite o segundo número inteiro (diferente do primeiro):"));
let numero3 = parseInt(prompt("Digite o terceiro número inteiro (diferente dos dois primeiros):"));
let maior, meio, menor;
// encontrar o maior valor
if (numero1 > numero2 && numero1 > numero3) {
    maior = numero1;
    if (numero2 > numero3) {
        meio = numero2;
        menor = numero3;
    } else {
        meio = numero3;
        menor = numero2;
    }
} else if (numero2 > numero1 && numero2 > numero3) {
    maior = numero2;
    if (numero1 > numero3) {
        meio = numero1;
        menor = numero3;
    } else {
        meio = numero3;
        menor = numero1;
    }
} else {
    maior = numero3;
    if (numero1 > numero2) {
        meio = numero1;
        menor = numero2;
    } else {
        meio = numero2;
        menor = numero1;
    }
}
console.log(`Os números em ordem decrescente são: ${maior}, ${meio}, ${menor}`);


let peso = parseFloat(prompt("Digite o peso (em kg):"));
let altura = parseFloat(prompt("Digite a altura (em metros):"));
// Calcular o IMC
let imc = peso / (altura * altura);
let condicao;
if (imc < 18.5) {
    condicao = "Abaixo do peso";
} else if (imc >= 18.5 && imc < 25) {
    condicao = "Peso normal";
} else if (imc >= 25 && imc < 30) {
    condicao = "Acima do peso";
} else {
    condicao = "Obeso";
}
// o resultado
console.log(`O IMC calculado é: ${imc.toFixed(2)}`); // casas decimais
console.log(`Condição: ${condicao}`);