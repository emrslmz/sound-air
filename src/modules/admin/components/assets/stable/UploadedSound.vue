<template>
  <div class="text-center pt-5">
      <div class="container">
           <h3 class="text-white">Uploaded Sound</h3>

        <div class="uploaded-sound-card-top">
           <div class="uploaded-sound-card" v-for="(sounds, index) in getSound" :key="index">
             <div class="d-flex align-items-center py-3">
               <div class="col-12 col-md-2 uploaded-sound-card-left">
                 <h6>
                   <i :class="sounds.icon"></i>
                 </h6>
                <router-link to="/admin/uploaded-sounds/edit/:id">
                  <h6><button class="btn btn-primary btn-sm">Edit/Delete</button></h6>
                </router-link>
               </div>
               <div class="col-12 col-md-10 text-left uploaded-sound-card-right">
                 <h6><i class="fas fa-file-signature"></i> Sound Name: {{ sounds.name }}</h6>
                 <h6><i class="far fa-file-audio"></i> Audio Name: {{ sounds.audioName }}</h6>
                 <h6><i class="far fa-file-audio"></i> Show Status: {{ sounds.showSound }}</h6>
               </div>
             </div>
           </div>
        </div>


      </div>
  </div>
</template>


<script>
import axios from 'axios';

export default {
  name: 'Uploaded',
  data() {
    return {
      getSound: [],
    }
  },
  mounted() {
     axios
      .get("https://soundair-api.herokuapp.com/audios")
      .then((response) => {
        this.getSound = response.data.data
      })
    },
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