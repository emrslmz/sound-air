import axios from "axios";

const state = {
    contacts: [],
    totalContact: null,
}

const getters = {
   getFeedbacks(state) {
       return state.contacts;
   },
    getTotalContact(state) {
        return state.totalContact;
    }
}

const mutations = {
    GET_CONTACT(state, pushContact) {
        state.contacts = pushContact;
    },
    TOTAL_CONTACT(state, totalContact) {
        state.totalContact = totalContact;
    }
}

const actions = {
    getContacts({ commit }) {
        axios
            .get("https://soundair-api.herokuapp.com/contacts")
            .then((response) => {

               const pushContact = response.data.data;
               console.log(response.data)
               const totalContact = response.data.data.length;
                commit('GET_CONTACT', pushContact);
                commit('TOTAL_CONTACT', totalContact);
            })
    }
}


export default {
    state,
    getters,
    mutations,
    actions
}