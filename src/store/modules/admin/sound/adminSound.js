import axios from "axios";

const state = {
    adminSounds: null,
    totalSounds: null,
    editStatus: null,
}

const getters = {
    getAdminSound(state) {
        return state.adminSounds;
    },
    getTotalAdminSound(state) {
        return state.totalSounds;
    },
    getEditStatus(state) {
        return state.editStatus;
    }
}

const mutations = {
    ADMIN_SET_SOUND(state, adminSound, adminTotalSound) {
      state.adminSounds = adminSound;
      state.totalSounds = adminTotalSound;
    },
    ADMIN_TOTAL_SOUND(state, adminTotalSound) {
        state.totalSounds = adminTotalSound;
    },
    EDIT_SOUND(state, editSound) {
     state.adminSounds = editSound;
    }
}

const actions = {
   fetchAdminSounds({ commit }) {
       axios
           .get("https://soundair-api.herokuapp.com/audios")
           .then((response) => {
               const adminSound = response.data.data
               const adminTotalSound = response.data.data.length

               commit('ADMIN_SET_SOUND', adminSound);
               commit('ADMIN_TOTAL_SOUND', adminTotalSound);
           })
   },
    editSound({ commit }, feedbackGet) {
        axios
          .patch(`https://soundair-api.herokuapp.com/audios/${feedbackGet.id}`, feedbackGet)
          .then((response) => {
              const editSound = response.data.data;

              state.editStatus = response.status;

              commit('EDIT_SOUND', editSound);
              return editSound;
          })
            .catch((error) => {
                state.editStatus = error.request.status;
            })
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}