<template>
  <div class="container">
    <div class="admin-home-page-top"></div>
    <div class="row">
      <div class="col-12 col-xl-8">

        <div class="card card-primary text-white bg-primary mb-3">
          <div class="card-header"><i class="fas fa-cloud-download-alt"></i><i> Uploaded</i> Sounds</div>
          <div class="card-body">
            <h5 class="card-title">You can see the uploaded voices here </h5>
            <p class="card-text">To loaded voices you can: <i>Editing</i> or <i>deleting</i></p>

              <div class="d-flex justify-content-between align-items-center">
                <strong>Total sound loaded:</strong>
                <span class="badge badge-dark badge-pill" v-if="getTotalAdminSound > 0">{{  getTotalAdminSound }}</span>
                <span class="badge badge-light badge-pill" v-else-if="getTotalAdminSound === 0">We Haven't uploaded sound!</span>
                <span class="badge badge-dark badge-pill" v-else><i class="fas fa-spinner fa-pulse"></i></span>
              </div>
            <hr>

               <div class="pt-4 text-center">
                 <router-link to="/admin/uploaded-sounds">
                   <button class="btn btn-light btn-sm button-upload-sound"><i class="far fa-eye"></i> Review</button>
                 </router-link>
               </div>

            </div>
          </div>

        <div class="card card-light bg-light mb-3">
          <div class="card-header"><i class="fas fa-mail-bulk"></i><i> Contact Forms</i></div>
          <div class="card-body">
            <h5 class="card-title">Feedbacks</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div class="d-flex justify-content-between align-items-center">
              <strong>Total messages have been sent :</strong>
              <span class="badge badge-dark badge-pill" v-if="getTotalContact > 0">{{  getTotalContact }}</span>
              <span class="badge badge-dark badge-pill" v-else-if="getTotalContact === 0">We Haven't Message!</span>
              <span class="badge badge-dark badge-pill" v-else><i class="fas fa-spinner fa-pulse"></i></span>
            </div>
            <div class="pt-5 text-center">
              <router-link to="/admin/contact-us-messages">
                <button class="btn btn-dark btn-sm button-upload-sound"><i class="far fa-eye"></i> Look</button>
              </router-link>
            </div>
          </div>
        </div>

      </div>
      <div class="col-12 col-xl-4">

        <div class="card card-info text-white bg-info mb-3">
          <div class="card-header"><i class="fas fa-cloud-upload-alt"></i> <i>Upload</i> Sound</div>
          <div class="card-body">
            <h5 class="card-title">Click to upload audio file</h5>
            <p class="card-text">Click the button below to upload a sound and fill in the page that opens</p>
            <div class="pt-5 text-center">
              <router-link to="/admin/upload-sound">
                <button class="btn btn-dark btn-sm button-upload-sound"><i class="far fa-paper-plane"></i> Upload</button>
              </router-link>
            </div>
          </div>
        </div>

        <div class="card card-dark text-white bg-dark mb-3">
          <div class="card-header"><i class="fas fa-bug"></i><i> Bug Report</i> Form</div>
          <div class="card-body">
            <h5 class="card-title">Sent reports</h5>
            <p class="card-text">Review the submitted errors, make a return</p>
            <div class="d-flex justify-content-between align-items-center">
              <strong>Bugs reported:</strong>
              <span class="badge badge-light badge-pill" v-if="getTotalBug > 0">{{  getTotalBug }}</span>
              <span class="badge badge-light badge-pill" v-else-if="getTotalBug === 0">We Haven't bug!</span>
              <span class="badge badge-light badge-pill" v-else><i class="fas fa-spinner fa-pulse"></i></span>
            </div>
            <div class="pt-5 text-center">
              <router-link to="/admin/bug-report-messages">
                <button class="btn btn-light btn-sm button-upload-sound"><i class="far fa-eye"></i> Check</button>
              </router-link>
            </div>
          </div>
        </div>



      </div>
    </div>

    <div>
      <div class="card card-rate text-white mb-3">
        <div class="card-header"><i class="far fa-bell"></i><i> Evaluation</i> notifications </div>
        <div class="card-body">
          <p class="card-text">See the ratings posted by users</p>
          <div class="d-flex justify-content-between align-items-center">
            <strong>Total votes, feedback:</strong>
            <span class="badge badge-light badge-pill" v-if="getTotalRate > 0">{{  getTotalRate }}</span>
            <span class="badge badge-light badge-pill" v-else-if="getTotalRate === 0">We Haven't vote!</span>
            <span class="badge badge-light badge-pill" v-else><i class="fas fa-spinner fa-pulse"></i></span>
          </div>
          <div class="pt-5 text-center">
            <router-link to="/admin/rate-us-notification">
              <button class="btn btn-light btn-sm button-upload-sound"><i class="far fa-eye"></i> Check</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'AdminHomePage',
  computed: {
    ...mapGetters([
        'getTotalAdminSound',
        'getTotalContact',
        'getTotalBug',
        'getTotalRate'
    ])
  },
  methods: {
    ...mapActions([
      'fetchAdminSounds',
      'getContacts',
      'fetchBugMessages',
    ])
  },
  mounted() {
    this.fetchAdminSounds();
    this.getContacts();
    this.fetchBugMessages();
  }
}
</script>


<style scoped>
.admin-home-page-top {
  padding-top: 100px;
}

.button-upload-sound {
  max-width: 200px;
  border-radius: 10px;
  font-weight: bold;
}

.card-primary {
  min-height: 300px;
}

.card-light {
  min-height: 200px;
}

.card-info {
  min-height: 100px;
}

.card-dark {
  min-height: 100px;
}

.card-rate {
  width: 100%;
  min-height: 50px;
  background-color: saddlebrown;
}

.card {
  box-shadow: 0 0 5px white;
  width: 100%;
  border-radius: 10px;
}
</style>