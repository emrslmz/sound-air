import Vue from 'vue';
import Vuex from 'vuex';
import faq from "./modules/main/faq";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        faq,
    }
})

