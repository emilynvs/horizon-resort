interface Beneficio {
  titulo: string;
  topicos: string[];
}

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

function renderizarPagina() {
  beneficio.innerHTML = "";

  beneficios.forEach((b) => {
    const elemento = document.createElement("div");

    elemento.innerHTML = `
       <div class="card" style="width: 26rem">
            <div class="card-body">
              <span class="card-title"><strong>${b.titulo}</strong></span>

              <p class="card-text">
                - ${b.topicos[0]} <br/>
                - ${b.topicos[1]} <br/>
                - ${b.topicos[2]} <br/>
                - ${b.topicos[3]} <br/> 
              </p>
            </div>
          </div>
          <br/>
    `;

    beneficio.appendChild(elemento);
  });
}

renderizarPagina();
