<template>
 <div class="upload-card-top container">
    <div class="d-flex justify-content-center align-items-center">
        <div class="col-12 col-6 card-upload-sound py-4">
          <div class="text-center">
              <h6>Upload Sound</h6>
              <strong style="color: green" v-if="getSendConfirm === 200"><i class="fas fa-check-circle"></i> Sent!</strong>
              <strong style="color: red" v-if="getSendConfirm === 400"><i class="fas fa-exclamation-circle"></i> Could not send!</strong>
              <strong style="color: gold" v-if="getSendConfirm === 409"><i class="fas fa-exclamation-triangle"></i> File with the same name already exists!</strong>
            <small style="color: #191919" v-else></small>
          </div>
          <div class="row">
            <div class="col-12 col-xl-6 pt-4">

              <div class="form-label text-xl-left" align="center">
                <label>
                  <i class="far fa-address-card"></i> Audio Name
                  <input class="form-control" :style="{border: [ getSendConfirm === 409 ? '2px solid gold': '' ]}" placeholder="rainly, train, planet..." v-model="getPostSounds.name" type="text">
                </label>
              </div>

              <div class="form-label text-xl-left pt-2" align="center">
                <label>
                  <i class="text-green" :class="getPostSounds.icon"></i> Audio Icon
                  <input class="form-control" placeholder="fas fa-cloud-rain..." v-model="getPostSounds.icon" type="text">
                </label>
              </div>

              <div class="form-label text-xl-left pt-2" align="center">
                <label>
                  <i class="far fa-file-audio"></i> Sound File Name
                  <input class="form-control" placeholder="rain1.mp3" v-model="getPostSounds.audioName" type="text">
                </label>
              </div>

              <div class="form-label text-xl-left pt-2" align="center">
                <label>
                  <i class="fas fa-volume-up"></i> Audio Volume
                  <input class="form-control" placeholder="rain1.mp3" v-model="getPostSounds.volume" type="number">
                </label>
              </div>

            </div>
            <div class="col-12 col-xl-6 pt-3">

              <div class="d-flex justify-content-between align-items-center text-xl-right pl-xl-5 ml-xl-5" align="center">
                <div>
                  <label class="form-label"><i class="far fa-eye-slash"></i> Show Button:</label>
                </div>

                <div class="form-check">
                  <input class="form-check-input" type="radio" name="showButton" id="showbutton_active" :value="true" v-model="getPostSounds.showButton">
                  <label class="form-check-label form-label" for="showbutton_active">
                    Active
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="showButton" id="showbutton_deactive" :value="false" v-model="getPostSounds.showButton">
                  <label class="form-check-label form-label" for="showbutton_deactive">
                    Deactive
                  </label>
                </div>
                <div class="check-uncheck-icon">
                  <i class="far fa-check-circle text-green" v-if="getPostSounds.showButton"></i>
                  <i class="far fa-times-circle text-red" v-else></i>
                </div>
              </div>


              <div class="d-flex justify-content-between align-items-center text-xl-right pl-xl-5 ml-xl-5 pt-5" align="center">
                <div>
                  <label class="form-label"><i class="fas fa-volume-mute"></i> Volume Button</label>
                </div>

                <div class="form-check">
                  <input class="form-check-input" type="radio" name="volumeButtonMute" id="volumeButtonMute_active" :value="true" v-model="getPostSounds.volumeButtonMute">
                  <label class="form-check-label form-label" for="volumeButtonMute_active">
                    Active
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="volumeButtonMute" id="volumeButtonMute_deactive" :value="false" v-model="getPostSounds.volumeButtonMute">
                  <label class="form-check-label form-label" for="volumeButtonMute_deactive">
                    Deactive
                  </label>
                </div>
                <div class="check-uncheck-icon">
                  <i class="far fa-check-circle text-green" v-if="getPostSounds.volumeButtonMute"></i>
                  <i class="far fa-times-circle text-red" v-else></i>
                </div>
              </div>


              <div class="d-flex justify-content-between align-items-center text-xl-right pl-xl-5 ml-xl-5 pt-5" align="center">
                <div>
                  <label class="form-label"><i class="fas fa-low-vision"></i> Active Status</label>
                </div>

                <div class="form-check">
                  <input class="form-check-input" type="radio" name="activestatus" id="active_active" :value="true" v-model="getPostSounds.active">
                  <label class="form-check-label form-label" for="active_active">
                    Active
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="activestatus" id="active_deactive" :value="false" v-model="getPostSounds.active">
                  <label class="form-check-label form-label" for="active_deactive">
                    Deactive
                  </label>
                </div>
                <div class="check-uncheck-icon">
                  <i class="far fa-check-circle text-green" v-if="getPostSounds.active"></i>
                  <i class="far fa-times-circle text-red" v-else></i>
                </div>
              </div>


              <div class="d-flex justify-content-between align-items-center text-xl-right pl-xl-5 ml-xl-5 pt-5" align="center">
                <div>
                  <label class="form-label"><i class="fas fa-sign-language"></i> Sound Display</label>
                </div>

                <div class="form-check">
                  <input class="form-check-input" type="radio" name="showSound" id="showSound_active" :value="true" v-model="getPostSounds.showSound">
                  <label class="form-check-label form-label" for="showSound_active">
                    Active
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="showSound" id="showSound_deactive" :value="false" v-model="getPostSounds.showSound">
                  <label class="form-check-label form-label" for="showSound_deactive">
                    Deactive
                  </label>
                </div>
                <div class="check-uncheck-icon">
                  <i class="far fa-check-circle text-green" v-if="getPostSounds.showSound"></i>
                  <i class="far fa-times-circle text-red" v-else></i>
                </div>
              </div>

            </div>
          </div>
          <div class="text-center" align="center">
            <button class="btn btn-success submit-button" @click="sendSound(getPostSounds)"><i class="fas fa-paper-plane"></i> Submit</button>
          </div>
        </div>
    </div>
 </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Feedbacks',
  computed: {
    ...mapGetters([
        'getPostSounds',
        'getSendConfirm'
    ])
  },
  methods: {
    ...mapActions([
        'postedSound'
    ]),
    sendSound(getPostSounds) {
      this.postedSound(getPostSounds);
    }
  }


  // data() {
  //   return {
  //     postSound: {
  //       name: '',
  //       // description: '',
  //       icon: '',
  //       audioName: '',
  //       volume: 100,
  //       showButton: false,
  //       volumeButtonMute: false,
  //       active: false,
  //       showSound: true
  //     },
  //     sendConfirm: null
  //   }
  // },
  // methods: {
  //   sendSound() {
  //     axios
  //         .post("https://soundair-api.herokuapp.com/audios", {
  //           name: this.postSound.name,
  //           description: 'Audios for Sound AIR',
  //           icon: this.postSound.icon,
  //           audioName: this.postSound.audioName,
  //           volume: 100,
  //           showButton: false,
  //           volumeButtonMute: false,
  //           active: false,
  //           showSound: this.postSound.showSound,
  //         })
  //         .then((response) => {
  //           // console.log(response)
  //           Object.keys(this.postSound).forEach((key) => {
  //             this.postSound[key] = null;
  //           });
  //
  //           //200 OK
  //           // console.log(response.status)
  //           this.sendConfirm = response.status;
  //         })
  //         .catch((error) => {
  //           //400 BAD REQUEST
  //           // console.log(error.request.status);
  //           this.sendConfirm = error.request.status;
  //         })
  //   }
  // }
}
</script>

<style scoped>
.upload-card-top{
  padding-top: 100px;
}

.card-upload-sound {
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 0 3px 1px white;
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

.submit-button {
  margin-top: 100px;
  border-radius: 10px;
  width: 200px;
}
</style>