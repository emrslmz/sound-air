import axios from 'axios';

const state = {
    newContact: {
        contactName: '',
        contactMail: null,
        contactDescription: '',
        contactAcceptFeedback: null,
    },
    sendConfirm: null
}

const getters = {
    getNewContact(state) {
        return state.newContact;
    },
    getContactStatus(state) {
        return state.sendConfirm;
    }
}

const mutations = {
    RETURN_NEW_CONTACT(state, returnNewContact) {
      state.newContact = returnNewContact;
    },
    CONTACT_STATUS(state, status) {
        state.sendConfirm = status;
    }
}

const actions = {
    postContact({ commit }, getNewContact) {
    axios
        .post("https://soundair-api.herokuapp.com/contacts", {
            contactName: getNewContact.contactName,
            contactMail: getNewContact.contactMail,
            contactDescription: getNewContact.contactDescription,
            contactAcceptFeedback: getNewContact.contactAcceptFeedback,
        })
        .then((response) => {
              const returnNewContact = {
                  contactName: '',
                  contactMail: null,
                  contactDescription: '',
                  contactAcceptFeedback: null,
              }
              commit('RETURN_NEW_CONTACT', returnNewContact);

            const status = response.status;
            commit('CONTACT_STATUS', status);
        })
        .catch((error) => {
            //400 BAD REQUEST
            // console.log(error.request.status);
            state.sendConfirm = error.request.status;
          })
  }
}

export default {
    state,
    getters,
    actions,
    mutations
}