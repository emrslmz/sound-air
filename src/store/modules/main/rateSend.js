// import axios from 'axios'

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
  getRatePoint(state) {
      return state.ratePoint;
  }
}

const mutations = {

}

const actions = {
    
}

export default {
    state,
    getters,
    mutations,
    actions
}