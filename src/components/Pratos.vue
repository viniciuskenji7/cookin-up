<script lang="ts">
import type IPratos from '@/interfaces/IPratos';
import type { PropType } from 'vue';

    export default{
        props: {
            prato: {type: Object as PropType<IPratos>, required: true}
        }
    }
</script>


<template>
    <article class="pratos">
        <img :src="`/imagens/receitas/${prato.imagem}`" alt="Imagem do Prato" class="prato__imagem">
        <h2 class="paragrafo">
            {{ prato.nome }}
        </h2>
    </article>
</template>


<style scoped>
    .pratos {
        border-radius: 1rem;
        box-shadow: 4px 4px 10px 0px rgba(68, 68, 68, 0.05);
        
        padding: 1rem;

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;

        width: 20rem;
        height: 100%;
    }

    .prato__imagem {
        width: 100%;
    }
</style>