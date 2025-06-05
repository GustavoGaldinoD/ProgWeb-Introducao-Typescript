// === arrays e metodos de manipulacao ===

let notas: number[] = [6,7.8,5];

//forEach
//realisa a interacao de colecoes como arrays ou lista
notas.forEach(n => console.log('Nota', n));


//map
// criar um novo array com os resultados da chamada de uma funcao fornecida
let notasAjustadas = notas.map(n => n + 0.5);

//filter
//filtra os valores de um arrya com base nas condicoes fornecidas
let aprovados = notas.filter(n => n >= 6);

//push e pop
notas.push(10); //adiciona um elemento no final do array
notas.pop(); //remvger um elemento do final do array