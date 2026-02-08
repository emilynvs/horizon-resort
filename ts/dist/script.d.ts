interface Beneficio {
    titulo: string;
    topicos: string[];
}
interface MonteRoteiro {
    titulo: string;
    descricao: string;
}
interface Pacotes {
    titulo: string;
    descricao: string;
    topicos: string[];
}
declare const cardMonteRoteiro: HTMLElement;
declare const conteudoMonteRoteiro: MonteRoteiro[];
declare const carouselContainer: HTMLDivElement;
declare const beneficio: HTMLElement;
declare const beneficios: Beneficio[];
declare const pacote: HTMLElement;
declare const listaPacote: Pacotes[];
declare function criarCardsBeneficios(): void;
declare function criarCarouselMonteRoteiro(): void;
declare function criarPacotes(): void;
declare function renderizarPagina(): void;
//# sourceMappingURL=script.d.ts.map