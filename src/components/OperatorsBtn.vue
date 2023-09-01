<!-- 
This component is made with Composition API, Old version ( setup in the script )
-->
<script lang="ts">
    import { defineComponent, inject } from 'vue';
    import { ContextInterface } from '../controllers/interfaces.ts';
    export default defineComponent({
        props: {
            value: {
                type: String,
                required: true
            }
        },
        setup() {
            const context = inject('context') as ContextInterface;
            const { handleOperator } = context;
            return {
                handleOperator
            }
        }
    });
</script>

<template>
    <button @click="handleOperator(value)">
        {{ value }}
    </button>
</template>

<style scoped>
    button {
        height: 60px;
        background-color: #447761;
        border-radius: 10px;
        font-size: 1.5em;
        text-align: center;
        display: grid;
        place-items: center;
    }
</style>