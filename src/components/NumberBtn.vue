<!-- 
This component is made with Composition API, new version ( setup on the script tag )
-->
<script setup lang="ts">
    import { inject } from 'vue';
    import { ContextInterface } from '../controllers/interfaces.ts';
    
    const context = inject('context') as ContextInterface;
    const { addNumber } = context;

    defineProps({
        value: {
            type: String,
            required: true
        }
    });

</script>

<template>
    <button @click="addNumber(value)">
        {{ value }}
    </button>
</template>

<style scoped>
    button {
        height: 60px;
        background-color: #42b883;
        border-radius: 10px;
        font-size: 1.5em;
        text-align: center;
        display: grid;
        place-items: center;
    }
</style>