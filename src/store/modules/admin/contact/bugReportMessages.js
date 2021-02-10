import axios from 'axios';

const state = {
    bugMessages: [],
    totalBugMessages: null,
}

const getters = {
  getBugMessages(state) {
      return state.bugMessages.reverse();
  }
}

const mutations = {
    FETCH_BUG(state, bugMessage) {
        state.bugMessages = bugMessage
    }
}

const actions = {
  fetchBugMessages({ commit }) {
      axios
          .get("https://soundair-api.herokuapp.com/mistakes")
          .then((response) => {
              const bugMessage = response.data.data;

              console.log(response);
              commit('FETCH_BUG', bugMessage);
          })
  }
}

export default {
    state,
    getters,
    mutations,
    actions
}