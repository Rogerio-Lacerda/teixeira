const btnEntrar = document.querySelector('#btn-entrar');
const popup = document.querySelector('.popup-wrapper');

btnEntrar.addEventListener("click", () => {
  popup.style.display = "block";
});

popup.addEventListener("click", (event) => {
  const saiba = event.target.classList[0];
  
  if (
    saiba === "popup-close" ||
    saiba === "popup-link" ||
    saiba === "popup-wrapper"
    ) {
      popup.style.display = "none";
    }
  });




// Menu Hamburguer

const menuHamburguer = document.querySelector('.menu-hamburguer');

function ativarMenu(){
  const headerMenu = document.querySelector('.header-menu');
  headerMenu.classList.toggle('ativar-menu');
}

menuHamburguer.addEventListener('click', ativarMenu);


//Filtrar
const botaoFiltrar = document.querySelector('.filtrar');

function ativarFiltrar(){
  const filtrar = document.querySelector(".form-orcamento");
  filtrar.classList.toggle('ativar');
}


function ativarParagrafo(){
  const filtrarParagrafo = document.querySelector(".filtrar-p");
  filtrarParagrafo.classList.toggle('desligado-p');
  filtrarParagrafo.classList.toggle('filtrar-tamanho');
}

function ativarTamanho() {
  const filtrarParagrafo = document.querySelector(".filtrar");
  filtrarParagrafo.classList.toggle("filtrar-tamanho");
}


botaoFiltrar.addEventListener('click', ativarFiltrar);
botaoFiltrar.addEventListener("click", ativarParagrafo);
botaoFiltrar.addEventListener("click", ativarTamanho);

