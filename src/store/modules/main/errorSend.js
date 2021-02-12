import axios from "axios";

const state = {
    newReport: {
        mistakeHunterName: '',
        mistakeHunterMail: null,
        mistakeSubject: '',
        mistakeCode: '',
        mistakeDescription: null,
    },
    sendConfirm: null,
}

const getters = {
  getNewReport(state) {
      return state.newReport;
  },
    getPostMistakeStatus(state) {
      return state.sendConfirm;
    }
}

const mutations = {
    RETURN_NEW_MISTAKE(state, returnNewMistake) {
      state.newReport = returnNewMistake;
    },
    MISTAKE_STATUS(state, mistakeStatus) {
        state.sendConfirm = mistakeStatus;
    }
}

const actions = {
   postMistake({ commit }, getNewReport ) {
       axios
           .post("https://soundair-api.herokuapp.com/mistakes", {
               mistakeHunterName: getNewReport.mistakeHunterName,
               mistakeHunterMail: getNewReport.mistakeHunterMail,
               mistakeSubject: getNewReport.mistakeSubject,
               mistakeCode: getNewReport.mistakeCode,
               mistakeDescription: getNewReport.mistakeDescription,
           })
           .then((response) => {
               const returnNewMistake = {
                   mistakeHunterName: '',
                   mistakeHunterMail: null,
                   mistakeSubject: '',
                   mistakeCode: '',
                   mistakeDescription: null,
               }
               commit('RETURN_NEW_MISTAKE', returnNewMistake);

               const mistakeStatus = response.status;
               commit('MISTAKE_STATUS', mistakeStatus);
           })
           .catch((error) => {
               //400 BAD REQUEST
               // console.log(error.request.status);
               const mistakeStatus = error.request.status;
               commit('MISTAKE_STATUS', mistakeStatus)
           })
   }
}

export default {
    state,
    getters,
    mutations,
    actions
}