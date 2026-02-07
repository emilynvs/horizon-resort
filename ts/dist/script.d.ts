interface Beneficio {
    titulo: string;
    topicos: string[];
}
interface MonteRoteiro {
    titulo: string;
    descricao: string;
}
declare const cardMonteRoteiro: HTMLElement;
declare const conteudoMonteRoteiro: MonteRoteiro[];
declare const beneficio: HTMLElement;
declare const beneficios: Beneficio[];
declare function renderizarPagina(): void;
declare const carouselContainer: HTMLDivElement;
declare function criarCarouselMonteRoteiro(): void;
//# sourceMappingURL=script.d.ts.map