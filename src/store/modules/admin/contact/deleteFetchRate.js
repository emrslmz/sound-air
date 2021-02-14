import axios from 'axios';

const state = {
   getRate: {
       getRate: [],
       totalRate: null,
       rateStatus: null,
   }
}

const getters = {
    getRate(state) {
        return state.getRate.getRate;
    },
    getTotalRate(state) {
        return state.getRate.totalRate;
    },
    getDeleteRateStatus(state) {
        return state.getRate.rateStatus;
    }
}

const mutations = {
    PUSH_GET_RATE(state, pushGetRate) {
        state.getRate.getRate = pushGetRate;
    },
    PUSH_TOTAL_RATE(state, pushTotalRate) {
        state.getRate.totalRate = pushTotalRate;
    },
    DELETE_RATE(state, deleteIndex) {
        state.getRate.getRate.splice(deleteIndex, 1);
    },
    DELETE_RATE_STATUS(state, rateDeleteStatus) {
        state.getRate.rateStatus = rateDeleteStatus;
    }
}

const actions = {
    fetchRate({ commit }) {
        axios
            .get("https://soundair-api.herokuapp.com/rates")
            .then((response) => {
                 console.log(response)
                const pushGetRate = response.data.data;
                commit('PUSH_GET_RATE', pushGetRate);

                const pushTotalRate = response.data.data.length;
                commit('PUSH_TOTAL_RATE', pushTotalRate)
            })
    },
    deleteRate({ commit }, rate, index ) {
        axios
            .delete(`https://soundair-api.herokuapp.com/rates/${rate.id}`, rate)
            .then((response) => {

                const rateDeleteStatus = response.status;
                commit('DELETE_RATE_STATUS', rateDeleteStatus);

                const deleteIndex = index;
                commit('DELETE_RATE', deleteIndex);

            })
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}