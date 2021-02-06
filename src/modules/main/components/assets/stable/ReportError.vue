<template>
  <div>
   <div class="container text-xl-center" align="center">
     <div class="report-error-padding"></div>

     <div>
       <h1><b>Did you find our mistake?</b></h1>
       <p class="text-spacing5">fill out the form to help us improve</p>

       <transition name="component-fade">
         <the-success-card v-if="sendConfirm === 200" />
       </transition>
       <transition name="component-fade">
         <the-danger-card errorCode="5734" v-if="sendConfirm === 400" />
       </transition>
     </div>

     <div>

       <div class="d-xl-flex justify-content-around align-items-center py-3">
         <div class="col-12 col-xl-6 text-left text-xl-right">
           <h6>Your Name <b>*</b></h6>
         </div>
         <div class="col-12 col-xl-6 form-report-error" align="left">
           <input class="px-3" placeholder="max Stone" v-model="newReport.mistakeHunterName" type="text">
         </div>
       </div>

       <div class="d-xl-flex justify-content-around align-items-center form-report-error-code-email">
         <div class="col-12 col-xl-6 text-left text-xl-right">
           <h6>Email Address <b>*</b></h6>
         </div>
         <div class="col-12 col-xl-6" align="left">
           <div class="d-xl-flex justify-content-start align-items-center form-report-error-mail">
             <div style="border-radius: 10px" :style="{ border: [ this.sendConfirm === 400 ? '2px solid red' : '']}">
               <i class="fas fa-at py-3 px-3"></i>
               <input class="px-xl-3" placeholder="nick.watson@loop.com"  v-model="newReport.mistakeHunterMail" type="email">
             </div>

           </div>
           <small class="text-gray px-2"><label>Email address is for communication only. <a href="#" class="text-green">Learn more.</a></label></small>
         </div>
       </div>
       

       <div class="d-xl-flex justify-content-around align-items-center py-3">
         <div class="col-12 col-xl-6 text-left text-xl-right">
           <h6>About which subject </h6>
         </div>
         <div class="col-12 col-xl-6 form-report-error" align="left">
           <select v-model="newReport.mistakeSubject" class="px-xl-3">
             <option disabled value="">Select Please..</option>
             <option>None</option>
             <option>General</option>
             <option>Not working</option>
             <option>Design error</option>
           </select>
         </div>
       </div>

     <div class="d-xl-flex justify-content-around align-items-center form-report-error-code-email">
       <div class="col-12 col-xl-6 text-left text-xl-right">
         <h6>Do you have an error code?</h6>
       </div>
       <div class="col-12 col-xl-6" align="left">
         <div class="d-xl-flex justify-content-start form-report-error-code" style="border-radius: 10px">
           <i class="fas fa-hashtag py-3 px-3"></i>
           <input class="px-xl-3" v-model="newReport.mistakeCode" placeholder="example: 57" type="text">
         </div>
         <small class="text-gray px-2"><label>If you have, I can find a solution quickly. <a href="#" class="text-green">Heavily reported issues</a></label></small>
       </div>
     </div>


     <div class="d-xl-flex justify-content-around align-items-center py-2">
       <div class="col-12 col-xl-6 text-left text-xl-right">
         <h6>Brief description of the error location <b>*</b></h6>
       </div>
       <div class="col-12 col-xl-6 form-report-error" align="left">
         <textarea placeholder="header/footer/sidebar.." :style="{ border: [ this.sendConfirm === 400 ? '2px solid red' : '']}" v-model="newReport.mistakeDescription" class="form-control px-3" type="text" />
       </div>
     </div>

       <div class="d-xl-flex justify-content-around align-items-center py-2">
         <div class="col-12 col-xl-6 text-xl-center"></div>
         <div class="d-flex col-12 col-xl-6">
           <div class="submit-bug-report-button" :title="this.sendConfirm === 200 ? 'You already Sent!' : 'Click to send!'"><button class="btn" @click="sendError()" :class="this.sendConfirm === 200 ? 'disabled' : 'active'" >Submit</button></div>
         </div>
       </div>



     </div>
   </div>
  </div>
</template>

<script>
import TheSuccessCard from '../dashboard/TheSuccessCard.vue';
import TheDangerCard from '../dashboard/TheDangerCard.vue';
import axios from "axios";

export default {
  name: 'ReportErrorPage',
  components: {
    TheSuccessCard,
    TheDangerCard
  },
  data() {
    return {
      newReport: {
        mistakeHunterName: '',
        mistakeHunterMail: null,
        mistakeSubject: '',
        mistakeCode: '',
        mistakeDescription: null,
      },
      sendConfirm: null
    }
  },
  methods: {
    sendError() {
      if (this.sendConfirm !== 200) {
        axios
            .post("https://soundair-api.herokuapp.com/mistakes", {
              mistakeHunterName: this.newReport.mistakeHunterName,
              mistakeHunterMail: this.newReport.mistakeHunterMail,
              mistakeSubject: this.newReport.mistakeSubject,
              mistakeCode: this.newReport.mistakeCode,
              mistakeDescription: this.newReport.mistakeDescription,
            })
            .then((response) => {
              // console.log(response)
              this.newReport.mistakeHunterName = '';
              this.newReport.mistakeHunterMail = null;
              this.newReport.mistakeSubject = '';
              this.newReport.mistakeCode = '';
              this.newReport.mistakeDescription = null
              //200 OK
              console.log(response.status)
              this.sendConfirm = response.status;
            })
            .catch((error) => {
              //400 BAD REQUEST
              console.log(error.request.status);
              this.sendConfirm = error.request.status;
            })
      }
    }
  }
}
</script>


<style scoped>

.report-error-padding {
  padding-top: 100px;
}


.form-report-error select {
  color: #5E6278;
  outline: 0;
  border: none;
  background-color: #F5F8FA;
  min-width: 310px;
  height: 45px;
  border-radius: 8px;
}


.form-report-error input {
  color: #5E6278;
  outline: 0;
  border: none;
  background-color: #F5F8FA;
  min-width: 310px;
  height: 45px;
  border-radius: 8px;
}

.form-report-error-code-email input {
  color: #5E6278;
  outline: 0;
  border: none;
  background-color: #F5F8FA;
  max-width: 300px;
  min-width: 270px;
  height: 45px;
  border-radius: 0 8px 8px 0;
}

.form-report-error-mail i {
  width: 40px;
  height: 45px;
  background-color: #F5F8FA;
  color: #7a7b7c;
  border-radius: 8px 0 0 8px;
}

.form-report-error-code i {
  width: 40px;
  height: 45px;
  background-color: #F5F8FA;
  color: #7a7b7c;
  border-radius: 8px 0 0 8px;
}

.form-report-error textarea {
  color: #5E6278;
  outline: 0;
  border: none;
  background-color: #F5F8FA;
  min-width: 310px;
  max-width: 300px;
  height: 45px;
  border-radius: 8px;
}

.submit-bug-report-button button {
  border-radius: 10px;
  background-color: #20D489;
  color: white;
  font-weight: bold;
}

.submit-bug-report-button button:hover {
  background-color: #28ffa7;
  font-weight: bold;
  color: white;
}
</style>