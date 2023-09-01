<!-- 
This component is made with Option API
-->
<script lang="ts">
    import { defineComponent, inject } from 'vue';
    import { ContextInterface } from '../controllers/interfaces.ts';

    export default defineComponent({
        name: 'ValueEditBtn',
        props: {
            value: {
                type: String,
                required: true
            }
        },
        data() {
            const context = inject('context') as ContextInterface;
            const { handleSign, handelComma } = context;

            const handelEdit = () => {
                if (this.value === '+/-') {
                    handleSign()
                } else {
                    handelComma()
                }
            }
            return {
                handelEdit
            }
        }
    });
</script>

<template>
    <button @click="handelEdit">
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