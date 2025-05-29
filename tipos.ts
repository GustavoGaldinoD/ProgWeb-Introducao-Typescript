//===TIPOS EM TYPESCRIPT===

//Tipos primitivos
let texto: string = 'Ola mundo!';
let numero: number = 42;
let ativo: boolean = true;

//Array
let numeros: number[] =  [1,2,3];
let palavras: Array<string> = ["Typescript", "e", "massa!"];

//Tuplas
let pessoa: [string, number] = ["Gabriela", 17]

//Enum -- enunciado
enum Cores{
    Verde,
    Azul,
    Rosa
}

let corFavorita: Cores = Cores.Rosa;

//Any (evitar sempre que possivel)
let dadoAleatorio: any = 5;
dadoAleatorio = "texto";
dadoAleatorio = true;

//Unknown (mais seguro que any)
let dadoDesconhecido: unknown = 10;

//Void
function mostrarAlerta() : void{
    console.log("Atencao! preste atencao na aula");
}

//Null e undefined
let nada: null = null;
let indefinido: undefined = undefined;

//Never (usado quando a funcao nunca retorna)
function erroFatal(mensagem: string) : never{
    throw new Error(mensagem)
}

//Aliases
type Usuario = {
    nome: string;
    idade: number;
}

let usuario1: Usuario = {nome: 'Gariela', idade: 17}