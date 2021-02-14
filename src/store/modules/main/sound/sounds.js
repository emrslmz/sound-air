import axios from 'axios';

const state = {
    sounds: null,
    soundStatus: null,
}

const getters = {
  getSound(state) {
      const sound = state.sounds;
      if (sound) {
         return sound.filter(a => a.showSound === true);
      }
  },
    getSoundStatus(state) {
      return state.soundStatus;
    }
}

const mutations = {
    SET_SOUNDS(state, sounds) {
        state.sounds = sounds;
    },
    PLAY_SOUNDS(state, index) {
        const sound = state.sounds.filter(a => a.showSound === true)[index];

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
    },
    // VOLUME_BUTTON(state, index) {
    //     const sound = state.sounds[index];
    //
    //     if(sound.volumeButtonMute === true) {
    //         sound.volumeButtonMute = false;
    //         sound.player.volume = 1;
    //         sound.volume = 100;
    //     } else {
    //         sound.volumeButtonMute = true;
    //         sound.player.volume = 0;
    //         sound.volume = 0;
    //     }
    // },
    VOLUME_SET(state, index) {
        const sound = state.sounds.filter(a => a.showSound === true)[index];

        const volume = sound.volume / 100;
        sound.player.volume = volume;
    },
    GET_SOUND_STATUS(state, getSoundStatus) {
        state.soundStatus = getSoundStatus;
    }

}

const actions = {
    fetchSounds({ commit }) {
        axios
            .get("https://soundair-api.herokuapp.com/audios")
            .then((response) => {

                const getSoundStatus = response.status;
                commit('GET_SOUND_STATUS', getSoundStatus);

                const sounds = response.data.data;
                commit('SET_SOUNDS', sounds);

                sounds.forEach(sound => {
                    sound.content = `https://emresolmaz.com.tr/sounds/${sound.audioName}`;
                    sound.player = new Audio(sound.content)
                });
            });
    },
    playSounds({commit}, index) {
        commit('PLAY_SOUNDS', index);
    },
    // volumeButton({commit}, index) {
    //     commit('VOLUME_BUTTON', index);
    // },
    volumeSet({commit}, index) {
        commit('VOLUME_SET', index);
    }
}


export default {
    state,
    getters,
    mutations,
    actions
}