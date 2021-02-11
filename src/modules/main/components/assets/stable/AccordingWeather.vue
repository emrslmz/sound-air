<template>
  <div>
   <div class="text-center pt-5">
     <h1>Weather</h1>
     <div>
       <h6>
         <span v-if="timer.minutes < 10">0{{ timer.minutes }}</span><span v-else>{{ timer.minutes }}</span>
         :
        <span v-if="timer.seconds < 10">0{{ timer.seconds }}</span><span v-else>{{timer.seconds}}</span>
       </h6>
       <button class="btn btn-dark btn-sm mx-1" @click="increamentTime()">Zamanı arttır</button>
       <button class="btn btn-dark btn-sm mx-1" @click="decreamentTime()">Zamanı Azalt</button>
     </div>
     <div class="py-3">

       <button class="btn btn-danger" @click="startTimer()">Başlat</button>
     </div>
   </div>
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
      this.timer += 5;
    },
    decreamentTime() {
      this.timer -= 5;
    },
    startTimer() {
      setInterval(() => {
        this.timer.minutes--;
      },1000);
    }
  },

}
</script>


<style scoped>

</style>