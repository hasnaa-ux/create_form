<template>
  <the-form></the-form>
  <checkout-form></checkout-form>
  
</template>

<script>
import CheckoutForm from './components/CheckoutForm.vue';
import TheForm from "./components/TheForm.vue";


export default {
  components:{
    TheForm,
    CheckoutForm,
    
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
  background-color: #292929;
}
</style>