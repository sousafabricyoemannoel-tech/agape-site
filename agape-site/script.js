const produtos = [
  {
    nome: "Ágape Essência",
    preco: "189,00",
    imagem: "images/essencia.jpg"
  },
  {
    nome: "Ágape Carinho",
    preco: "289,00",
    imagem: "images/carinho.jpg"
  },
  {
    nome: "Ágape Amor Maior",
    preco: "389,00",
    imagem: "images/amormaior.jpg"
  }
];

const container = document.getElementById("produtos");

produtos.forEach(p => {
  container.innerHTML += `
    <div class="card">
      <img src="${p.imagem}">
      <h2>${p.nome}</h2>
      <p>R$ ${p.preco}</p>
    </div>
  `;
});