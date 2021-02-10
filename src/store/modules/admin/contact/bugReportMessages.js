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
        state.bugMessages = bugMessage;
    },
    TOTAL_BUG(state, totalBugMessage) {
        state.totalBugMessages = totalBugMessage;
    },
    DELETE_MISTAKE_STATE(state, mistakeIndex){
        state.bugMessages.splice(mistakeIndex, 1);
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
    },
    deleteBugMessages({ commit }, mistakes, index) {
      axios
          .delete(`https://soundair-api.herokuapp.com/mistakes/${mistakes.id}`, mistakes)
          .then((response) => {
              
              console.log(response.status);

              const mistakeIndex = index;
              commit('DELETE_MISTAKE_STATE', mistakeIndex);
          })
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}