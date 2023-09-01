<script lang="ts" setup>
    import { inject } from 'vue';
    import { ContextInterface } from '../controllers/interfaces.ts';
    
    const context = inject('context');
    const { screenInput, screenOutput } = context as ContextInterface;
</script>

<template>
    <div class="screen">
        <div class="screen__output">
            <p>
                {{ screenOutput }}
            </p>
        </div>
        <div class="screen__input">
            <p>
                {{ screenInput }}
            </p>
        </div>
    </div>
</template>

<style scoped>
    .screen {
        width: 100%;
        padding: 1em;
        border: 1px solid #42b883;
        border-radius: 5px;
        text-align: right;
    }
    .screen__input{
        font-size: 1.8em;
        width: 100%;
        user-select: all;
    }
    .screen__output{
        font-size: 1.2em;
        color: #ffffff;
        opacity: 0.6;
        user-select: all;
    }
</style>