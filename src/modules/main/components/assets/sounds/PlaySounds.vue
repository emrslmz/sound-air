<template>
  <div class="container">
    <div class="soundPlay-padding"></div>

    <div class="main-top-div text-md-center">
      <h1><b>Sounds</b></h1>
      <p class="text-spacing5">click icons to listen</p>
    </div>

    <div class="row soundPlay-row">
      <!--START-->
      <div class="col-6 col-md-3 d-flex flex-column justify-content-center align-items-center" v-for="(sounds, index) in getSound" :key="index">

            <div>
              <a type="button" class="soundPlay-icon">
                <i :title="sounds.name" :class="sounds.icon" @click="playSounds(index)" :style="sounds.active ? 'opacity: 1' : ''"></i>
              </a>
            </div>
            <!-- START VOLUME CONTROL -->
            <div>
              <div class="volumeControl d-flex align-items-center" v-if="sounds.showButton">
                <!--            <small type="button" class="fas fa-volume-up px-1" @click="volumeButton(index)" v-if="sounds.volumeButtonMute"></small>-->
                <!--            <small type="button" class="fas fa-volume-mute px-1" @click="volumeButton(index)" v-else></small>-->
                <input type="range" min="0" max="100" class ="volumeSlider" @change="volumeSet(index)" v-model="sounds.volume">
              </div>

              <div style="height: 60px" v-else></div>

            </div>
        <!-- FINISH VOLUME CONTROL -->

      </div>
      <!--FINISH-->
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
.soundPlay-padding {
  padding-top: 100px;
}

@media (max-width: 768px) {
  .soundPlay-padding {
    padding-top: 50px;
  }
}

.soundPlay-row {
  margin: 0 300px 0 300px;
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



</style>