<template>
  <div class="edit-card-top">
     <div class="d-flex justify-content-center align-items-center">
          <div class="col-12 col-md-6 edit-card">
               <div class="text-center">
                   <small>{{ feedbackGet.id }}</small>
               </div>
            <div class="row">
              <div class="col-12 col-md-6">
                 <div class="flex-column">

                   <div class="card-content-left d-flex justify-content-between align-items-end">
                     <h3><i class="fas fa-pen-nib pr-2"></i></h3>
                     <label>
                       Sound Name
                       <input :value="feedbackGet.name"  class="form-control" type="text">
                     </label>
                   </div>

                   <div class="card-content-left d-flex justify-content-between align-items-end">
                     <h3><i class="fas fa-spell-check pr-2"></i></h3>
                     <label>
                       Sound Description
                       <input :value="feedbackGet.description"  class="form-control" type="text">
                     </label>
                   </div>

                   <div class="card-content-left d-flex justify-content-between align-items-end">
                     <h3><i class="pr-2" :class="feedbackGet.icon"></i></h3>
                     <label>
                       Sound Icon
                       <input :value="feedbackGet.icon"  class="form-control" type="text">
                     </label>
                   </div>

                   <div class="custom-edit-left-hr"><hr></div>

                   <div class="card-content-left d-flex justify-content-between align-items-end">
                     <h3><i class="pr-2" :class="feedbackGet.icon"></i></h3>
                     <label>
                       Audio Name
                       <input :value="feedbackGet.audioName"  class="form-control" type="text">
                     </label>
                   </div>

                   <div class="card-content-left d-flex justify-content-between align-items-end">
                     <h3><i class="far fa-file-audio pr-2"></i></h3>
                     <label>
                       Audio Volume
                       <input :value="feedbackGet.volume"  class="form-control" type="number">
                     </label>
                   </div>
                   

                 </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="flex-column">

                  <div class="card-content-right d-flex justify-content-between align-items-end">
                    <label>
                      Button Show Status
                      <input :value="feedbackGet.showButton"  class="form-control" type="text">
                    </label>
                    <h3><i class="far fa-eye pr-2"></i></h3>
                  </div>

                  <div class="card-content-right d-flex justify-content-between align-items-end">
                    <label>
                      Volume Button
                      <input :value="feedbackGet.volumeButtonMute"  class="form-control" type="text">
                    </label>
                    <h3><i class="fas fa-volume-mute pr-2"></i></h3>
                  </div>

                  <div class="card-content-right d-flex justify-content-between align-items-end">
                    <label>
                      Active ?
                      <input :value="feedbackGet.active"  class="form-control" type="text">
                    </label>
                    <h3><i class="fas fa-check-circle pr-2"></i></h3>
                  </div>


                  <div class="card-content-right d-flex justify-content-between align-items-end">
                    <label>
                      Show / don't show
                      <input :value="feedbackGet.showSound"  class="form-control" type="text">
                    </label>
                    <h3><i class="fab fa-google-wallet fa-flip-horizontal fa-flip-vertical pr-2" :class="feedbackGet.showSound === true ? 'text-green' : 'text-red'"></i></h3>
                  </div>

                </div>
              </div>
            </div>
            <div class="text-center save-button-edit">
                <button class="btn">Save Changest</button>
            </div>
          </div>
     </div>
  </div>
</template>


<script>
import { mapGetters } from 'vuex';

export default {
  name: 'EditSounds',
  computed: {
    ...mapGetters([
        'getAdminSound'
    ]),
    feedbackGet() {
      return this.getAdminSound.find(f => f.id === this.$route.params.id)
    }
  },

}
</script>



<style scoped>
.edit-card-top {
  padding-top: 100px;
}

.edit-card {
  background-color: #E9E9E9;
  min-height: 500px;
  width: 100%;
  border-radius: 15px;
  box-shadow: 0 0 10px 2px black;
}

.card-content-left label {
  margin-right: 200px;
  font-weight: bold;
  font-size: small;
}

.card-content-right label {
  font-weight: bold;
  font-size: small;
  margin-left: 200px;

}

.custom-edit-left-hr {
  width: 50%;
}


.save-button-edit button {
  border: 1px solid #007BFF;
  font-weight: bold;
  color: #007BFF;
  border-radius: 20px;
  background-color: white;
  transition: 0.4s;
}

.save-button-edit button:hover {
  color: white;
  background-color: #007BFF;
  transition: 0.5s;
}

</style>