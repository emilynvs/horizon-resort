"use strict";
const cardMonteRoteiro = document.getElementById("monteSeuRoteiro");
const conteudoMonteRoteiro = [
    {
        titulo: "Café da manhã com vista para o mar",
        descricao: "Desfrute de um café da manhã completo em nossa varanda com vista panorâmica para o oceano, com frutas frescas, pães artesanais e sucos naturais.",
    },
    {
        titulo: "Passeio de stand-up paddle",
        descricao: "Aproveite a manhã para explorar a costa do resort em um stand-up paddle, cercado por águas cristalinas e paisagens paradisíacas.",
    },
    {
        titulo: "Snorkeling",
        descricao: "Mergulhe e descubra a vida marinha da região com snorkel e máscara, acompanhado de guias especializados.",
    },
    {
        titulo: "Almoço temático",
        descricao: "Deguste pratos da culinária local em um almoço especial preparado por nossos chefs, com ingredientes frescos e regionais.",
    },
    {
        titulo: "Tarde livre na piscina",
        descricao: "Relaxe nas piscinas do resort ou aproveite o sol em uma espreguiçadeira, com serviço de drinks à disposição.",
    },
    {
        titulo: "Jantar à luz de velas",
        descricao: "Finalize o dia com um jantar romântico à luz de velas à beira-mar, com menu exclusivo e atendimento personalizado.",
    },
    {
        titulo: "Show noturno",
        descricao: "Encante-se com apresentações ao vivo e música no lounge do resort para terminar a noite com diversão e relaxamento.",
    },
    {
        titulo: "Trilha ecológica",
        descricao: "Explore a natureza local com uma caminhada guiada por trilhas ecológicas, ideal para toda a família.",
    },
    {
        titulo: "Oficina de culinária",
        descricao: "Aprenda a preparar pratos típicos da região com chefs especializados e leve suas receitas para casa.",
    },
];
const carouselContainer = document.getElementById("monteSeuRoteiroCarousel");
const beneficio = document.getElementById("beneficio");
const beneficios = [
    {
        titulo: "Conforto & Estrutura",
        topicos: [
            "Suítes de alto padrão",
            "Camas king size",
            "Vista para o mar / montanha",
            "Ar-condicionado, spa, piscina aquecida",
        ],
    },
    {
        titulo: " Experiências Exclusivas",
        topicos: [
            "Passeios guiados",
            "Experiência gastronômica",
            "Jantares temáticos",
            "Aulas (mergulho, culinária, yoga)",
        ],
    },
    {
        titulo: "Lazer & Diversão",
        topicos: [
            "Piscinas",
            "Área kids",
            "Shows noturnos",
            "Trilhas, esportes aquáticos",
        ],
    },
];
const pacote = document.getElementById("pacotes");
const listaPacote = [
    {
        titulo: "Pacote Essencial Horizon",
        descricao: "Ideal para quem quer relaxar sem pensar em nada",
        topicos: [
            "Suíte de alto padrão",
            "Café da manhã com vista para o mar",
            "Tarde livre na piscina com drinks",
            "Show noturno",
            "Piscina + spa",
        ],
    },
    {
        titulo: "Pacote Experiência Premium",
        descricao: "Para quem busca exclusividade e experiências marcantes",
        topicos: [
            "Suíte premium com vista panorâmica",
            "Café da manhã completo",
            "Passeio de stand-up paddle ou snorkeling",
            "Snorkeling com guia especializado",
            "Almoço temático",
            "Oficina de culinária",
            "Show noturno",
        ],
    },
    {
        titulo: "Pacote Aventura & Natureza",
        descricao: "Equilíbrio perfeito entre lazer e contato com a natureza",
        topicos: [
            "Suíte confortável",
            "Café da manhã",
            "Trilha ecológica guiada",
            "Snorkeling",
            "Tarde livre na piscina",
            "Jantar temático",
            "Esportes aquáticos",
        ],
    },
    {
        titulo: "Pacote Romance Inesquecível",
        descricao: "Experiência pensada para conexão e momentos especiais",
        topicos: [
            "Suíte com vista para o mar",
            "Café da manhã na varanda",
            "Experiência gastronômica exclusiva",
            "Jantar à luz de velas",
            "Experiência gastronomica",
            "Jantar temático",
            "Spa",
        ],
    },
    {
        titulo: "Pacote Família Completa",
        descricao: "Diversão garantida para adultos e crianças",
        topicos: [
            "Suíte família",
            "Café da manhã",
            "Área kids",
            "Piscinas",
            "Experiência gastronomica",
            "Atividades recreativas durante o dia",
            "Trilha com a família",
        ],
    },
];
function criarCardsBeneficios() {
    beneficio.innerHTML = "";
    beneficios.forEach((b) => {
        const elemento = document.createElement("div");
        elemento.innerHTML = `
       <div class="card" style="width: 26rem">
            <div class="card-body">
              <span class="card-title"><strong>${b.titulo}</strong></span>

              <p class="card-text">
                    ${b.topicos.map((t) => `- ${t}`).join("<br/>")}
              </p>
            </div>
          </div>
          <br/>
    `;
        beneficio.appendChild(elemento);
    });
}
function criarCarouselMonteRoteiro() {
    const carouselContainer = document.getElementById("monteSeuRoteiroCarousel");
    if (!carouselContainer)
        return;
    const cardsPorSlide = 3;
    const grupos = [];
    for (let i = 0; i < conteudoMonteRoteiro.length; i += cardsPorSlide) {
        grupos.push(conteudoMonteRoteiro.slice(i, i + cardsPorSlide));
    }
    carouselContainer.innerHTML = `
    <div class="carousel-inner">
      ${grupos
        .map((grupo, index) => `
          <div class="carousel-item ${index === 0 ? "active" : ""}">
            <div class="d-flex justify-content-center gap-3">
              ${grupo
        .map((r) => `
                  <div class="card" style="width: 18rem;">
                    <img src="..." class="card-img-top" alt="${r.titulo}">
                    <div class="card-body">
                      <h5 class="card-title">${r.titulo}</h5>
                      <p class="card-text">${r.descricao}</p>
                      <a href="#" class="btn btn-primary">Adicionar ao roteiro</a>
                    </div>
                  </div>
                `)
        .join("")}
            </div>
          </div>
        `)
        .join("")}
    </div>

    <button class="carousel-control-prev" type="button" data-bs-target="#monteSeuRoteiroCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#monteSeuRoteiroCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  `;
}
function criarPacotes() {
    const card = listaPacote
        .map((p) => {
        return `
     <div class="card h-100"> 
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${p.titulo}</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">${p.descricao}</h6>
          <p class="card-text">${p.topicos.map((t) => `· ${t}`).join("<br/>")}</p>
          <button class="btn btn-primary">Escolher esse</button>
        </div>
      </div>
    `;
    })
        .join("");
    pacote.innerHTML = card;
}
function renderizarPagina() {
    criarCardsBeneficios();
    criarCarouselMonteRoteiro();
    criarPacotes();
}
renderizarPagina();
//# sourceMappingURL=script.js.map