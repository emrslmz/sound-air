import axios from 'axios';


const state = {
    sounds: null,
}

const getters = {
  getSound(state) {
      return state.sounds;
  }
}

const mutations = {
    SET_SOUNDS(state, data) {
    state.sounds = data;
    },

    PLAY_SOUNDS(state, index) {
    const sound = state.sounds[index];

    if (!sound.showButton) {
        sound.player.play();
        sound.player.loop = true;
        sound.showButton = true;
        sound.active = true;
    } else {
        sound.player.pause();
        sound.showButton = false;
        sound.active = false;
    }
    }
}

const actions = {
    fetchSounds({ commit }) {
        axios
            .get("https://soundair-api.herokuapp.com/audios")
            .then((response) => {
                const sounds = response.data.data;

                sounds.forEach(sound => {
                    sound.content = `https://emresolmaz.com.tr/sounds/${sound.audioName}`;
                    sound.player = new Audio(sound.content)
                });
                commit('SET_SOUNDS', sounds);
            });
    },
    playSounds({commit}, index) {
        commit('PLAY_SOUNDS', index);
    }
}


export default {
    state,
    getters,
    mutations,
    actions
}