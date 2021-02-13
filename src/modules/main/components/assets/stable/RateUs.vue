<template>
  <div>
    <div class="container text-xl-center" align="center">
      <div class="rate-us-page"></div>
      <div>
        <h1><b>Rate US!</b></h1>
        <p class="text-spacing5">Vote us to improve!</p>
      </div>

      <div>
        <h4>Select one of the creatures below to rate us. <br> According to the explanation below</h4>
        <small>Please be fair when using your vote!</small>
      </div>
      <div class="d-xl-flex justify-content-center pt-5">

        <div class="vote-group" v-for="(rate, index) in getRateOptions" :key="index">
          <div class="flex-column">
            <h2 :value="rate.ratePoint" @click="ratePointChanged(rate)" :class="getRateStatus === 200 ? 'disabled' : 'cursor-pointer'"><i :class="rate.icon"></i></h2>
          </div>
          <strong>{{ rate.title }}<br> <small>{{ rate.description }}</small></strong>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'RateUs',
  computed: {
    ...mapGetters([
        'getRateOptions',
        'getRateStatus'
    ])
  },
  methods: {
    ...mapActions([
        'postRate',
    ]),
    ratePointChanged(rate) {
     if (this.getRateStatus !== 200) {
       this.postRate(rate);
     }
    },
  }
}
</script>

<style scoped>
.rate-us-page {
  padding-top: 100px;
}

.vote-group {
  padding: 0 20px 0 20px;
}

.vote-group h2 {
  font-size: 40px;
  opacity: 0.8;
  transition: 0.5s;
}

.vote-group h2:hover {
  font-size: 40px;
  opacity: 1;
  transition: 0.5s;
}

.vote-group small {
  font-size: 8px;
}

.submit-rate-button button {
  border-radius: 10px;
  background-color: #20D489;
  color: white;
  font-weight: bold;
}

.submit-rate-button button:hover {
  background-color: #28ffa7;
  font-weight: bold;
  color: white;
}

.display-none {
  display: none;
}
</style>