// CRIE UMA ARRAY QUE RECEBA O NOME DE 5 INTEGRANTES MULHERES PARA A BANDA 

let banda = ["Lady", "Madonna", "Beyonce", "Rihanna", "Taylor"];
console.log(banda);

// Inserir mais duas mulheres na banda no final da array - PUSH
banda.push("Britney", "Miley");
console.log(banda);

// // Substituir a integrante na posição 3 - SPLICE 
// POSIÇÃO É != DE ÍNDICE, SE QUERO A POSIÇÃO 3, ENTÃO O ÍNDICE É O 2
//QUERO SUBSTITUIR 1 ITEM
//NO CASO, SUBSTITUIR BEYONCE POR DEMI
banda.splice(2, 1, "Demi");
console.log(banda);


// // Remover a última integrante que arrumou confusão - POP
banda.pop();

// // Inserir uma nova integrante no final da array 'PUSH
banda.push("Witney");

// // Remover a primeira integrante que vai mudar de banda - SHIFT
banda.shift();

// // Inserir uma integrante nova no começo da array - UNSHIFT
banda.unshift("Adele");

// // Organizar as integrantes em ordem contrária - REVERSE
banda.reverse();


