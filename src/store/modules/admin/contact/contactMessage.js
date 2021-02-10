import axios from "axios";

const state = {
    contacts: [],
    totalContact: null,
}

const getters = {

}

const mutations = {

}

const actions = {
    getContacts({ commit }) {
        axios
            .get("https://soundair-api.herokuapp.com/contacts")
            .then((response) => {

                 console.log(response)
                commit('GET_CONTACT')
            })
    }
}


export default {
    state,
    getters,
    mutations,
    actions
}