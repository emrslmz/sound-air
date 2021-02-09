<div class="uploaded-sound-card-top">
<div class="uploaded-sound-card" v-for="(sounds, index) in getAdminSound" :key="index">
  <div class="d-flex align-items-center py-3">
    <div class="col-12 col-md-2 uploaded-sound-card-left">
      <h6>

      </h6>

    </div>
    <div class="col-12 col-md-10 text-left uploaded-sound-card-right">
      <h6><i class="fas fa-file-signature"></i> Sound Name: {{ sounds.name }}</h6>
      <h6><i class="far fa-file-audio"></i> Audio Name: {{ sounds.audioName }}</h6>
      <h6><i class="far fa-file-audio"></i> Show Status: {{ sounds.showSound }}</h6>
    </div>
  </div>
</div>
</div>