<template>
 <div class="upload-card-top container">
    <div class="d-flex justify-content-center align-items-center">
        <div class="col-12 col-6 card-upload-sound py-4">
          <div class="text-center">
              <h6>Upload Sound</h6>
          </div>
          <div class="row">
            <div class="col-12 col-xl-6">

              <div class="form-label text-xl-left" align="center">
                <label>
                  Audio Name
                  <input class="form-control" placeholder="rainly, train, planet..." v-model="postSound.name" type="text">
                </label>
              </div>

              <div class="form-label text-xl-left pt-2" align="center">
                <label>
                  Audio Icon <i class="text-green" :class="postSound.icon"></i>
                  <input class="form-control" placeholder="fas fa-cloud-rain..." v-model="postSound.icon" type="text">
                </label>
              </div>

              <div class="form-label text-xl-left pt-2" align="center">
                <label>
                  Audio Name
                  <input class="form-control" placeholder="rain1.mp3" v-model="postSound.audioName" type="text">
                </label>
              </div>

              <div class="form-label text-xl-left pt-2" align="center">
                <label>
                  Audio Volume
                  <input class="form-control" placeholder="rain1.mp3" v-model="postSound.volume" type="number">
                </label>
              </div>

            </div>
            <div class="col-12 col-xl-6">
              <div class="d-flex justify-content-between align-items-center text-xl-right pl-xl-5 ml-xl-5" align="center">
                
                <div>
                  <label class="form-label">Show Button:</label>
                </div>

                <div class="form-check">
                  <input class="form-check-input" type="radio" name="showButton" id="showbutton_active" :value="true" v-model="postSound.showButton">
                  <label class="form-check-label form-label" for="showbutton_active">
                    Active
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="showButton" id="showbutton_deactive" :value="false" v-model="postSound.showButton">
                  <label class="form-check-label form-label" for="showbutton_deactive">
                    Deactive
                  </label>
                </div>
                <div class="check-uncheck-icon">
                  <i class="far fa-check-circle text-green" v-if="postSound.showButton"></i>
                  <i class="far fa-times-circle text-red" v-else></i>
                </div>

              </div>
            </div>
          </div>
        </div>
    </div>
 </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'Feedbacks',
  data() {
    return {
      postSound: {
        name: '',
        // description: '',
        icon: '',
        audioName: '',
        volume: 100,
        showButton: false,
        // volumeButtonMute: false,
        // active: false,
        showSound: true
      },
      sendConfirm: null
    }
  },
  methods: {
    sendSound() {
      axios
          .post("https://soundair-api.herokuapp.com/audios", {
            name: this.postSound.name,
            description: 'Audios for Sound AIR',
            icon: this.postSound.icon,
            audioName: this.postSound.audioName,
            volume: 100,
            showButton: false,
            volumeButtonMute: false,
            active: false,
            showSound: this.postSound.showSound,
          })
          .then((response) => {
            // console.log(response)
            Object.keys(this.postSound).forEach((key) => {
              this.postSound[key] = null;
            });

            //200 OK
            // console.log(response.status)
            this.sendConfirm = response.status;
          })
          .catch((error) => {
            //400 BAD REQUEST
            // console.log(error.request.status);
            this.sendConfirm = error.request.status;
          })
    }
  }
}
</script>

<style scoped>
.upload-card-top{
  padding-top: 100px;
}

.card-upload-sound {
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 0 5px 1px black;
  min-height: 600px;
  width: 100%;
}
.form-label {
  font-weight: bold;
  font-size: small;
}

@media (max-width: 768px) {
  .form-label input {
    min-width: 300px;
  }
}
@media (min-width: 768px) {
  .form-label input {
    min-width: 400px;
  }
}

.check-uncheck-icon {
 font-weight: bold;
  font-size: 28px;
}
</style>