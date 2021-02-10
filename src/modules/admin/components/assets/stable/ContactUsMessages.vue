<template>
<div class="container-top">
  <div class="text-md-center contact-us-message-top">
    <h1><b>Feedbacks</b></h1>
    <p class="text-spacing5">incoming communication messages</p>
    <small>Total message  {{ getTotalContact }}</small>
  </div>
  <div class="d-flex justify-content-center align-items-center">

    <div>
      <table class="table table-striped table-dark">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Mail</th>
          <th scope="col">To accept</th>
          <th style="min-width: 200px" scope="col">Description</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(contact, index) in getFeedbacks.reverse()" :key="index">
          <th scope="row">{{ index +1 }}</th>
          <td>{{contact.contactMail}}</td>
          <td><span v-if="contact.contactAcceptFeedback"><span class="badge badge-success">Conditions: <i>Accepted!</i></span></span></td>
          <td>{{contact.contactDescription}}</td>
        </tr>
        </tbody>
      </table>
    </div>



  </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
// import axios from "axios";

export default {
  name: 'ContactUsMessages',
  computed: {
    ...mapGetters([
        'getFeedbacks',
        'getTotalContact',
    ])
  },
   methods: {
    ...mapActions([
        'getContacts',
    ]),
    // getFeedbacks() {
    //   axios
    //       .get("https://soundair-api.herokuapp.com/contacts")
    //       .then((response) => {
    //         this.contacts = response.data.data;
    //         console.log(response)
    //       })
    //   },
   },
  mounted() {
    this.getContacts();
  }
}
</script>


<style scoped>
.container-top {
  padding: 50px;
}

.table-striped {
 width: 1000px;
  border-radius: 0 0 10px 10px;
}
</style>