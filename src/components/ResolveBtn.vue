<script setup lang="ts">
    import { inject } from 'vue';
    import { ContextInterface } from '../controllers/interfaces.ts';
    
    const context = inject('context') as ContextInterface;
    const { resolve } = context;

    defineProps({
        value: {
            type: String,
            required: true
        }
    });

</script>

<template>
    <button @click="resolve">
        {{ value }}
    </button>
</template>

<style scoped>
    button {
        height: 60px;
        background-color: #2f74c0;
        border-radius: 10px;
        font-size: 1.5em;
        text-align: center;
        display: grid;
        place-items: center;
    }
</style>