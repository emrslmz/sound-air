<template>
  <div>
    <div class="container text-xl-center" align="center">
      <div class="rate-us-page"></div>
      <div>
        <h1><b>Rate US!</b></h1>
        <p class="text-spacing5">Vote us to improve!</p>
      </div>

      <div>
        <transition name="component-fade">
        <the-success-card success-message="Thank you for your review!" v-if="getRateStatus.ratePostStatus === 200" />
        </transition>
        <transition name="component-fade">
        <the-success-card success-message="Thank you for your review!" v-if="getRateStatus.ratePostStatus === 400" />
        </transition>
         <h4 v-if="!getRateStatus.ratePostStatus">Select one of the creatures below to rate us. <br> According to the explanation below</h4>
        <small v-if="!getRateStatus.ratePostStatus">Please be fair when using your vote!</small>
      </div>
      <div class="d-xl-flex justify-content-center pt-5">

        <div class="vote-group" v-for="(rate, index) in getRateOptions" :key="index">
          <div class="flex-column">
            <h2 :value="rate.ratePoint" @click="ratePointChanged(rate)" :title="getRateStatus.ratePostStatus === 200 ? 'You already Sent!' : 'Click to send!'"><span :class="getRateStatus.ratePostStatus === 200 ? 'disabled' : 'cursor-pointer'"><i :class="rate.icon"></i></span></h2>
          </div>
          <strong>{{ rate.title }}<br> <small>{{ rate.description }}</small></strong>
        </div>
      </div>

      <!-- Button trigger modal -->
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter" v-if="getRateStatus.rateOpenModal">
        Launch demo modal
      </button>

      <!-- Modal -->
      <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              ...
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
import TheSuccessCard from "@/modules/main/components/assets/dashboard/TheSuccessCard";
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'RateUs',
  components: {
    TheSuccessCard
  },
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
     if (this.getRateStatus.ratePostStatus !== 200) {
       this.postRate(rate);
     } else {
       this.alreadySend();
     }
    },
    alreadySend() {
     alert('Please cast your vote 1 time');
    }
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