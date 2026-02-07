interface Beneficio {
  titulo: string;
  topicos: string[];
}

interface MonteRoteiro {
  titulo: string;
  descricao: string;
}

const cardMonteRoteiro = document.getElementById(
  "monteSeuRoteiro",
) as HTMLElement;
const conteudoMonteRoteiro: MonteRoteiro[] = [
  {
    titulo: "Café da manhã com vista para o mar",
    descricao:
      "Desfrute de um café da manhã completo em nossa varanda com vista panorâmica para o oceano, com frutas frescas, pães artesanais e sucos naturais.",
  },
  {
    titulo: "Passeio de stand-up paddle",
    descricao:
      "Aproveite a manhã para explorar a costa do resort em um stand-up paddle, cercado por águas cristalinas e paisagens paradisíacas.",
  },
  {
    titulo: "Snorkeling",
    descricao:
      "Mergulhe e descubra a vida marinha da região com snorkel e máscara, acompanhado de guias especializados.",
  },
  {
    titulo: "Almoço temático",
    descricao:
      "Deguste pratos da culinária local em um almoço especial preparado por nossos chefs, com ingredientes frescos e regionais.",
  },
  {
    titulo: "Tarde livre na piscina",
    descricao:
      "Relaxe nas piscinas do resort ou aproveite o sol em uma espreguiçadeira, com serviço de drinks à disposição.",
  },
  {
    titulo: "Jantar à luz de velas",
    descricao:
      "Finalize o dia com um jantar romântico à luz de velas à beira-mar, com menu exclusivo e atendimento personalizado.",
  },
  {
    titulo: "Show noturno",
    descricao:
      "Encante-se com apresentações ao vivo e música no lounge do resort para terminar a noite com diversão e relaxamento.",
  },
  {
    titulo: "Trilha ecológica",
    descricao:
      "Explore a natureza local com uma caminhada guiada por trilhas ecológicas, ideal para toda a família.",
  },
  {
    titulo: "Oficina de culinária",
    descricao:
      "Aprenda a preparar pratos típicos da região com chefs especializados e leve suas receitas para casa.",
  },
];

const beneficio = document.getElementById("beneficio") as HTMLElement;
const beneficios: Beneficio[] = [
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

const carouselContainer = document.getElementById(
  "monteSeuRoteiroCarousel",
) as HTMLDivElement;

function criarCarouselMonteRoteiro() {
  const carouselContainer = document.getElementById(
    "monteSeuRoteiroCarousel",
  ) as HTMLDivElement;
  if (!carouselContainer) return;

  const cardsPorSlide = 3;

  const grupos: MonteRoteiro[][] = [];
  for (let i = 0; i < conteudoMonteRoteiro.length; i += cardsPorSlide) {
    grupos.push(conteudoMonteRoteiro.slice(i, i + cardsPorSlide));
  }

  carouselContainer.innerHTML = `
    <div class="carousel-inner">
      ${grupos
        .map(
          (grupo, index) => `
          <div class="carousel-item ${index === 0 ? "active" : ""}">
            <div class="d-flex justify-content-center gap-3">
              ${grupo
                .map(
                  (r) => `
                  <div class="card" style="width: 18rem;">
                    <img src="..." class="card-img-top" alt="${r.titulo}">
                    <div class="card-body">
                      <h5 class="card-title">${r.titulo}</h5>
                      <p class="card-text">${r.descricao}</p>
                      <a href="#" class="btn btn-primary">Adicionar ao roteiro</a>
                    </div>
                  </div>
                `,
                )
                .join("")}
            </div>
          </div>
        `,
        )
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

function renderizarPagina() {
  criarCardsBeneficios();
  criarCarouselMonteRoteiro();
}

renderizarPagina();
