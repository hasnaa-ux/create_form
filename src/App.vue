<template>

  <quote-grid :quotes="quotes"></quote-grid>
</template>

<script>
import QuoteGrid from './components/QuoteGrid.vue';



export default {
  components:{QuoteGrid  },
  data(){
    return{
      quotes:['hi' , 'hello'],
    };
  },
  
}

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/scss/_variables.scss";
          @import "@/scss/_mixins.scss";
        `
      }
    }
  }
};
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