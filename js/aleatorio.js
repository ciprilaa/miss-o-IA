const nomes = ["Fernanda", "Giuliana", "Ana Luia", "Gabriella", "Amanda", "Davi", "Pricila"];
export function aleatorio (lista){
        const posicao = Math.floor(Math.random()* lista.length);
        return lista[posicao];
}
export const nome = aleatorio(nomes);