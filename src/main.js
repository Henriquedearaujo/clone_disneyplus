document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("[data-tab-button]");
  const question = document.querySelectorAll("[data-faq-question]");

  const heroSection = document.querySelector('.hero');
  const alturaHero = heroSection.clientHeight;

  window.addEventListener('scroll', function(){
      const posicaoAtual = window.scrollY;

      if (posicaoAtual < alturaHero) {
        ocutaElemtosDoHeader();
      } else {
        exibeElementosDoHeader();
      }
  })
  
  // Seção de atrações, programação ddas abas
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (botao) {
      const abaAlvo = botao.target.dataset.tabButton;
      const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
      esconderTodasAbas();
      aba.classList.add("shows__list--is-active");
      removeBotaoAtivo()
      botao.target.classList.add('shows__tabs__button--is-active')
    });
  }
  // Seção FAQ, Accordion
  for (let i = 0; i < question.length; i++) {
    question[i].addEventListener('click', abreOuFechaResposta);
  }
});

function ocutaElemtosDoHeader() {
  const header = document.querySelector('header');
  header.classList.add('header--is-hidden');
}

function exibeElementosDoHeader() {
  const header = document.querySelector('header');
  header.classList.remove('header--is-hidden');
}

function abreOuFechaResposta(elemento) {
  const classe = 'faq__questions__item--is-open';
  const elementoPai = elemento.target.parentNode;

  elementoPai.classList.toggle(classe)
}

function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("shows__tabs__button--is-active");
    }
}


function esconderTodasAbas() {
  const tadsContainer = document.querySelectorAll("[data-tab-id]");

  for (let i = 0; i < tadsContainer.length; i++) {
    tadsContainer[i].classList.remove("shows__list--is-active");
  }
}
