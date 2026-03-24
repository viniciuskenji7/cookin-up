<script lang="ts">
import type ICategoria from '@/interfaces/ICategoria';
import Filtro from './Filtro.vue';
import MostrarReceitas from './MostrarReceitas.vue';
import SelecionarIngredientes from './SelecionarIngredientes.vue';
import SuaLista from './SuaLista.vue';
import Tag from './Tag.vue';
import { obterCategorias } from '@/http';
import type IPratos from '@/interfaces/IPratos';

export type Pagina = 'SelecionarIngredientes' | 'MostrarReceitas';
type Descricao = 'Escolha no minimo 2 ingredientes para buscar uma receita';

export default {
    data() {
        return {
            ingredientes: [] as string[],
            categorias: [] as ICategoria[],
            categoriasFiltradas: [] as ICategoria[],
            pratos: [] as IPratos[],
            conteudo: 'SelecionarIngredientes' as Pagina,
            descricao: '*Atenção: consideramos que você tem em casa sal, pimenta e água.' as Descricao,
        }
    },
    components: {
        SelecionarIngredientes,
        SuaLista,
        Tag,
        MostrarReceitas,
        Filtro,
    },
    async created() {
        this.categorias = await obterCategorias();
        this.categoriasFiltradas = this.categorias;
    },
    methods: {
        adicionarIngrediente(ingrediente: string) {
            this.ingredientes.push(ingrediente);
        },
        removerIngrediente(ingrediente: string) {
            const ingredienteIndex = this.ingredientes.indexOf(ingrediente)
            this.ingredientes.splice(ingredienteIndex, 1);
        },
        navegar(pagina: Pagina) {
            if(this.ingredientes.length <= 1) {
                this.descricao = 'Escolha no minimo 2 ingredientes para buscar uma receita';
                return;
            }
            this.conteudo = pagina;
        },
        buscarCategoria(termo: string) {
            this.categoriasFiltradas = this.categorias.filter(categoria =>
                categoria.nome.toLowerCase().includes(termo.toLowerCase())
            );
        }
    }
}



</script>


<template>
    <main class="conteudo-principal">
        <Filtro
            @buscar-categoria="buscarCategoria" 
            :receitas="pratos"
            :categorias="categorias"
        />
        <div class="ingredientes">
            <SuaLista :ingredientes="ingredientes"/>
            <KeepAlive include="SelecionarIngredientes">
                <SelecionarIngredientes v-if="conteudo === 'SelecionarIngredientes'"
                :dica="descricao"
                :categorias="categoriasFiltradas"
                @adicionar-ingrediente="adicionarIngrediente"
                @remover-ingrediente="removerIngrediente"
                @buscar-receitas="navegar('MostrarReceitas')"
                />
                <MostrarReceitas v-else-if="conteudo === 'MostrarReceitas'"
                    :ingredientes="ingredientes"
                    @editar-lista="navegar('SelecionarIngredientes')"
                />
            </KeepAlive>
        </div>
    </main>
</template>

<style scoped>
.conteudo-principal {
    padding: 6.5rem 7.5rem;
    border-radius: 3.75rem 3.75rem 0rem 0rem;
    background: var(--creme, #FFFAF3);
    color: var(--cinza, #444);

    display: flex;
    justify-content: center;
    /* gap: 2.5rem; */
}

.ingredientes {
    display: flex;
    flex-direction: column;
    gap: 5rem;
}

@media only screen and (max-width: 1300px) {
    .conteudo-principal {
        padding: 5rem 3.75rem;
        gap: 3.5rem;
    }
}

@media only screen and (max-width: 767px) {
    .conteudo-principal {
        padding: 4rem 1.5rem;
        gap: 4rem;
    }
}
</style>