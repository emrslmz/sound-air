<template>
  <div>
    <h6>
      <span v-if="timer.minutes < 10">0{{ timer.minutes }}</span><span v-else>{{ timer.minutes }}</span>
      :
      <span v-if="timer.seconds < 10">0{{ timer.seconds }}</span><span v-else>{{timer.seconds}}</span>
    </h6>
    <button class="btn btn-dark btn-sm mx-1" @click="increamentTime()">Zamanı arttır</button>
    <button class="btn btn-dark btn-sm mx-1" @click="decreamentTime()">Zamanı Azalt</button>
    <button class="btn btn-danger" @click="startTimer()">Başlat</button>
  </div>
</template>


<script>
export default {
  name: 'Weather',
  data() {
    return {
      timer: {
        minutes: 0,
        seconds: 0,
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
      if (this.timer.minutes !== 0) {

        if (this.timer.seconds > 0) {

          setInterval(() => {
            if (this.timer.seconds > 0) {
              this.timer.seconds--;
            } else {
              if (this.timer.minutes > 0) {
                this.timer.minutes--;
                this.timer.seconds = 5;
              }
            }
          },1000);

        } else {
          this.timer.minutes--;
          this.timer.seconds = 5;
          this.startTimer();
        }
      }
    },
  },

}
</script>

