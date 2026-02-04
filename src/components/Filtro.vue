<script lang="ts">
import type ICategoria from '@/interfaces/ICategoria';
import type { PropType } from 'vue';
import BarraPesquisa from './BarraPesquisa.vue';
import type IPratos from '@/interfaces/IPratos';

export default {
    props: {
        categorias: { type: Object as PropType<ICategoria[]>, required: true },
        receitas: { type: Object as PropType<IPratos[]>, required: true },
    },
    components: {
        BarraPesquisa,
    },
    emits: ['buscarCategoria']
}
</script>


<template>
    <aside class="filtro-box">
        <BarraPesquisa />
        <article class="categoria-box">
            <h3>Categorias</h3>
            <ul class="categoria-lista">
                <li v-for="categoria in categorias" :key="categoria.nome"
                    class="titulos">
                    {{ categoria.nome }}
                </li>
            </ul>
        </article>
        <article class="categoria-box">
            <h3>Receitas</h3>
            <ul class="categoria-lista">
                <li class="titulos">Todas</li>
                <li class="titulos">Salgadas</li>
                <li class="titulos">Doces</li>
            </ul>
        </article>
        <article class="categoria-box">
            <h3>Entre em Contato</h3>
            <ul class="categoria-lista">
                <li>Número: 4002-8922</li>
                <li>Email: cookinup@email.com</li>
            </ul>
        </article>
    </aside>
</template>


<style scoped>
.filtro-box {
    height: 100vh;
    width: 47rem;
    padding: 2.5rem;
    background-color: var(--cinza-claro);

    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 3rem;
}

.categoria-box {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 1rem;
}

.categoria-lista {
    display: flex;
    flex-direction: column;
    gap: .5rem;
}

.titulos {
    cursor: pointer;
    transition: color 1s;
}

.titulos:hover {
    color: var(--verde-medio);
}
</style>