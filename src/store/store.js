import Vue from 'vue';
import Vuex from 'vuex';
import faq from "@/store/modules/main/faq";
import socialMedia from "@/store/modules/main/socialMedia";
import sounds from "@/store/modules/main/sounds";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        faq,
        socialMedia,
        sounds,
    }
})

