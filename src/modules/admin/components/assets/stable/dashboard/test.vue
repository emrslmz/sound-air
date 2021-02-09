<div class="row">
<div class="col-12 col-md-6">
  <div class="flex-column">

    <div class="card-content-left d-flex justify-content-between align-items-end">
      <h3><i class="fas fa-pen-nib pr-2"></i></h3>
      <label>
        Sound Name
        <input v-model="feedbackGet.name" class="form-control" type="text">
      </label>
    </div>

    <div class="card-content-left d-flex justify-content-between align-items-end">
      <h3><i class="fas fa-spell-check pr-2"></i></h3>
      <label>
        Sound Description
        <input v-model="feedbackGet.description"  class="form-control" type="text">
      </label>
    </div>

    <div class="card-content-left d-flex justify-content-between align-items-end">
      <h3><i class="pr-2" :class="feedbackGet.icon"></i></h3>
      <label>
        Sound Icon
        <input v-model="feedbackGet.icon"  class="form-control" type="text">
      </label>
    </div>

    <div class="custom-edit-left-hr"><hr></div>

    <div class="card-content-left d-flex justify-content-between align-items-end">
      <h3><i class="pr-2" :class="feedbackGet.icon"></i></h3>
      <label>
        Audio Name
        <input v-model="feedbackGet.audioName"  class="form-control" type="text">
      </label>
    </div>

    <div class="card-content-left d-flex justify-content-between align-items-end">
      <h3><i class="far fa-file-audio pr-2"></i></h3>
      <label>
        Audio Volume
        <input v-model="feedbackGet.volume"  class="form-control" type="number">
      </label>
    </div>
  </div>
</div>



<div class="col-12 col-md-6">
  <div class="flex-column card-content-right-card">

    <div class="card-content-right d-flex justify-content-between align-items-end">
      <div class="d-flex justify-content-between align-item-center text-center">
        <label>Show Button Active / deactive </label>
        <label>
          Active
          <input name="showButton" id="showbutton_active" v-model="feedbackGet.showButton" :value="true" type="radio">
        </label>
        <label>
          Deactive
          <input name="showButton" id="showbutton_deactive" v-model="feedbackGet.showButton" :value="false" type="radio">
        </label>
      </div>
      <h3><i class="far fa-eye pl-2"></i></h3>
    </div>



    <div class="card-content-right d-flex justify-content-between align-items-end pt-5">
      <div class="d-flex justify-content-between align-item-center text-center">
        <label>Volume Button Active / ..</label>
        <label>
          Active
          <input name="volumeButtonMute" id="volumebuttonmute_active" v-model="feedbackGet.volumeButtonMute" :value="true" type="radio">
        </label>
        <label>
          Deactive
          <input name="volumeButtonMute" id="volumebuttonmute_deactive" v-model="feedbackGet.volumeButtonMute" :value="false" type="radio">
        </label>
      </div>
      <h3><i class="fas fa-volume-mute pl-2"></i></h3>
    </div>



    <div class="card-content-right d-flex justify-content-between align-items-end pt-5">
      <div class="d-flex justify-content-between align-item-center text-center">
        <label>Active / Deactive</label>
        <label>
          Active
          <input name="active" id="active_active" v-model="feedbackGet.active" :value="true" type="radio">
        </label>
        <label>
          Deactive
          <input name="active" id="active_deactive" v-model="feedbackGet.active" :value="false" type="radio">
        </label>
      </div>
      <h3><i class="fas fa-check-circle pl-2"></i></h3>
    </div>



    <div class="card-content-right d-flex justify-content-between align-items-end pt-5">
      <div class="d-flex justify-content-between align-item-center text-center">
        <label>Show / don't show</label>
        <label>
          Active
          <input name="showSound" id="showsound_active" v-model="feedbackGet.showSound" :value="true" type="radio">
        </label>
        <label>
          Deactive
          <input name="showSound" id="showsound_deactive" v-model="feedbackGet.showSound" :value="false" type="radio">
        </label>
      </div>
      <h3><i class="fab fa-google-wallet fa-flip-horizontal fa-flip-vertical pl-2" :class="feedbackGet.showSound === true ? 'text-green' : 'text-red'"></i></h3>
    </div>

  </div>
</div>
</div>
<div class="text-center save-button-edit">
<button class="btn" @click="editSounds()">Save Changest</button>
</div>
</div>