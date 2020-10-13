let num = [5, 8, 2, 9, 3];
num.push(1); //adiciona o valor 1 ao final do array.
// num[5] = 1; causa o mesmo efeito da linha de cima.
num.sort(); //coloca o vetor 'num' em ordem.
console.log(num);
console.log(`O vetor tem ${num.length} posições.`);
console.log(`O primeiro valor do vetor é o ${num[0]}`);
// Uma das maneiras de se atribuir um valor dentro de um array, é dizendo a posição e o valor que será atribuido.
//ex: num[5] = 6; colocara o valor 6 no indice 5 do array 'num'.

//.push() Adiciona um valor dentro de um array, colocará na ultima posição.
//ex: num.push(7) // colocará o valor 7 na ultima posição do array.

//.sort() Colocará os elementos ordenados em ordem crescente.
//ex: num.sort() // colocará o array em ordem.