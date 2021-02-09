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
                  <router-link :to="{ name: 'UploadedSoundEdit', params: {id: sounds.id, icon: sounds.icon, name: sounds.name, audioName: sounds.audioName, showSound: sounds.showSound }} ">
                    <h6><button type="button" class="btn btn-dark btn-sm">Edit/Delete</button></h6>
                  </router-link>
                </div>
                <div class="col-12 col-xl-10 text-left">
                  <div class="d-flex w-100 justify-content-between">
                    <h6><i class="fas fa-file-signature"></i> Sound Name: {{ sounds.name }}</h6>
                    <small class="badge badge-primary">{{ sounds.id }}</small>
                  </div>
                  <h6><i class="far fa-file-audio"></i> Audio Name: {{ sounds.audioName }}</h6>
                  <h6><i class="far fa-file-audio"></i> Show Status: {{ sounds.showSound }}</h6>
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

.uploaded-sound-card-top {
  box-shadow: 0 0 10px 1px #cecece;
  border-radius: 30px;
  background-color: white;
}
/*nth-of-type(2n)*/
.uploaded-sound-card {
  padding: 10px 0 10px 0;
  border-bottom: 1px solid #007BFF;
  min-width: 200px;
  min-height: 100px;
}


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