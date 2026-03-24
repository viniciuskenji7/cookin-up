<script setup lang="ts">
import { ref } from 'vue';


const emit = defineEmits(['buscarCategoria']);
const input = ref('');

function buscarItem() {
    emit('buscarCategoria', input.value);
    console.log('Valor: ', input.value);
}

</script>

<template>
    <article class="buscarItem__box">
        <label for="buscarItem">Qual ingrediente você procura?</label>
        <div>
            <input 
                type="text"
                name="buscarItem" 
                id="buscarItem" 
                class="buscarItem"
                v-model="input"
            >
            <button 
                type="button" 
                class="botaoBuscar"
                @click="buscarItem"
            >
                <img src="../assets/images/icones/search.svg" alt="Icone de Buscar">
            </button>
        </div>
    </article>
</template>

<style scoped>
.buscarItem__box {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.buscarItem {
    width: 100%;
    padding: 10px;
    border-radius: 7px;
    border: none;
    outline: none;

    position: relative;
}

.botaoBuscar {
    position: absolute;
    left: 18.5%;
    top: 92.5%;
    cursor: pointer;
}
</style>