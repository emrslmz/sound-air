<template>
  <div class="text-center pt-5">
      <div class="container">
       <h3>Uploaded Sound </h3>
        <small>You uploaded {{getTotalAdminSound}} audio files in total.</small>
        <ul class="list-group">

          <div class="my-3">
            <li class="list-group-item " v-for="(sounds, index) in getAdminSound" :key="index">
              <div class="d-xl-flex justify-content-start align-items-center">
                <div class="col-12 col-xl-2">

                  <h2 class="text-green" v-if="sounds.icon"><i :class="sounds.icon"></i></h2>
                  <h2 class="text-red" v-else> <i class="fas fa-times"></i></h2>

                  <div class="d-flex justify-content-around">
                    <router-link :to="{ name: 'UploadedSoundEdit', params: {id: sounds.id, icon: sounds.icon, name: sounds.name, audioName: sounds.audioName, showSound: sounds.showSound }} ">
                      <h6><button class="btn btn-dark btn-sm edit-delete-button">Edit</button></h6>
                    </router-link>
                    <router-link to="d/sadas">
                      <h6><button class="btn btn-danger btn-sm edit-delete-button">Delete</button></h6>
                    </router-link>                                
                  </div>
                </div>
                <div class="col-12 col-xl-10 text-left">
                  <div class="d-md-flex w-100 justify-content-between">
                    <h6><small><i class="fas fa-file-signature"></i> Sound Name: <b>{{ sounds.name }}</b></small></h6>
                    <h6><small class="badge badge-primary"><i class="fas fa-passport"></i> {{ sounds.id }}</small></h6>
                  </div>
                  <h6><small><i class="far fa-file-audio"></i> Audio Name: <b>{{ sounds.audioName }}</b></small></h6>
                  <h6 v-if="sounds.showSounds"><small class="text-green"><i class="fas fa-toggle-on"></i> Show Status: <b>{{ sounds.showSound }}</b></small></h6>
                  <h6 v-else><small class="text-red"><i class="fas fa-toggle-off"></i> Show Status: <b>{{ sounds.showSound }}</b></small></h6>
                </div>
              </div>
            </li>
          </div>

        </ul>

      </div>
  </div>
</template>


<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Uploaded',
  data() {
    return {
      getSound: [],
    }
  },
  computed: {
    ...mapGetters([
        'getAdminSound',
        'getTotalAdminSound'
    ])
  },
  methods: {
    ...mapActions([
        'fetchAdminSounds'
    ])
  },
  mounted() {
    this.fetchAdminSounds();
  }

}
</script>

<style scoped>

.edit-delete-button {
  border-radius: 10px;
  min-width: 70px;
}
/*nth-of-type(2n)*/



.uploaded-sound-card-left i {
  font-size: 36px;
  color: #191919;
}
.uploaded-sound-card-left button {
  border-radius: 10px;
}

.uploaded-sound-card-right h6 {
  font-weight: bold;
  
}
</style>