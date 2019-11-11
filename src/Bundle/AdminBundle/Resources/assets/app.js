
import Vue from 'vue';
import State from './vue/state';
import apolloProvider from './vue/plugins/apollo';
import router from './vue/plugins/router';
import UniteAdminApp from './vue/App';



////////// INIT UIKIT //////////
import UIkit from 'uikit';



////////// INIT STYLES //////////
require('./app.scss');



////////// INIT STATE //////////
Object.keys(State).forEach((state) => {
    State[state].$apolloProvider = apolloProvider;
    State[state].$emit('load');
});



////////// INIT VUE //////////
new Vue({
    el: '#app',
    apolloProvider,
    router,
    components: { UniteAdminApp },
});