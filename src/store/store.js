import Vue from 'vue';
import Vuex from 'vuex';
import faq from "@/store/modules/main/faq";
import socialMedia from "@/store/modules/main/socialMedia";
import sounds from "@/store/modules/main/sound/sounds";
import deleteEditSounds from "@/store/modules/admin/sound/deleteEditSounds";
import uploadSound from "@/store/modules/admin/sound/uploadSound";
import deleteFetchContacts from "@/store/modules/admin/contact/deleteFetchContacts";
import contactSend from "@/store/modules/main/contactSend";
import bugReportMessages from "@/store/modules/admin/contact/bugReportMessages";
import errorSend from "@/store/modules/main/errorSend";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        faq,
        socialMedia,
        sounds,
        deleteEditSounds,
        uploadSound,
        deleteFetchContacts,
        contactSend,
        bugReportMessages,
        errorSend
    }
})

