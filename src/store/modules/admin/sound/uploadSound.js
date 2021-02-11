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
        soundNumber: 0
    },
    sendConfirm: null
}

const getters = {
    getPostSounds(state) {
      return state.postSound;
    },
    getSendConfirm(state) {
      return state.sendConfirm;
    }
}

const mutations = {
    RETURN_POST(state, returnPost) {
        state.postSound = returnPost;
    },
    POST_STATUS(state, status) {
        state.sendConfirm = status;
    }
}

const actions = {
    postedSound({ commit }, getPostSounds ) {
        axios
            .post("https://soundair-api.herokuapp.com/audios", {
                name: getPostSounds.name,
                description: 'Audios for Sound AIR',
                icon: getPostSounds.icon,
                audioName: getPostSounds.audioName,
                volume: getPostSounds.volume,
                showButton: getPostSounds.showButton,
                volumeButtonMute: getPostSounds.volumeButtonMute,
                active: getPostSounds.active,
                showSound: getPostSounds.showSound,
                soundNumber: getPostSounds.soundNumber
            })
            .then((response) => {
                
               const returnPost = {
                   name: '',
                   description: 'Audios for Sound AIR',
                   icon: '',
                   audioName: '',
                   volume: 100,
                   showButton: false,
                   volumeButtonMute: false,
                   active: false,
                   showSound: true,
                   soundNumber: 0
               }

                commit('RETURN_POST', returnPost);

                const status = response.status;

                commit('POST_STATUS', status);

                // Object.keys(this.postSound).forEach((key) => {
                //     this.postSound[key] = null;
                // });
            })
            .catch((error) => {
                //400 BAD REQUEST
                // console.log(error.request.status);
                state.sendConfirm= error.request.status;
            })
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}