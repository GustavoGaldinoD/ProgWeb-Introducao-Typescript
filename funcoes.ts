// === funcoes ===

//funcao tradicional 
function saudacao(nome: string): string{
    return 'Ola, ${nome}'
}console.log(saudacao('camila'))

//Arrow function
const soma = (x: number, y: number): number => x + y;
console.log('soma', soma(2,3))

//funcao com valor padrao
function mensagem(texto: string = 'bem vindo(a)'){
    console.log(texto);
}

//funcao com o parametro opcional
function apresentar(nome?: string){
    if (nome){
        console.log('ola, ${nome}')
    }else{
        console.log('ola visitante')
    }
}