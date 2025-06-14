let valores = [8, 1, 7, 4, 2, 9]
valores.sort() // Ordena os valores do vetor em ordem crescente
console.log(valores) // Exibe o vetor completo


/*
for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} 
*/

for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
    // A variável pos assume os valores dos índices do vetor
}
