let Vue = require('vue/dist/vue.common.dev');
require('bulma');
//const App = require('./components/App.vue'); // see ei tööta
import App from './components/App.vue';

Vue.component('app', App);

new Vue({
    el: '#app'    
});


// let input = document.getElementById('input');
// let text = document.getElementById('text');
// input.addEventListener('input', (event)=> {
//     text.innerHTML = input.value;
// })