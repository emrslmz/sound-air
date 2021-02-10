import Vue from 'vue';
import Vuex from 'vuex';
import faq from "@/store/modules/main/faq";
import socialMedia from "@/store/modules/main/socialMedia";
import sounds from "@/store/modules/main/sound/sounds";
import editAndLookSound from "@/store/modules/admin/sound/editAndLookSound";
import uploadSound from "@/store/modules/admin/sound/uploadSound";
import contactMessage from "@/store/modules/admin/contact/contactMessage";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        faq,
        socialMedia,
        sounds,
        editAndLookSound,
        uploadSound,
        contactMessage
    }
})

