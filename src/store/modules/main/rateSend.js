import axios from "axios";

const state = {
    rateOptions: [
        {
            id: 1,
            icon: 'fas fa-fish text-fish',
            title: 'I do not like',
            description: 'It wasn\'t nice',
            ratePoint: 1
        },
        {
            id: 2,
            icon: 'fas fa-cat text-cat',
            title: 'Ungrateful cat',
            description: 'Neither bad nor beautiful',
            ratePoint: 3
        },
        {
            id: 3,
            icon: 'fas fa-spider text-spider',
            title: 'Should be improved Spider',
            description: 'It would be nice if it improved',
            ratePoint: 5
        },
        {
            id: 4,
            icon: 'fas fa-dragon text-dragon',
            title: 'EXTRAORDINARY',
            description: 'Unbelievable',
            ratePoint: 7
        },
    ],
    ratePostStatus: null,
}

const getters = {
    getRateOptions(state) {
        return state.rateOptions;
    },
    getRateStatus(state) {
        return state. ratePostStatus;
    }
}

const mutations = {
    RATE_POST_STATUS(state, postRateStatus) {
        state.ratePostStatus = postRateStatus;
    }
}

const actions = {
    postRate({ commit }, rate ) {
        // console.log(context)
        axios
            .post("https://soundair-api.herokuapp.com/rates", {
                ratePoint: rate.ratePoint,
                rateAnimals: rate.icon
            })
            .then((response) => {
                // console.log(response.status);
                const postRateStatus = response.status;
                commit('RATE_POST_STATUS', postRateStatus);
            })
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}