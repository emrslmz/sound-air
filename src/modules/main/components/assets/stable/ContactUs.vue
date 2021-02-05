<template>
  <div>
   <div class="container text-xl-center" align="center">
     <div class="contact-us-padding"></div>
     <div>
       <h1><b>Is there something to tell us?</b></h1>
       <p class="text-spacing5">your feedback is valuable to us.</p>

       <the-success-card v-if="this.sendConfirm === 200"></the-success-card>
       <the-danger-card v-if="this.sendConfirm === 400"></the-danger-card>
     </div>


     <div class="pt-3">

       <div class="d-xl-flex justify-content-around align-items-center py-3">
         <div class="col-12 col-xl-6 text-xl-center">
           <h6>Name <b>*</b></h6>
         </div>
         <div class="col-12 col-xl-6 form-contact" align="left">
           <input class="px-3" value="max_stone" v-model="newContact.contactName" type="text">
         </div>
       </div>

       <div class="d-xl-flex justify-content-around align-items-center form-contact-email">
         <div class="col-12 col-xl-6 text-xl-center">
           <h6>Email Address <b>*</b></h6>
         </div>
         <div class="col-12 col-xl-6" align="left">
           <div class="d-xl-flex justify-content-start">
             <i class="fas fa-at py-3 px-3"></i>
             <input class="px-xl-3" :style="{ this.sendConfirm === 400 ? 'border: 1px solid red': ''}" value="nick.watson@loop.com" v-model="newContact.contactMail" type="email">
           </div>
           <small class="text-gray px-2"><label>Email address is for communication only. <a href="#" class="text-green">Learn more.</a></label></small>
         </div>
       </div>
     </div>

     <div class="d-xl-flex justify-content-around align-items-center py-2">
       <div class="col-12 col-xl-6 text-xl-center">
         <h6>Description <b>*</b></h6>
       </div>
       <div class="col-12 col-xl-6 form-contact" align="left">
         <textarea class="form-control px-3" v-model="newContact.contactDescription" value="max_stone" type="text" />
       </div>
     </div>

     <div class="d-xl-flex justify-content-around align-items-center py-3">
       <div class="col-12 col-xl-6 text-xl-center">
         <h6>Contact <b>*</b></h6>
       </div>
       <div class="col-12 col-xl-6">
         <div class="d-xl-flex justify-content-start align-items-center">
           <div class="d-xl-flex align-items-center">
             <label class="checkbox-input">
               I would like to receive notifications for feedback and updates.
               <input type="checkbox" v-model="newContact.contactAcceptFeedback" />
               <span class="checkmark"></span>
             </label>
           </div>
         </div>
       </div>
     </div>


     <div class="d-xl-flex justify-content-around align-items-center py-2">
       <div class="col-12 col-xl-6 text-xl-center"></div>
       <div class="d-flex col-12 col-xl-6">
         <div class="save-changes-account-button"><button class="btn" @click="sendContactUs()">Submit</button></div>
       </div>
     </div>

   </div>
  </div>
</template>


<script>
import TheSuccessCard from '../dashboard/TheSuccessCard.vue';
import TheDangerCard from '../dashboard/TheDangerCard.vue';
import axios from 'axios';

export default {
  components: {
    TheSuccessCard,
    TheDangerCard
  },
  data() {
    return {
      newContact: {
        contactName: '',
        contactMail: null,
        contactDescription: '',
        contactAcceptFeedback: null,
      },
      sendConfirm: null 

    }
  },
  methods: {
    sendContactUs() {
      axios
          .post("https://soundair-api.herokuapp.com/contacts", {
            contactName: this.newContact.contactName,
            contactMail: this.newContact.contactMail,
            contactDescription: this.newContact.contactDescription,
            contactAcceptFeedback: this.newContact.contactAcceptFeedback,
          })
          .then((response) => {
              // console.log(response)
              this.newContact.contactName = '';
              this.newContact.contactMail = null;
              this.newContact.contactDescription = '';
              this.newContact.contactAcceptFeedback = null;
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
  min-width: 70%;
  height: 45px;
  border-radius: 8px;
}

.form-contact textarea {
  color: #5E6278;
  outline: 0;
  border: none;
  background-color: #F5F8FA;
  max-width: 70%;
  height: 45px;
  border-radius: 8px;
}


.form-contact-email input {
  color: #5E6278;
  outline: 0;
  border: none;
  background-color: #F5F8FA;
  min-width: 63%;
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


.save-changes-account-button button {
  border-radius: 10px;
  background-color: #20D489;
  color: white;
  font-weight: bold;
}

.save-changes-account-button button:hover {
  background-color: #28ffa7;
  font-weight: bold;
  color: white;
}

</style>