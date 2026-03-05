// Informações da padaria
// escreva 3 variaveis contendo nome, endereco e telefone
let nomePadaria = "Padaria Bairro";
let endereco = "Bauru, SP";
let Telefone = "(00) 99999-9999";

//escreva 3 variaveis com preços dos produtos

let CapuccinoPreco = 8.0;
let ChocoQuenteGourmetPreco = 12.0;
let LatteBaunilhaGourmetPreco = 10.0;

//escreva 3 variaveis do controle do estoque

let QuantCapuccino = 50;
let QuantChocoQuenteGourmet = 50;
let QuanLatteBaunilhaGourmet = 50;

//array de produtos
const produtos = [
    "Croissant de Manteiga Artesanal",
    "Bolo de Cenoura com Chocolate",
    "Café Espresso Tradicional",
    "Café Espresso Duplo",
    "Café com Canela Artesanal",
    "Macchiato Cremoso",
    "Croissant de Chocolate Belga",
];

// array de categorias

const categorias = ["Doces & Acompanhamentos", "Bebidas"];

// Objeto produto completo
const CaféEspressoDuplo = {
    nome: "Café Espresso Duplo",
    preco: "R$ " + 7.0,
    estoque: 50,
    categoria: "Bebidas",
};

// Exemplo de var (não recomendado)

var cafe = "Quente";

// Constante que não pode ser alterada

const IngregientesEstoque = [
    "Pó de café",
    "Farinha",
    "Chocolate",
    "Baunilha",
    "Manteiga",
    "Cenoura",
];

// Let que pode ser reatribuída

let QuantPao = 50;
QuantPao = 10;

// Crie um array de objetos

const listagemProdutos1 = [
    {
        nome: "Café Espresso Tradicional",
        preco: "R$ " + 5.0,
        estoque: 5,
        categoria: "Bebidas",
    },
    {
        nome: "Bolo de Cenoura com Chocolate",
        preco: "R$ " + 8.0,
        estoque: 10,
        categoria: "Doces & Acompanhamentos",
    },
    {
        nome: "Croissant de Manteiga Artesanal",
        preco: "R$ " + 7.5,
        estoque: 43,
        categoria: "Doces & Acompanhamentos",
    },
    {
        nome: "Macchiato Cremoso",
        preco: "R$ " + 6.5,
        estoque: 34,
        categoria: "Bebidas",
    },
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

//👋 Uma função que exiba uma mensagem de boas-vindas

//🛒 Uma função que calcule o subtotal de itens (receba preço e quantidade)

function calcularSubTotal(valor, quantidade) {
    // multiplicar o valor x quantidade
    return valor * quantidade;
}

// colocar valor e quantidade
let subTotal = calcularSubTotal(100, 3);
// mostra no console o resultado
console.log("Subtotal: R$ " + subTotal.toFixed(2));

//🎁 Uma função que calcule desconto (receba valor e percentual de desconto)

function calcularDesconto(valor, porcentagem) {
    // logica para calcular porcentagem
    const valorDesconto = valor * (porcentagem / 100);
    const valorFinal = valor - valorDesconto;

    // retorna
    return {
        valorProduto: valor,
        desconto: valorDesconto,
        total: valorFinal,
    };
}

// Passar valor e porcentagem de desconto
let resultado = calcularDesconto(300, 15);
console.log("Valor produto: R$ " + resultado.valorProduto.toFixed(2));
console.log("Desconto: R$ " + resultado.desconto.toFixed(2));
console.log("Valor final: " + resultado.total.toFixed(2));

//🚚 Uma função que calcule a taxa de entrega baseada na distância

function calcularTaxaEntrega(distanciaKm) {
    if (distanciaKm <= 5) {
        console.log("A sua entrega é gratuita");
    } else if (distanciaKm <= 10) {
        console.log("Sua entrega custa R$ 15,00");
    } else {
        console.log("Sua entrega custa R$ 25,00");
    }
}
calcularTaxaEntrega(20);

// funcao tradicional
function calcularPreco(preco, produto) {
    return preco * produto;
}

calcularPreco(10, 40);

const listagemProdutos = [
    {
        nome: "Café Espresso Tradicional",
        preco: 5.0,
        estoque: 5,
        categoria: "Bebidas",
    },
    {
        nome: "Bolo de Cenoura com Chocolate",
        preco: 8.0,
        estoque: 10,
        categoria: "Doces & Acompanhamentos",
    },
    {
        nome: "Croissant de Manteiga Artesanal",
        preco: 7.5,
        estoque: 43,
        categoria: "Doces & Acompanhamentos",
    },
    {
        nome: "Macchiato Cremoso",
        preco: 6.5,
        estoque: 34,
        categoria: "Bebidas",
    },
];

// TESTES

document.addEventListener("DOMContentLoaded", () => {
    const campoBusca = document.getElementById("campoBusca");

    if (!campoBusca) {
        console.error("Elemento campoBusca não encontrado.");
        return;
    }

    const linhas = document.querySelectorAll("#tabelaProdutos tbody tr");

    campoBusca.addEventListener("input", () => {
        const texto = campoBusca.value.toLowerCase().trim();

        linhas.forEach((linha) => {
            const conteudo = linha.textContent.toLowerCase();
            linha.style.display = conteudo.includes(texto) ? "" : "none";
        });
    });
});

// carrinho

let carrinho = [];

document.addEventListener("DOMContentLoaded", () => {
    const botoes = document.querySelectorAll(".btn-adicionar");

    botoes.forEach((botao) => {
        botao.addEventListener("click", (evento) => {
            const linha = evento.target.closest("tr");

            const nome = linha.children[1].textContent;
            const precoTexto = linha.children[3].textContent;

            const preco = parseFloat(
                precoTexto.replace("R$", "").replace(",", "."),
            );

            adicionarAoCarrinho(nome, preco);
        });
    });
});

function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome, preco });

    console.log(carrinho);

    atualizarCarrinho();
}

function atualizarCarrinho() {
    const lista = document.getElementById("listaCarrinho");
    const totalSpan = document.getElementById("totalCarrinho");

    lista.innerHTML = "";
    let total = 0;

    carrinho.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;

        lista.appendChild(li);

        total += item.preco;
    });

    totalSpan.textContent = total.toFixed(2);
}
