<!-- this is parent component -->

<template>
  <div class="row">
    <quote v-for="quote in quotes" :key="quote">{{quote}}</quote>
  </div>
</template>

<script>
import Quote from './Quote.vue'
export default {
  components: { Quote },
  props:['quotes'],

}
</script>

<style>

</style>