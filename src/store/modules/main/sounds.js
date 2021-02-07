const state = {
    sounds: {
        getSound: [],
    }
}

const getters = {
  getSound(state) {
      return state.sounds.getSound;
  }
}

export default {
    state,
    getters,
}