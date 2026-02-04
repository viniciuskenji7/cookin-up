<script lang="ts">
import Tag from './Tag.vue';

export default {
    props: {
        ingredientes: { type: Array<string>, required: true }
    },
    components: { Tag }
}
</script>

<template>
    <section>
        <span class="subtitulo-lg sua-lista-texto">
            Sua Lista:
        </span>

        <ul v-if="ingredientes.length" class="ingredientes-sua-lista">
            <li v-for="ingrediente in ingredientes" :key="ingrediente">
                <Tag :texto="ingrediente" active />
            </li>
        </ul>

        <p v-else class="paragrafo lista-vazia">
            <img src="../assets/images/icones/lista-vazia.svg" alt="Ícone de Pesquisa">
            Sua lista esta vazia, selecione ingredientes para iniciar
        </p>
    </section>
</template>


<style scoped>
.sua-lista-texto {
    color: var(--coral, #F0633C);
    display: block;
    text-align: center;
    margin-bottom: 1.5rem;
}

.ingredientes-sua-lista {
    display: flex;
    justify-content: center;
    gap: 1rem 1.5rem;
    flex-wrap: wrap;
}

.lista-vazia {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.25rem;

    color: var(--coral, #F0633C);
    text-align: center;
}
</style>