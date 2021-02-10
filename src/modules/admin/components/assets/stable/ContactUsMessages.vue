<template>
<div class="container-top">
  <div class="text-md-center contact-us-message-top">
    <h1><b>Feedbacks</b></h1>
    <p class="text-spacing5">incoming communication messages</p>
  </div>
  <div class="d-flex justify-content-center align-items-center">

    <div class="col-6 col-xl-3" v-for="(contact, index) in contacts" :key="index">
      <div class="contact-us-message-card">
         <div class="text-center pt-3">
           <h1><i class="far fa-user-circle"></i></h1>
         </div>
          <div class="px-3">
            <b><span class="badge badge-secondary px-3"><i class="fas fa-at"></i></span> {{contact.contactMail}}</b>
            <br>
            <b><span class="badge badge-secondary px-3"><i class="fas fa-paperclip"></i></span> Description;</b>
            <b class="list-group-item">{{contact.contactDescription}}</b>

            <span v-if="contact.contactAcceptFeedback"><span class="badge badge-success">Conditions: <i>Accepted!</i></span></span>

          </div>
       </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import axios from "axios";

export default {
  name: 'ContactUsMessages',
  data() {
    return {
      contacts: []
    }
  },
   methods: {
    ...mapActions([
        'getContacts',
    ]),
    getFeedbacks() {
      axios
          .get("https://soundair-api.herokuapp.com/contacts")
          .then((response) => {
            this.contacts = response.data.data;
            console.log(response)
          })
      },
   },
  mounted() {
    this.getContacts();
  }
}
</script>


<style scoped>
.container-top {
  padding: 100px;
}

.contact-us-message-card {
  width: 100%;
  min-height: 400px;
  background-color: white;
  box-shadow: 0 0 2px 1px #cecece;
  border-radius: 10px;
  margin-top: 30px;
}

.list-group-item {
  min-height: 250px;
}
</style>