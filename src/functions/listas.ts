
export function funcaoDeVerificacaoDeItem(itemA: unknown[] | string[], itemB: unknown[]) {
    return itemA.every((itemListaA) => itemB.includes(itemListaA));
}


export function buscaBinaria<T extends {nome: string}>(arr: T[], alvo: string): number {
    let inicio = 0;
    let fim = arr.length - 1;

    while (inicio <= fim) {
        const meio = Math.floor((inicio + fim)/2);

        if (arr[meio].nome === alvo) {
            return meio;
        } else if(arr[meio].nome < alvo) {
            inicio = meio + 1
        } else {
            fim = meio - 1;
        }
    }

    return -1;
}