<script setup lang='ts'>
  import CalcScreen from './components/CalcScreen.vue'
  import NumberBtn from './components/NumberBtn.vue'
  import OperatorsBtn from './components/OperatorsBtn.vue'
  import ValueEditBtn from './components/ValueEditBtn.vue'
  import ResolveBtn from './components/ResolveBtn.vue'
  import HandlerBtn from './components/HandlerBtn.vue'

</script>

<template>
  <div class='container'>
    <div class="img-container">
      <img src="./assets/vue.svg" alt="vue-logo">
      <img src="./assets/typescript.webp" alt="typescript-logo">
    </div>
    <div class='calculator'>
        <CalcScreen />
        <div class='btns_container'>
            <OperatorsBtn value="%" />
            <HandlerBtn value="CE" />
            <HandlerBtn value="C" />
            <HandlerBtn value="DEL" />
            
            <OperatorsBtn value="1/x" />
            <OperatorsBtn value="x²" />
            <OperatorsBtn value="√x" />
            <OperatorsBtn value="÷" />

            <NumberBtn value='7'/>
            <NumberBtn value='8'/>
            <NumberBtn value='9'/>
            <OperatorsBtn value="x" />
            
            <NumberBtn value='4'/>
            <NumberBtn value='5'/>
            <NumberBtn value='6'/>
            <OperatorsBtn value="-" />

            <NumberBtn value='1'/>
            <NumberBtn value='2'/>
            <NumberBtn value='3'/>
            <OperatorsBtn value="+" />

            <ValueEditBtn value='+/-'/>
            <NumberBtn value='0'/>
            <ValueEditBtn value=","/>
            <ResolveBtn value='='/>
        </div>
    </div>
  </div>
</template>

<style scoped>
  .container {
    width: 100%;
    height: 100vh;
    background-color: #1a1a1a;
    display: grid;
    place-items: center;
    user-select: none;
  }
  .img-container{
    position: absolute;
    top: 10px;
  }
  .img-container img {
    width: 100px;
    height: 100px;
    margin: 1em;
  }
  .img-container img:nth-child(2) {
    border-radius: 5px;
    width: 90px;
    height: 90px;
  }
  .calculator {
    width: 400px;
    height: 556px;
    background-color: #2f2f2f;
    border-radius: 10px;
    padding: 1em;
  }
  .btns_container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: .5em;
    margin-top: 1em;
  }
</style>