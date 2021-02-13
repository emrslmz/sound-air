<template>
  <div>
   <div class="container text-xl-center" align="center">
     <div class="report-error-padding"></div>

     <div>
       <h1><b>Did you find our mistake?</b></h1>
       <p class="text-spacing5">fill out the form to help us improve</p>

       <transition name="component-fade">
         <the-success-card success-message="Your message has arrived. You will get a return as soon as possible!" v-if="getPostMistakeStatus === 200" />
       </transition>
       <transition name="component-fade">
         <the-danger-card errorCode="5734" v-if="getPostMistakeStatus === 400" />
       </transition>
     </div>

     <div>

       <div class="d-xl-flex justify-content-around align-items-center py-3">
         <div class="col-12 col-xl-6 text-left text-xl-right">
           <h6>Your Name <b>*</b></h6>
         </div>
         <div class="col-12 col-xl-6 form-report-error" align="left">
           <input class="px-3" placeholder="max Stone" v-model="getNewReport.mistakeHunterName" type="text">
         </div>
       </div>

       <div class="d-xl-flex justify-content-around align-items-center form-report-error-code-email">
         <div class="col-12 col-xl-6 text-left text-xl-right">
           <h6>Email Address <b>*</b></h6>
         </div>
         <div class="col-12 col-xl-6" align="left">
           <div class="d-xl-flex justify-content-start align-items-center form-report-error-mail">
             <div style="border-radius: 10px" :style="{ border: [ getPostMistakeStatus === 400 ? '2px solid red' : '']}">
               <i class="fas fa-at py-3 px-3"></i>
               <input class="px-xl-3" placeholder="nick.watson@loop.com"  v-model="getNewReport.mistakeHunterMail" type="email">
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
           <select v-model="getNewReport.mistakeSubject" class="px-xl-3">
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
           <i @click="findErrorCode(getNewReport)" class="fas fa-hashtag py-3 px-3 text-green cursor-pointer"></i>
           <input class="px-xl-3" v-model="getNewReport.mistakeCode" placeholder="example: 57" type="text">
         </div>
         <small class="text-gray px-2"><label>If you have, I can find a solution quickly. <br> Click the button(#) on the left <a href="#" class="text-green">Heavily reported issues</a></label></small>
       </div>
     </div>


     <div class="d-xl-flex justify-content-around align-items-center py-2">
       <div class="col-12 col-xl-6 text-left text-xl-right">
         <h6>Brief description of the error location <b>*</b></h6>
       </div>
       <div class="col-12 col-xl-6 form-report-error" align="left">
         <textarea placeholder="header/footer/sidebar.." :style="{ border: [ getPostMistakeStatus === 400 ? '2px solid red' : '']}" v-model="getNewReport.mistakeDescription" class="form-control px-3" type="text" />
       </div>
     </div>

       <div class="d-xl-flex justify-content-around align-items-center py-2">
         <div class="col-12 col-xl-6 text-xl-center"></div>
         <div class="d-flex col-12 col-xl-6">
           <div class="submit-bug-report-button" :title="getPostMistakeStatus === 200 ? 'You already Sent!' : 'Click to send!'"><button class="btn" @click="sendError(getNewReport)" :class="getPostMistakeStatus === 200 ? 'disabled' : 'active'" >Submit</button></div>
         </div>
       </div>

       <transition name="component-fade">
         <div v-if="errorCodeCard">
           <the-warning-card :description="this.errorCodeSolution" />
         </div>
       </transition>


     </div>
   </div>
  </div>
</template>

<script>
import TheSuccessCard from '../dashboard/TheSuccessCard.vue';
import TheDangerCard from '../dashboard/TheDangerCard.vue';
import TheWarningCard from "../dashboard/TheWarningCard.vue";
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'ReportErrorPage',
  components: {
    TheSuccessCard,
    TheDangerCard,
    TheWarningCard
  },
  data() {
    return {
      errorCodeSolution: '',
      errorCodeCard: false,
    }
  },
  computed: {
    ...mapGetters([
        'getFAQ',
        'getNewReport',
        'getPostMistakeStatus',
    ])
  },
  methods: {
    ...mapActions([
        'postMistake'
    ]),
    sendError(getNewReport) {
      this.postMistake(getNewReport);
    },
    findErrorCode(getNewReport) {
      const solution = this.getFAQ.find(element => element.title === getNewReport.mistakeCode);
      if (solution === null) {
        this.errorCodeCard = false;
      } else {
        this.errorCodeCard = true;
        this.errorCodeSolution = solution.description;
      }

    }
  },

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