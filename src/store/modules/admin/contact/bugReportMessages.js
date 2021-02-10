import axios from 'axios';

const state = {
    bugMessages: [],
    totalBugMessages: null,
    bugDeleteStatus: null,
}

const getters = {
    getBugMessages(state) {
        return state.bugMessages.reverse();
    },
    getTotalBug(state) {
        return state.totalBugMessages;
    },
    getBugDeleteStatus(state) {
        return state.bugDeleteStatus;
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
    },
    DELETE_STATUS(state, deleteStatus) {
        state.bugDeleteStatus = deleteStatus;
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

              const mistakeIndex = index;
              commit('DELETE_MISTAKE_STATE', mistakeIndex);

              const deleteStatus = response.status;
              commit('DELETE_STATUS', deleteStatus);
          })
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}