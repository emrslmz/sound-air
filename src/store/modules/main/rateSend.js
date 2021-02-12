import axios from 'axios'

const state = {
   ratePoint: {
       rateFish: 1,
       rateCat: 3,
       rateSpider: 5,
       rateDragon: 7,
       ratePointSend: false,
   }
}

const getters = {
  getRatePost(state) {
      return state.ratePoint;
  }
}

const mutations = {

}

const actions = {
     postRate(getRatePost) {
        axios
            .post("https://soundair-api.herokuapp.com/rates", getRatePost)
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