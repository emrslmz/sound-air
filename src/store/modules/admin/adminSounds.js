import axios from "axios";

const state = {
    adminSounds: null,
    totalSounds: null,
    showSounds: 0
}


const getters = {
    getAdminSound(state) {
        return state.adminSounds;
    },
    getTotalAdminSound(state) {
        return state.totalSounds;
    }
}

const mutations = {
    ADMIN_SET_SOUND(state, adminsound, adminTotalSound) {
      state.adminSounds = adminsound;
      state.totalSounds = adminTotalSound;
    },
    ADMIN_TOTAL_SOUND(state, adminTotalSound) {
        state.totalSounds = adminTotalSound;
    }
}

const actions = {
   fetchAdminSounds({commit}) {
       axios
           .get("https://soundair-api.herokuapp.com/audios")
           .then((response) => {
               const adminsound = response.data.data
               const adminTotalSound = response.data.data.length


                commit('ADMIN_SET_SOUND', adminsound);
               commit('ADMIN_TOTAL_SOUND', adminTotalSound);
           })
   }
}



export default {
    state,
    getters,
    mutations,
    actions
}