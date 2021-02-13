import axios from 'axios';

const state = {
    getRate: [],
}

const getters = {
  getRate(state) {
      return state.getRate;
  }
}

const mutations = {
    PUSH_GET_RATE(state, pushGetRate) {
        state.getRate = pushGetRate;
    }
}

const actions = {
    fetchRate({ commit }) {
        axios
            .get("https://soundair-api.herokuapp.com/rates")
            .then((response) => {
                const pushGetRate = response.data.data;
                commit('PUSH_GET_RATE', pushGetRate);
            })
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}