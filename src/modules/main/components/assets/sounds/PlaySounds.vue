<template>
  <div class="container">
    <div class="playSounds-padding"></div>

    <div class="main-top-div text-center">
      <h1><b>Sounds</b></h1>
      <p class="text-spacing5">click icons to listen
      </p>
    </div>

    <div class="row">
      <div class="col-12 col-sm-3"></div>
      <div class="col-12 col-md-6" v-if="getSoundStatus === 200">
        <div align="center">

          <div class="row d-flex justify-content-center align-items-center">
            <div class="col-6 col-xl-3" v-for="(sounds, index) in getSound" :key="index">
              <div>
                <div class="play-icon">
                  <a type="button" class="soundPlay-icon">
                    <i :title="sounds.name" :class="sounds.icon" @click="playSounds(index)" :style="sounds.active ? 'opacity: 1' : ''"></i>
                  </a>
                </div>

                <div class="play-volume-button">
                  <div class="volumeControl d-md-flex justify-content-center align-items-center" v-if="sounds.showButton">
                    <!--<small type="button" class="fas fa-volume-up px-1" @click="volumeButton(index)" v-if="sounds.volumeButtonMute"></small>-->
                    <!--<small type="button" class="fas fa-volume-mute px-1" @click="volumeButton(index)" v-else></small>-->
                    <input type="range" min="0" max="100" class ="volumeSlider" @change="volumeSet(index)" v-model="sounds.volume">
                  </div>
                  <div style="height: 60px" v-else></div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-sm-3"></div>

        </div>

      </div>
      <div class="col-12 col-md-6" v-else>
         <div align="center">
           <div class="load-area">
             <h1><i class="fas fa-circle-notch fa-spin"></i></h1>
           </div>
         </div>
      </div>
    </div>
  </div>
</template>


<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'PlaySounds',
  computed: {    
    ...mapGetters([
      'getSound',
      'getSoundStatus'
    ]),
  },
  mounted() {
    if (!this.getSound) {
       this.fetchSounds();
    }
  },
  methods: {
    ...mapActions([
      'fetchSounds',
      'playSounds',
      'volumeSet',
    ]),
  },
}
</script>


<style scoped>

.playSounds-padding { /* telefonda böyle olsun */
  padding-top: 100px;
}

@media (max-width: 768px) { /* bilgisayarda */
  .playSounds-padding {
    padding-top: 50px;
  }
}

.soundPlay-icon i {
  cursor: pointer;
  opacity: 0.8;
  font-size: 52px;
  color: #191919;
  transition: 0.9s;
}

.soundPlay-icon i:hover {
  opacity: 1;
  transition: 0.9s;
}


.load-area i {
  color: green;
  animation: colorful 5s infinite alternate;
}

@keyframes colorful {

  0%{
    color: #4682b4;
    transform:rotate(0deg);
  }
  25%{
    color:  #2a52be;
  }
  50%{
    color:  #ff4040;
  }
  75%{
    color: #084c9e;
  }
  100%{
    color: #ce9c63;
    transform:rotate(360deg);
  }

}

</style>