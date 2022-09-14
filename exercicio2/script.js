num = Number(prompt("Digite um número"));
tabuada = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`A tabuada de ${num} é:`)
for (let i in tabuada) {
    console.log(`${num} x ${tabuada[i]} = ${num*tabuada[i]}`);
}
