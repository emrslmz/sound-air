import axios from "axios";

const state = {
    adminSounds: null,
}


const getters = {
    getAdminSound(state) {
        return state.adminSounds;
    }
}

const mutations = {
    ADMIN_SET_SOUND(state, adminsound) {
      state.adminSounds = adminsound;
    }
}

const actions = {
   fetchAdminSounds({commit}) {
       axios
           .get("https://soundair-api.herokuapp.com/audios")
           .then((response) => {
               const adminsound = response.data.data

                commit('ADMIN_SET_SOUND', adminsound);
           })
   }
}



export default {
    state,
    getters,
    mutations,
    actions
}