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
    postRate: {
        postPoint: null,
    }
}

const getters = {
    getRateOptions(state) {
        return state.rateOptions;
    },
    getPostRate(state) {
        return state.postRate;
    }
}

const mutations = {

}

const actions = {
    postRate( rate ) {
        axios
            .post("https://soundair-api.herokuapp.com/rates", rate)
            .then((response) => {
                console.log(response);
            })
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}