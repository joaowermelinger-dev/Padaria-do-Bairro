// Informações da padaria
// escreva 3 variaveis contendo nome, endereco e telefone
let nomePadaria = "Padaria Bairro";
let endereco = "Bauru, SP"
let Telefone = "(00) 99999-9999"

//escreva 3 variaveis com preços dos produtos

let CapuccinoPreco = 8.00
let ChocoQuenteGourmetPreco = 12.00
let LatteBaunilhaGourmetPreco = 10.00

//escreva 3 variaveis do controle do estoque

let QuantCapuccino = 50
let QuantChocoQuenteGourmet = 50
let QuanLatteBaunilhaGourmet = 50


//array de produtos
const produtos = ["Croissant de Manteiga Artesanal", "Bolo de Cenoura com Chocolate", "Café Espresso Tradicional", "Café Espresso Duplo", "Café com Canela Artesanal", "Macchiato Cremoso", "Croissant de Chocolate Belga"]

// array de categorias

const categorias = ["Doces & Acompanhamentos", "Bebidas"]

// Objeto produto completo
const CaféEspressoDuplo = {
    nome: "Café Espresso Duplo",
    preco: "R$ " + 7.00,
    estoque: 50,
    categoria: "Bebidas"
}

// Exemplo de var (não recomendado)

var cafe = "Quente"

// Constante que não pode ser alterada

const IngregientesEstoque = ["Pó de café", "Farinha", "Chocolate", "Baunilha", "Manteiga", "Cenoura"]

// Let que pode ser reatribuída

let QuantPao = 50
QuantPao = 10

// Crie um array de objetos

const listagemProdutos = [
    {
        nome: "Café Espresso Tradicional",
        preco: "R$ " + 5.00,
        estoque: 5,
        categoria: "Bebidas"
    },
    {
        nome: "Bolo de Cenoura com Chocolate",
        preco: "R$ " + 8.00,
        estoque: 10,
        categoria: "Doces & Acompanhamentos"
    },
    {
        nome: "Croissant de Manteiga Artesanal",
        preco: "R$ " + 7.50,
        estoque: 43,
        categoria: "Doces & Acompanhamentos"
    },
    {
        nome: "Macchiato Cremoso",
        preco: "R$ " + 6.50,
        estoque: 34,
        categoria: "Bebidas"
    }
];

// Crie um funcao que sauda o cliente de acordo com o horario que ele entra no site

function saudacao() {
    const hora = new Date().getHours();

    if (hora <= 12) {
        alert("Bom dia");
    } else if (hora <= 18) {
        alert("Boa Tarde");
    } else {
        alert("Boa Noite");
    }
    
}

saudacao()