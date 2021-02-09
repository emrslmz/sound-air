import axios from "axios";

const state = {
    postSound: {
        name: '',
        // description: '',
        icon: '',
        audioName: '',
        volume: 100,
        showButton: false,
        volumeButtonMute: false,
        active: false,
        showSound: true,
    },
    sendConfirm: null
}


const getters = {
    getUploadSound(state) {
        return state.postSound;
    },
    getSendConfirm(state) {
        return state.sendConfirm;
    }
}

const mutations = {

}

const actions = {
   postSounds({ commit }, state) {
       axios
           .post("https://soundair-api.herokuapp.com/audios", {
               name: state.name,
               description: 'Audios for Sound AIR',
               icon: state.icon,
               audioName: state.audioName,
               volume: 100,
               showButton: false,
               volumeButtonMute: false,
               active: false,
               showSound: state.showSound,
           })
           .then((response) => {
               // console.log(response)
               Object.keys(state.postSound).forEach((key) => {
                   state.postSound[key] = null;
               });

               commit('UPLOAD_SOUND')

               //200 OK
               // console.log(response.status)
               state.sendConfirm = response.status;
           })
           .catch((error) => {
               //400 BAD REQUEST
               // console.log(error.request.status);
               state.sendConfirm = error.request.status;
           })
   }
}

export default {
    state,
    getters,
    mutations,
    actions
}