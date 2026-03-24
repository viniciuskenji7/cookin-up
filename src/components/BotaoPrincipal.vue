<script lang="ts">
    export default{
        props: {
            texto: String
        }
    }
</script>


<template>
    <button type="button" class="paragrafo button">
        {{ texto }}
    </button>
</template>


<style scoped>
    .button {
        background-color: var(--coral);
        color: var(--creme);
        padding: 1rem;
        border-radius: 2rem;
        font-weight: 800;
        min-width: 312px;
        margin-top: 3rem;
        cursor: pointer;
        transition: 0.2s;
        box-shadow: 0 0 2px 2px rgb(0, 0, 0, 0.2);
    }
    .button:hover {
        transform: scale(1.05);
    }
</style>