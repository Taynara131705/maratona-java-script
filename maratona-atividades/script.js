//crie um programa que peça ao usuário um valor em graus celsius e converta para fahrenheit//
function converterParaFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
let celsius = prompt("Digite a temperatura em graus Celsius:");
celsius = Number(celsius);
let fahrenheit = converterParaFahrenheit(celsius);
alert(`${celsius}°C é equivalente a ${fahrenheit}°F.`);

//solicite ao usuário a base e a altura de um triangulo e calcule sua área//
function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}
let base = prompt("Digite o valor da base do triângulo:");
let altura = prompt("Digite o valor da altura do triângulo:");
base = Number(base);
altura = Number(altura);
let area = calcularAreaTriangulo(base, altura);

//peça ao usuário um numero e exiba o seu quadrado e seu cubo//

function calcularQuadrado(numero) {
    return numero * numero;
}
function calcularCubo(numero) {
    return numero * numero * numero;
}
let number = prompt("Digite um número:");
number = Number(number);
let quadrado = calcularQuadrado(numero);
let cubo = calcularCubo(numero);
alert(`O quadrado de ${number} é ${quadrado}.\nO cubo de ${number} é ${cubo}.`);



//solicite  dois números ao usuário e exiba a potencia do  primeiro numero elevado ao segundo//
function calcularPotencia(bases, expoente) {
    return Math.pow(bases, expoente);
}
let bases = prompt("Digite o primeiro número (base):");
let expoente = prompt("Digite o segundo número (expoente):");
bases = Number(bases);
expoente = Number(expoente);
let resultados = calcularPotencia(bases, expoente);
alert(`${bases} elevado a ${expoente} é igual a ${resultados}.`);


//escreva um programa que peça ao usuário um numero e informe se ele está entre 1 e 100//

let numero = prompt("Por favor, insira um número:");
numero = Number(numero);
if (numero >=1 && numero <= 100){
    alert("O número está entre 1 e 100.");
}else{
    alert("O número não está entre 10 e 100.");
}

//Implemente uma função que receba  a idade de uma pessoa e retorne uma mensagem informando se ela é criança , adolescente ou adulta//

function classificarIdade(idade) {
    if (idade >= 0 && idade <= 12) {
        return "Você é uma criança.";
    } else if (idade >= 13 && idade <= 17) {
        return "Você é um(a) adolescente.";
    } else if (idade >= 18) {
        return "Você é um(a) adulto(a).";
    } else {
        return "Idade inválida.";
    }
}
let idade = prompt("Digite a sua idade:");
idade = Number(idade);

let mensagem = classificarIdade(idade);
alert(mensagem);

//crie um programa que solicite um mês de 1 á 12 e informe quantos dias esse mês possui //
function diasNoMes(mes) {
    switch (mes) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return "Este mês tem 31 dias.";
        case 4:
        case 6:
        case 9:
        case 11:
            return "Este mês tem 30 dias.";
        case 2:
            return "Fevereiro geralmente tem 28 dias, mas em anos bissextos tem 29.";
        default:
            return "Mês inválido. Por favor, insira um número entre 1 e 12.";
    }
}
let mes = prompt("Digite um número de 1 a 12 para saber quantos dias o mês tem:");
mes = Number(mes);

let resultado = diasNoMes(mes);
alert(resultado);

//escreva um programa que peça ao usuário um número e verifique se ele é positivo , negativo ou zero//

let numeros = prompt("Por favor, insira um número:");
numeros = Number(numeros);
if (numero > 0) {
    alert("O número é positivo.");
} else if (numero < 0) {
    alert("O número é negativo.");
} else if (numero === 0) {
    alert("O número é zero.");
} else {
    alert("Entrada inválida. Por favor, insira um número válido.");
}
//crie uma função que aceita dois números e retorna da divisão do primeiro pelo segundo . Lide com divisões por zero//
function dividirNumeros(dividendo, divisor) {
    if (divisor === 0) {
        return "Erro: Divisão por zero não é permitida.";
    } else {
        return dividendo / divisor;
    }
}
let dividendo = prompt("Digite o primeiro número (dividendo):");
let divisor = prompt("Digite o segundo número (divisor):");
dividendo = Number(dividendo);
divisor = Number(divisor);
let resul = dividirNumeros(dividendo, divisor);
alert(resul);


//escreva uma função que recebe uma lista de strings e retorna a lista ordenada em ordem alfabética //

function ordenarListaAlfabetica(lista) {
    return lista.sort();
}
let listaStrings = ["morango", "jaca", "pera", "abacate", "aacerola"];
let listaOrdenada = ordenarListaAlfabetica(listaStrings);
console.log("Lista ordenada:", listaOrdenada);

//escreva uma função que aceita um array de inteiros e retorna o maior numero presente//

function encontrarMaiorNumero(array) {
    if (array.length === 0) {
        return "O array está vazio.";
    }
    let maiorNumero = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maiorNumero) {
            maiorNumero = array[i];
        }
    }

    return maiorNumero;
}
let numeracao = [10, 5, 20, 8, 15];
let maiorNumero = encontrarMaiorNumero(numeracao);
console.log("O maior número é:", maiorNumero);

//implemente uma função que recebe uma string e retorna a mesma string invertida em java script//

function inverterString(str) {
    return str.split('').reverse().join('');
}
let texto = "Olá, Mundo!";
let textoInvertido = inverterString(texto);
console.log("Texto original:", texto);
console.log("Texto invertido:", textoInvertido);

//Escreva um programa que imprima todos os números impares de 1 a 100//

function imprimirNumerosImpares() {
    for (let i = 1; i <= 100; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}
imprimirNumerosImpares();

//escreva um programa que imprima todos os números de 1 50 e indique quais são múltiplos de 5//

function imprimirNumeros() {
    for (let i = 1; i <= 50; i++) {
        if (i % 5 === 0) {
            console.log(`${i} - Múltiplo de 5`);
        } else {
            console.log(i);
        }
    }
}
imprimirNumeros();

//faça um programa que peça um numero ao usuário e calcule a sema de todos os números de 1 até esse número//

function calcularSoma(n) {
    let soma = 0;
    for (let i = 1; i <= n; i++) {
        soma += i; // Adiciona o número atual à soma
    }
    return soma;
}
let numer = prompt("Digite um número:");
numer = Number(numer);
if (!isNaN(numer) && numero > 0) {
    let resultado = calcularSoma(numer);
    alert(`A soma de todos os números de 1 até ${numer} é ${resultado}.`);
} else {
    alert("Por favor, insira um número válido maior que 0.");
}

//crie um array de objetos "produtos" e escreva uma função que calcule o valor total em estoque //

const produtos = [
    { nome: "Produto A", preco: 10.00, quantidade: 5 },
    { nome: "Produto B", preco: 20.50, quantidade: 3 },
    { nome: "Produto C", preco: 15.75, quantidade: 10 },
    { nome: "Produto D", preco: 5.00, quantidade: 2 },
];
function calcularValorTotalEstoque(produtos) {
    let total = 0;
    for (let produto of produtos) {
        total += produto.preco * produto.quantidade; 
    }

    return total;
}
const valorTotal = calcularValorTotalEstoque(produtos);
console.log(`O valor total em estoque é: R$ ${valorTotal.toFixed(2)}`);

//implemente um método em um objeto "estudante" que retorna se o estudante está aprovado ou reprovado ,com base em suas notas//

const estudante = {
    nome: "Isabel",
    notas: [7.5, 8.0, 6.5], // Array de notas do estudante
    media: function() {
        const soma = this.notas.reduce((acc, nota) => acc + nota, 0);
        return soma / this.notas.length;
    },
    status: function() {
        const media = this.media();
        if (media >= 7) {
            return "Aprovado";
        } else {
            return "Reprovado";
        }
    }
};
console.log(`O estudante ${estudante.nome} está ${estudante.status()}.`);

//crie uma função que dada uma lista de objetos "funcionário" , calcule a soma dos salários //

const funcionarios = [
    { nome: "Gabriel", salario: 3000 },
    { nome: "Laura", salario: 2500 },
    { nome: "Augusto", salario: 4000 },
    { nome: "Mariana", salario: 3500 },
];
function calcularSomaSalarios(funcionarios) {
    let soma = 0;
    for (let funcionario of funcionarios) {
        soma += funcionario.salario; // Adiciona o salário do funcionário à soma
    }

    return soma;
}
const totalSalarios = calcularSomaSalarios(funcionarios);
console.log(`A soma dos salários é: R$ ${totalSalarios.toFixed(2)}`);

//crie uma função que recebe  uma array de objetos "produtos" e calcule a média de preços

const produto = [
    { nome: "Produto A", preco: 10.00 },
    { nome: "Produto B", preco: 20.50 },
    { nome: "Produto C", preco: 15.75 },
    { nome: "Produto D", preco: 5.00 },
];
function calcularMediaPrecos(produto) {
    if (produto.length === 0) {
        return 0;
    }

    let soma = 0;
    for (let produto of produto) {
        soma += produto.preco; // Adiciona o preço do produto à soma
    }
    return soma / produtos.length;
}
const mediaPrecos = calcularMediaPrecos(produto);
console.log(`A média de preços é: R$ ${mediaPrecos.toFixed(2)}`);

//escreva uma função que recebe um array de objetos "aluno" e retorna a lista de alunos que tem nota acima de 8 //
const alunos = [
    { nome: "Gabriel", nota: 7.5 },
    { nome: "Laura", nota: 8.5 },
    { nome: "Augusto", nota: 9.0 },
    { nome: "Mariana", nota: 6.0 },
    { nome: "Nicolas", nota: 8.2 },
];
function alunosComNotaAlta(alunos) {
    return alunos.filter(aluno => aluno.nota > 8);
}
const listaAlunosComNotaAlta = alunosComNotaAlta(alunos);
console.log("Alunos com nota acima de 8:");
listaAlunosComNotaAlta.forEach(aluno => {
    console.log(`${aluno.nome} - Nota: ${aluno.nota}`);
});

//implemente uma função que aceita uma array de objetos 'funcionário" e retorna o funcionário com o maior salario//



const funcionario = [
    { nome: "Maria", salario: 3000 },
    { nome: "José", salario: 2500 },
    { nome: "Ana", salario: 4000 },
    { nome: "Pedro", salario: 3500 },
];
function encontrarFuncionarioComMaiorSalario(funcionario) {
    if (funcionario.length === 0) {
        return null; // Retorna null se o array estiver vazio
    }

    let funcionarioMaiorSalario = funcionario[0];
    for (let funcionario of funcionario) {
        if (funcionario.salario > funcionarioMaiorSalario.salario) {
            funcionarioMaiorSalario = funcionario;
        }
    }
  return funcionarioMaiorSalario; 
}
const funcionarioComMaiorSalario = encontrarFuncionarioComMaiorSalario(funcionarios);
if (funcionarioComMaiorSalario) {
    console.log(`O funcionário com o maior salário é: ${funcionarioComMaiorSalario.nome} - Salário: R$ ${funcionarioComMaiorSalario.salario}`);
} else {
    console.log("Não há funcionários na lista.");

    //escreva uma função que dada uma lista de objetos " pessoa", retorne as pessoas que tem mais de 30  anos//
}
const pessoas = [
    { nome: "Carlos", idade: 25 },
    { nome: "Ana", idade: 35 },
    { nome: "João", idade: 40 },
    { nome: "Mariana", idade: 28 },
    { nome: "Pedro", idade: 33 },
];
function pessoasComMaisDe30Anos(pessoas) {
    return pessoas.filter(pessoa => pessoa.idade > 30); // Retorna pessoas com mais de 30 anos
}

const listaPessoasComMaisDe30 = pessoasComMaisDe30Anos(pessoas);
console.log("Pessoas com mais de 30 anos:");
listaPessoasComMaisDe30.forEach(pessoa => {
    console.log(`${pessoa.nome} - Idade: ${pessoa.idade}`);
});