<template>
  <div class="container">
    <div class="soundPlay-padding"></div>

    <div class="main-top-div text-md-center">
      <h1><b>Sound AIR for everyone</b></h1>
      <p class="text-spacing5">and all sounds are free</p>
    </div>

    <div class="row soundPlay-row">
      <!--START-->
      <div class="col-6 col-md-3 d-flex flex-column justify-content-center align-items-center" v-for="(sounds, index) in getSound" :key="index">
        <a type="button" class="soundPlay-icon">
          <i :title="sounds.name" :class="sounds.icon" @click="playSound(index)" :style="sounds.active ? 'opacity: 1' : 'opacity: 0.8'"></i>
        </a>

        <!-- START VOLUME CONTROL -->
        <div class="setting-button justify-content-between align-items-center">

          <div class="volumeControl d-flex align-items-center" v-if="sounds.showButton">
            <small type="button" class="fas fa-volume-up px-1" @click="volumeButton(index)" v-if="sounds.volumeButtonMute"></small>
            <small type="button" class="fas fa-volume-mute px-1" @click="volumeButton(index)" v-else></small>
            <input type="range" min="0" max="100" class="volumeSlider" @change="volumeSet(index)" v-model="sounds.volume">
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
import axios from 'axios';

export default {
  name: 'PlaySounds',
  data() {
    return {
      getSound: [],
    }
  },
  mounted() {
    axios
      .get("https://soundair-api.herokuapp.com/audios")
      .then((response) => {
        const sounds = response.data.data;

        sounds.forEach(sound => {
          sound.content = `https://emresolmaz.com.tr/sounds/${sound.audioName}`;
          sound.player = new Audio(sound.content)
        });

        this.getSound = sounds;
      })
  },
  methods: {
    playSound(index) {
      const sound = this.getSound[index];

      if (!sound.showButton) {
        sound.player.play();
        sound.player.loop = true;
        sound.showButton = true;
        sound.active = true;
      } else {
        sound.player.pause();
        sound.showButton = false;
        sound.active = false;
      }
    },

    volumeButton(index) {
      const sound = this.getSound[index];

      if(sound.player.volume === 0 && sound.volume === 0) {
        sound.volumeButtonMute = true;
        sound.player.volume = 1;
        sound.volume = 100;
      } else {
        sound.volumeButtonMute = false;
        sound.player.volume = 0;
        sound.volume = 0;
      }
    },
    volumeSet(index) {
      const sound = this.getSound[index];

      const volume = sound.volume / 100;
      sound.player.volume = volume;
    }

  }
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

.soundPlay-icon i {
  cursor: pointer;
  opacity: 0.8;
  font-size: 52px;
  color: #191919;
  transition: 0.8s;
}

.soundPlay-icon i:hover {
  opacity: 1;
  transition: 0.8s;
}

.soundPlay-row {
  margin: 0 250px 0 250px;
}

</style>