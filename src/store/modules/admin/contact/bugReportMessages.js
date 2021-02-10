import axios from 'axios';

const state = {
    bugMessages: [],
    totalBugMessages: null,
}

const getters = {
  getBugMessages(state) {
      return state.bugMessages.reverse();
  },
    getTotalBug(state) {
      return state.totalBugMessages;
    }
}

const mutations = {
    FETCH_BUG(state, bugMessage) {
        state.bugMessages = bugMessage
    },
    TOTAL_BUG(state, totalBugMessage) {
        state.totalBugMessages = totalBugMessage;
    }
}

const actions = {
  fetchBugMessages({ commit }) {
      axios
          .get("https://soundair-api.herokuapp.com/mistakes")
          .then((response) => {
              const bugMessage = response.data.data;
              const totalBugMessage = response.data.data.length;

              commit('FETCH_BUG', bugMessage);
              commit('TOTAL_BUG', totalBugMessage);
          })
  }
}

export default {
    state,
    getters,
    mutations,
    actions
}