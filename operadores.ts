//===Operadores===
let a: number = 10;
let b: number = 5;

//Aritimeticos
console.log('soma:', a + b);
console.log('subtracao:', a - b);
console.log('multiplicacao:', a + b);
console.log('divisao:', a / b);
console.log('resto:', a % b);

//Relacionais
console.log('igual:', a == b);
console.log('diferente:', a != b);
console.log('maior que:', a > b);
console.log('menor que:', a < b);
console.log('maior ou igual que:', a >= b);
console.log('menor ou igual que:', a <= b);

//Identidade estrita
console.log('identico:', a === b);
console.log('nao identico:', a !== b);

//logicos
let x: boolean = true;
let y: boolean = false;

console.log('AND:', x && y);
console.log('OR:', x || y);
console.log('NOT', !x);

//operador condicional(terminario)
let idade: number = 17;
let acesso = idade >= 18 ? 'Pode beijar na boca' : 'Nao pode'; // condicao ? valor se true : valor se false
