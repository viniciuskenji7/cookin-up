<script lang="ts">
import type IPratos from '@/interfaces/IPratos';
import Pratos from './Pratos.vue';
import { obterPratos } from '@/http';
import BotaoPrincipal from './BotaoPrincipal.vue';
import type { Pagina } from './ConteudoPrincipal.vue';
import type { PropType } from 'vue';
import { funcaoDeVerificacaoDeItem } from '@/functions/listas';

export default {

    props: {
        ingredientes: {type: Array as PropType<string[]>, required: true}
    },

    data() {
        return {
            pratos: [] as IPratos[],
            conteudo: 'SelecionarIngredientes' as Pagina,
        }
    },
    async created() {
        const pratos = await obterPratos();

        this.pratos = pratos.filter((prato) => {
            const fazerPrato = funcaoDeVerificacaoDeItem(prato.ingredientes, this.ingredientes);
            return fazerPrato;
        })
    },
    components: {
        Pratos,
        BotaoPrincipal
    },
    emits: ['editarLista']
}
</script>


<template>
    <section class="selecionar__pratos">
        <h1 class="cabecalho titulo__pratos">Receitas</h1>
        <h3 class="paragrafo-lg subtitulo__pratos">Resultados encontrados: {{ pratos.length }}</h3>
        <p v-if="pratos.length > 0" class="paragrafo-lg">
            Veja as opções de receitas que encontramos com os ingredientes que você tem por aí!
        </p>

        <p v-else class="paragrafo-lg">
            Não conseguimos encontrar nenhuma receita com os seus ingredientes..
        </p>

        <ul class="receitas">
            <li v-for="prato in pratos" :key="prato.nome">
                <Pratos :prato="prato"/>
            </li>
        </ul>
    </section>
    <BotaoPrincipal texto="Editar Lista" @click="$emit('editarLista')"/>
</template>


<style scoped>
.selecionar__pratos {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;
}

.titulo__pratos {
    color: var(--verde-medio);
    margin-bottom: 1rem;
}

.subtitulo__pratos {
    color: var(--verde-medio);
}

.receitas {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2.5rem;
}
</style>