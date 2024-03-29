// Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
// Modifique a estrutura da função para que ela seja uma arrow function .
// Modifique as concatenações para template literals .
// Copie o código abaixo.

// function testingScope(escopo) {
//     if (escopo === true) {
//       var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//       console.log(ifScope);
//     } else {
//       var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
//     console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
//   }
// testingScope(true);

const testingScope = (escopo) => {
  escopo === true
    ? console.log("Não devo ser utilizada fora do meu escopo (if)")
    : console.log("Não devo ser utilizada fora meu escopo (else)");
};
//testingScope(true);

// Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

oddsAndEvens.sort(function (a, b) {
  return a - b;
});

//console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);

// Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// Bonus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .

const fatorial = (number) => {
  let fat = 1;
  for (let index = number; index > 0; index -= 1) {
    fat *= index;
  }
  return fat;
};

//console.log(fatorial(9));

const fatorial2 = (number) => (number > 0 ? number * fatorial2(number - 1) : 1);

//console.log(fatorial2(9));

// Crie uma função que receba uma frase e retorne qual a maior palavra.

const longestWord = (phrase) => {
  const words = phrase.split(" ");
  let biggest = words[0];
  for (let index = 1; index < words.length; index += 1) {
    words[index].length > biggest.length ? (biggest = words[index]) : biggest;
  }
  return console.log(biggest);
};

longestWord("Antônio foi no banheiro e não sabemos o que aconteceu");
