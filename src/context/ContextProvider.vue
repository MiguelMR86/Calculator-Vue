<script setup lang='ts'>
    import { ref, Ref, provide } from 'vue'
    import App from '../App.vue'

    let screenInput: Ref<string> = ref('0')
    let screenOutput: Ref<string> = ref('0')
        
    const operators: any = {
        simple: {
            '+': '+',
            '-': '-',
            'x': '*',
            '÷': '/' 
        },
        advanced: {
            '%': '%(',
            '1/x': '1/(',
            'x²': 'sqr(',
            '√x': '√('
        }
    }

    const addNumber = (value: string): void => {
        if (screenInput.value !== '0') {
            screenInput.value += value
        }
        if (screenInput.value === '0') {
            screenInput.value = value
        } 
        return
    }
    
    const handleOperator = (value: string): void => {

        const simpleSymbol : string = operators.simple[value]
        const advancedSymbol : string = operators.advanced[value]

        
        if ( operators.simple[value] ) {
            if ( screenOutput.value.indexOf('=') !== -1 ) {
                screenOutput.value = screenInput.value + ' ' + simpleSymbol
                screenInput.value = '0'
            }
            const simple = Object.entries(operators.simple) as [string, string][]
            handleSimpleOperator(simple, simpleSymbol)
        }

        else if ( operators.advanced[value] ) {
            const advanced = Object.entries(operators.advanced) as [string, string][]
            handleAdvancedOperator(advanced, advancedSymbol)
        }
        return
    }

    const handleSimpleOperator = (simple : [string, string][], symbol : string = '' ) : void => {
        let find = false
    
        simple.forEach(([,val]) : void => {
            if (screenOutput.value.indexOf(val) !== -1) {
                find = true
                if (val !== symbol) {
                    screenOutput.value = screenOutput.value.replace(' ' + val,' ' + symbol)
                }
            }
        })
        if (!find) {
            screenOutput.value = screenInput.value + ' ' + symbol
            screenInput.value = '0'
        }
        return
    }  

    const handleAdvancedOperator = (advanced : [string, string][], symbol : string = '' ) : void => {
        let find = false
    
        advanced.forEach(([,val]) : void => {
            if (screenOutput.value.indexOf(val) !== -1) {
                find = true
                if (val !== symbol) {
                    screenOutput.value = screenOutput.value.replace(val, symbol)
                }
            }
        })
        if (!find) {
            screenOutput.value = symbol + screenInput.value + ')' 
            screenInput.value = '0'
        }
        return
    }

    const handleEraser = (value : string) : void => {
        const handlers: string[] = [
            'CE',
            'C',
            'DEL',
        ]

        if (handlers.indexOf(value) !== -1) {
            if (value === 'CE') {
                screenInput.value = '0'
            }
            else if (value === 'C') {
                screenOutput.value = '0'
                screenInput.value = '0'
            }
            else if (value === 'DEL') {
                screenInput.value = screenInput.value.slice(0, -1)
                if (screenInput.value === '') {
                    screenInput.value = '0'
                }
            }
        }
        return
    }

    const handleSign = (): void => {
        if (screenInput.value === '0') {
            return
        }
        if (screenInput.value.indexOf('-') === -1) {
            screenInput.value = '-' + screenInput.value
        } 
        else {
            screenInput.value = screenInput.value.replace('-', '')
        }
        return
    }

    const handelComma = (): void => {
        if (screenInput.value.indexOf('.') === -1) {
            screenInput.value += '.'
        } 
        return
    }

    const resolve = (): void => {

        let isAdvanced = false;
        let opeVal = ''
        const advanced = Object.entries(operators.advanced) as [string, string][]
        const simple = Object.entries(operators.simple) as [string, string][]

        if ( screenOutput.value.indexOf('=') !== -1 ) {
            screenOutput.value = '0'
        }

        // advanced operator resolver
        advanced.forEach(([,val]) : void => {
            if (screenOutput.value.indexOf(val) !== -1) {
                isAdvanced = true
                opeVal = val
            }
        })

        if (!isAdvanced) {
            // simple operator resolver
            simple.forEach(([,val]) : void => {
                if (screenOutput.value.indexOf(val) !== -1) {
                    const output = screenOutput.value + ' ' + screenInput.value
                    screenInput.value = eval(output).toString()
                    screenOutput.value = output + ' ='
                }
            })
            return
        }
        
        screenInput.value = '0'
        const output = screenOutput.value.replace(opeVal, '').replace(')', '')

        if (opeVal === '%(') {
            screenInput.value = eval(output + '/100').toString()
        }
        else if (opeVal === '1/(') {
            screenInput.value = eval('1/' + output).toString()
        }
        else if (opeVal === 'sqr(') {
            screenInput.value = eval(output + '*' + output).toString()
        }
        else if (opeVal === '√(') {
            screenInput.value = eval('Math.sqrt(' + output + ')').toString()
        }
        screenOutput.value += ' ='

        return
    }

    provide('context', {
        screenInput,
        screenOutput,
        addNumber,
        handleOperator,
        handleEraser,
        handleSign,
        handelComma,
        resolve
    })
</script>

<template>
    <App />
</template>