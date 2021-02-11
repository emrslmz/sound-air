<template>
  <div>
   <div class="container text-xl-center" align="center">
     <div class="contact-us-padding"></div>

     <div>
       <h1><b>Is there something to tell us?</b></h1>
       <p class="text-spacing5">your feedback is valuable to us.</p>

       <transition name="component-fade">
          <the-success-card v-if="this.getContactStatus === 200"></the-success-card>
       </transition>
       <transition name="component-fade">
          <the-danger-card errorCode="5734" v-if="this.getContactStatus === 400"></the-danger-card>
       </transition>
     </div>


     <div class="pt-3">
                        
       <div class="d-xl-flex justify-content-around align-items-center py-3">
         <div class="col-12 col-xl-6 text-left text-xl-center">
           <h6>Name <b>*</b></h6>
         </div>
         <div class="col-12 col-xl-6 form-contact" align="left">
           <input class="px-3" placeholder="max_stone" v-model="getNewContact.contactName" type="text">
         </div>
       </div>

       <div class="d-xl-flex justify-content-around align-items-center form-contact-email">
         <div class="col-12 col-xl-6 text-left text-xl-center">
           <h6>Email Address <b>*</b></h6>
         </div>
         <div class="col-12 col-xl-6" align="left">
            <div class="d-xl-flex justify-content-start" style="border-radius: 10px" :style="{ border: [ this.getContactStatus === 400 ? '2px solid red' : '']}">
              <i class="fas fa-at py-3 px-3"></i>
              <input class="px-xl-3"  placeholder="nick.watson@loop.com" v-model="getNewContact.contactMail" type="email">
            </div>
           <small class="text-gray px-2"><label>Email address is for communication only. <router-link to="privacy-and-terms" class="text-green">Learn more.</router-link></label></small>                                                                              z
         </div>
       </div>

     </div>

     <div class="d-xl-flex justify-content-around align-items-center py-2">
       <div class="col-12 col-xl-6 text-left text-xl-center">
         <h6>Description <b>*</b></h6>
       </div>
       <div class="col-12 col-xl-6 form-contact" align="left">
         <textarea class="form-control px-3" v-model="getNewContact.contactDescription" placeholder="Your application is really successful, but " type="text" />
       </div>
     </div>

     <div class="d-xl-flex justify-content-around align-items-center py-3">
       <div class="col-12 col-xl-6 text-left text-xl-center">
         <h6>Contact <b>*</b></h6>
       </div>
       <div class="col-12 col-xl-6">
         <div class="d-xl-flex justify-content-start align-items-center">
           <div class="d-xl-flex align-items-center">
             <label class="checkbox-input text-left">
               I would like to receive notifications for feedback and updates.
               <input type="checkbox"  v-model="getNewContact.contactAcceptFeedback" />
               <span style="border-radius: 10px" :style="{ border: [ this.getContactStatus === 400 ? '2px solid red' : '']}" class="checkmark"></span>
             </label>
           </div>
         </div>
       </div>
     </div>


     <div class="d-xl-flex justify-content-around align-items-center py-2">
       <div class="col-12 col-xl-6 text-xl-center"></div>
       <div class="d-flex col-12 col-xl-6">
         <div class="submit-contact-us-button" :title="this.getContactStatus === 200 ? 'You already Sent!' : 'Click to send!'"><button class="btn" @click="sendContactUs(getNewContact)" :class="this.getContactStatus === 200 ? 'disabled' : 'active'" >Submit</button></div>
       </div>
     </div>

   </div>
  </div>
</template>


<script>
import { mapGetters, mapActions } from 'vuex';
import TheSuccessCard from '../dashboard/TheSuccessCard.vue';
import TheDangerCard from '../dashboard/TheDangerCard.vue';

export default {
  components: {
    TheSuccessCard,
    TheDangerCard
  },
  computed: {
    ...mapGetters([
        'getNewContact',
        'getContactStatus',
    ])
  },
  methods: {
    ...mapActions([
        'postContact',
    ]),

    sendContactUs(getNewContact) {
       if (this.getContactStatus !== 200) {
         this.postContact(getNewContact);
       }
    }
  }
}
</script>

<style scoped>

.contact-us-padding {
  padding-top: 200px;
}

@media (max-width: 768px) {
  .contact-us-padding {
    padding-top: 100px;
  }
}

.form-contact input {
  color: #5E6278;
  outline: 0;
  border: none;
  background-color: #F5F8FA;
  min-width: 340px;
  height: 45px;
  border-radius: 8px;
}

.form-contact textarea {
  color: #5E6278;
  outline: 0;
  border: none;
  background-color: #F5F8FA;
  max-width: 340px;
  height: 45px;
  border-radius: 8px;
}


.form-contact-email input {
  color: #5E6278;
  outline: 0;
  border: none;
  background-color: #F5F8FA;
  min-width: 300px;
  height: 45px;
  border-radius: 0 8px 8px 0;
}

.form-contact-email i {
  width: 40px;
  height: 45px;
  background-color: #F5F8FA;
  color: #7a7b7c;
  border-radius: 8px 0 0 8px;
}

.custom-card-input-area-communication {
  padding-top: 30px;
}





.checkbox-input {
  font-weight: bold;
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.checkbox-input input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: white;
  border-radius: 8px;
}

.checkbox-input:hover input ~ .checkmark {
  background-color: white;
}

.checkbox-input input:checked ~ .checkmark {
  background-color: #20d489;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.checkbox-input input:checked ~ .checkmark:after {
  display: block;
}

.checkbox-input .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}


.submit-contact-us-button button {
  border-radius: 10px;
  background-color: #20D489;
  color: white;
  font-weight: bold;
}

.submit-contact-us-button button:hover {
  background-color: #28ffa7;
  font-weight: bold;
  color: white;
}

</style>