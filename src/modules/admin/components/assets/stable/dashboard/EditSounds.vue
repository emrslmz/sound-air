<template>
  <div class="edit-card-top">
     <div class="d-flex justify-content-center align-items-center">
          <div class="col-12 col-md-6 edit-card">
               <div class="text-center">
                 <h5>Audio Folder Editing</h5>
                 <small class="text-green" v-if="editStatus">Success! <i class="fas fa-check"></i></small>
                 <small v-else>{{ feedbackGet.id }}</small>
               </div>

                <div class="row justify-content-between align-items-center">
                  <div class="col-12 col-xl-6 pt-4">

                    <div class="input-group input-group-sm mb-3">
                      <div class="input-group-prepend">
                        <span class="input-group-text">Sound Name<i class="far fa-address-card px-2"></i></span>
                      </div>
                      <input placeholder="Rainly..." type="text" class="form-control" v-model="feedbackGet.name">
                    </div>

                    <div class="input-group input-group-sm mb-3">
                      <div class="input-group-prepend">
                        <span class="input-group-text">Sound Description <i class="fas fa-pencil-alt px-2"></i></span>
                      </div>
                      <input placeholder="Very good sounds..." type="text" class="form-control" v-model="feedbackGet.description">
                    </div>

                    <div class="input-group input-group-sm mb-3">
                      <div class="input-group-prepend">
                        <span class="input-group-text">Sound Icon <i class="text-green px-2" :class="feedbackGet.icon"></i></span>
                      </div>
                      <input placeholder="fas fa-cloud..." type="text" class="form-control" v-model="feedbackGet.icon">
                    </div>

                    <div class="input-group input-group-sm mb-3">
                      <div class="input-group-prepend">
                        <span class="input-group-text">Audio Name <i class="far fa-file-audio px-2"></i></span>
                      </div>
                      <input placeholder="rainly.mp3" type="text" class="form-control" v-model="feedbackGet.audioName">
                    </div>

                    <div class="input-group input-group-sm mb-3">
                      <div class="input-group-prepend">
                        <span class="input-group-text">Sound Volume <i class="fas fa-volume-up px-2"></i></span>
                      </div>
                      <input placeholder="min: 1, max: 100" type="number" class="form-control" v-model="feedbackGet.volume">
                    </div>


                  </div>
                  <div class="col-12 col-xl-6" align="left">

                  <div class="d-flex justify-content-between">
                <!-- FIRST-->
                    <div>

                      <div>
                        <strong><i class="far fa-eye-slash"></i> Show Button;</strong>
                        <div class="form-check">
                          <input class="form-check-input" type="radio"  name="showButton" id="showbutton_active" v-model="feedbackGet.showButton" :value="true">
                          <label class="form-check-label" for="showbutton_active">
                            Active
                          </label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="radio" name="showButton" id="showbutton_deactive" v-model="feedbackGet.showButton" :value="false">
                          <label class="form-check-label" for="showbutton_deactive">
                            Deactive
                          </label>
                        </div>
                      </div>



                      <div class="pt-5">
                        <strong><i class="fas fa-volume-mute"></i> Volume Button;</strong>
                        <div class="form-check">
                          <input class="form-check-input" type="radio"  name="volumeButtonMute" id="volumebuttonmute_active" v-model="feedbackGet.volumeButtonMute" :value="true">
                          <label class="form-check-label" for="volumebuttonmute_active">
                            Active
                          </label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="radio" name="volumeButtonMute" id="volumebuttonmute_deactive" v-model="feedbackGet.volumeButtonMute" :value="false">
                          <label class="form-check-label" for="volumebuttonmute_deactive">
                            Deactive
                          </label>
                        </div>
                      </div>

                    </div>
                    <!-- /FIRST-->

                    <!-- SECOND-->
                    <div align="right">
                      <div>
                        <strong>Active Status <i class="fas fa-low-vision"></i></strong>
                        <div class="form-check">
                          <input class="form-check-input" type="radio" name="active" id="active_active" v-model="feedbackGet.active" :value="true">
                          <label class="form-check-label" for="active_active">
                            Active
                          </label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="radio" name="active" id="active_deactive" v-model="feedbackGet.active" :value="false">
                          <label class="form-check-label" for="active_deactive">
                            Deactive
                          </label>
                        </div>
                      </div>



                      <div class="pt-5">
                        <strong>Show / Don't show <i class="fas fa-sign-language"></i></strong>
                        <div class="form-check">
                          <input class="form-check-input" type="radio" name="showSound" id="showsound_active" v-model="feedbackGet.showSound" :value="true">
                          <label class="form-check-label" for="showsound_active">
                            Active
                          </label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="radio" name="showSound" id="showsound_deactive" v-model="feedbackGet.showSound" :value="false">
                          <label class="form-check-label" for="showsound_deactive">
                            Deactive
                          </label>
                        </div>
                      </div>
                    </div>
                    <!-- /SECOND-->



                  </div>
                </div>
              </div>
              <div class="pt-5" align="center">
                <div class="submit-edit-button"><button class="btn" @click="editSounds()">Save Changes</button></div>
              </div>
          </div>
   </div>
</div>
</template>


<script>
import { mapGetters } from 'vuex';
import axios from "axios";

export default {
  name: 'EditSounds',
  data() {
    return {
      editStatus: null,
    }
  },
  computed: {
    ...mapGetters([
        'getAdminSound'
    ]),
    feedbackGet() {
      return this.getAdminSound.find(f => f.id === this.$route.params.id)
    }
  },
  methods: {
    editSounds() {
        axios
          .patch(`https://soundair-api.herokuapp.com/audios/${this.$route.params.id}`, {
            name: this.feedbackGet.name,
            description: this.feedbackGet.description,
            icon: this.feedbackGet.icon,
            audioName: this.feedbackGet.audioName,
            volume: this.feedbackGet.volume,
            showButton: this.feedbackGet.showButton,
            volumeButtonMute: this.feedbackGet.volumeButtonMute,
            active: this.feedbackGet.active,
            showSound: this.feedbackGet.showSound,
          })
          .then((response) => {
            console.log(response.data.code)
            this.editStatus = response.data.code;
          })
    }
  }

}
</script>



<style scoped>
.edit-card-top {
  padding-top: 100px;
}

.edit-card {
  background-color: white;
  min-height: 500px;
  width: 80%;
  border-radius: 15px;
  box-shadow: 0 0 10px 0px gray;
  padding: 40px 10px 40px 10px;
}

.input-group-text {
  font-weight: bold;
  min-width: 170px;
}

.submit-edit-button button {
  border-radius: 10px;
  background-color: #007BFF;
  color: white;
  font-weight: bold;
}

.submit-edit-button button:hover {
  background-color: #388ae9;
  font-weight: bold;
  color: white;
}

</style>