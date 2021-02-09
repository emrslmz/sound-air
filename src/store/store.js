import Vue from 'vue';
import Vuex from 'vuex';
import faq from "@/store/modules/main/faq";
import socialMedia from "@/store/modules/main/socialMedia";
import sounds from "@/store/modules/main/sound/sounds";
import adminSound from "@/store/modules/admin/sound/adminSound";
import uploadSound from "@/store/modules/admin/sound/uploadSound";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        faq,
        socialMedia,
        sounds,
        adminSound,
        uploadSound
    }
})

