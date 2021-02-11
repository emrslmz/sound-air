import axios from "axios";

const state = {
    contacts: [],
    totalContact: null,
    contactDeleteStatus: null
}

const getters = {
   getFeedbacks(state) {
       return state.contacts.reverse();
   },
    getTotalContact(state) {
        return state.totalContact;
    },
    getDeleteContactStatus(state) {
       return state.contactDeleteStatus;
    }
}

const mutations = {
    GET_CONTACT(state, pushContact) {
        state.contacts = pushContact;
    },
    TOTAL_CONTACT(state, totalContact) {
        state.totalContact = totalContact;
    },
    DELETE_CONTACT_STATE(state, contactIndex) {
        state.contacts.splice(contactIndex, 1);
    },
    DELETE_CONTACT_STATUS(state, deleteStatus) {
        state.contactDeleteStatus = deleteStatus;
    }
}

const actions = {
    getContacts({ commit }) {
        axios
            .get("https://soundair-api.herokuapp.com/contacts")
            .then((response) => {

               const pushContact = response.data.data;
                commit('GET_CONTACT', pushContact);

                const totalContact = response.data.data.length;
                commit('TOTAL_CONTACT', totalContact);
            })
    },
    contactDelete({ commit }, contact, index) {
        axios
            .delete(`https://soundair-api.herokuapp.com/contacts/${contact.id}`, contact)
            .then((response) => {

                const contactIndex = index;
                commit('DELETE_CONTACT_STATE', contactIndex);

                const deleteStatus = response.status;
                commit('DELETE_CONTACT_STATUS', deleteStatus);


            })
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}