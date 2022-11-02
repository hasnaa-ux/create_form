import { createApp } from 'vue';
import { createRouter , createWebHistory  } from "vue-router";
import App from './App.vue';

const router=createRouter({
    history: createWebHistory(),
    routes:[],
});

/*
import Vue from 'vue';
import vueCountryRegionSelect from 'vue-country-region-select'
Vue.use(vueCountryRegionSelect)
*/


createApp(App).mount('#app');


