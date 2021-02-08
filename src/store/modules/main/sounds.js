import axios from 'axios';


const state = {
    sounds: null,
}

const getters = {
  getSound(state) {
      const sound = state.sounds;
      if (sound) {
         return sound.filter(a => a.showSound === true);
      }
  }
}

const mutations = {
    SET_SOUNDS(state, sounds) {
        state.sounds = sounds;
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
        const sound = state.sounds[index];

        const volume = sound.volume / 100;
        sound.player.volume = volume;
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