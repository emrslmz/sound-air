<template>
  <div>
    <div class="text-center">
      <h6 class="d-flex justify-content-center align-items-center">
        <span :class="timer.minutes === 0 ? 'text-red': ''" v-if="timer.minutes < 10">0{{ timer.minutes }}</span><span v-else>{{ timer.minutes }}</span>
        :
        <span :class="timer.seconds === 0 ? 'text-red': ''" v-if="timer.seconds < 10">0{{ timer.seconds }}</span><span v-else>{{timer.seconds}}</span>
      </h6>
      <h6>
        <span @click="decreamentTime()" v-if="!timer.shopPlusMinusButton"><i class="btn btn-danger span-stopwatch btn-sm fas fa-minus-circle"></i></span>
        <span @click="startTimer()" v-if="!timer.playPauseButton"><i class="btn span-stopwatch btn-info btn-sm fas fa-play-circle"></i></span>
        <span @click="stopTimer()" v-else><i class="btn span-stopwatch btn-primary btn-sm fab fa-creative-commons-zero fa-flip-horizontal"></i></span>
        <span @click="increamentTime()" v-if="!timer.shopPlusMinusButton"><i class="btn btn-success span-stopwatch btn-sm fas fa-plus-circle"></i></span>
      </h6>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Weather',
  data() {
    return {
      timer: {
        minutes: 25,
        seconds: 1,
        playPauseButton: false,
        shopPlusMinusButton: false,
      }
    }
  },
  methods: {
    increamentTime() {
      this.timer.minutes += 5;
    },
    decreamentTime() {
      if (this.timer.minutes > 0 ) {
        this.timer.minutes -= 5;
      }
    },
    startTimer() {
      if (this.timer.playPauseButton === false) {
        this.timer.shopPlusMinusButton = true;

        if (this.timer.minutes !== 0) {

          if (this.timer.seconds > 0) {

            setInterval(() => {
              if (this.timer.seconds > 0) {
                this.timer.seconds--;
              } else {
                if (this.timer.minutes > 0) {
                  this.timer.minutes--;
                  this.timer.seconds = 59;
                }
              }
            },1000);

          } else {
            this.timer.minutes--;
            this.timer.seconds = 59;
            this.startTimer();
          }
        }                                           
        this.timer.playPauseButton = true;

      }
    },
    stopTimer() {
      this.timer.minutes = 0;
      this.timer.seconds = 0;
      this.timer.shopPlusMinusButton = false;
    }
  },

}
</script>


<style scoped>
.span-stopwatch {
  border-radius: 10px;
  font-size: 12px;
  margin: 0 3px 0 3px;
}
</style>

