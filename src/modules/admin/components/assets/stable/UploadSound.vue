<template>
  <div class="upload-card-top">
    <div class="d-flex justify-content-center align-items-center">
      <div class="card-upload-sound text-center">

        <div class="card-body">
          <h5 class="card-header">
            Upload the Sounds
          </h5>
          <small class="text-success" v-if="sendConfirm === 200"><i>SENDED!</i></small>
          <small class="text-danger" v-else-if="sendConfirm === 409"><i>An error occurred while sending. There is a file with the same name!</i></small>
          <small v-else>Click the button</small>

          <div class="form-input">
            <label>
              <small>Sound name</small>
              <input class="form-control" v-model="postSound.name" placeholder="rainly" type="text">
            </label>
          </div>

          <div class="form-input">
            <label>
              <small>Sound icon (only class name)</small>
              <input class="form-control" v-model="postSound.icon" placeholder="fas fa-cloud-showers-heavy" type="text">
            </label>
          </div>

          <div class="form-input">
            <label>
              <small>Audio Name(.ogg, .mp3, .m4a..) </small>
              <input class="form-control" v-model="postSound.audioName" placeholder="thunder.m4a" type="text">
            </label>
          </div>

          <h5>
            <button class="btn btn-primary" @click="sendSound()">Upload the system</button>
          </h5>
          <textarea class="form-control" placeholder="..." rows="1"></textarea>
          <h1 class="py-5 text-primary"><i :class="postSound.icon"></i></h1>
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
        // volume: 100,
        // showButton: false,
        // volumeButtonMute: false,
        // active: false,
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
  width: 400px;
}

.card-header {
  border-radius: 15px;
}

.form-input {
  margin: 10px 0 10px 0;
  text-align: left;
}

.form-control {
  border-radius: 5px;
  min-width: 300px;
}
</style>