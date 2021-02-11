<template>
<div class="container-top">
  <div class="text-md-center contact-us-message-top">
    <h1><b>Feedbacks</b></h1>
    <p v-if="getDeleteContactStatus === 200">
      <the-success-card text="Deletion successful!" />
    </p>
    <p class="text-spacing5" v-else>incoming communication messages</p>
    <small v-if="getTotalContact > 0">Total message:  {{ getTotalContact }}</small>
    <small v-else-if="getTotalContact === 0">We haven't contact!</small>
    <small v-else><i class="fas fa-spinner fa-pulse"></i></small>
  </div>
  <div class="d-flex justify-content-center align-items-center">

    <div class="col-10">
      <table class="table table-striped table-dark">
        <thead>
        <tr class="text-center">
          <th scope="col">#</th>
          <th scope="col"><i class="fas fa-at"></i> Name</th>
          <th scope="col"><i class="fas fa-at"></i> Mail</th>
          <th scope="col"><i class="far fa-calendar-check"></i> To accept</th>
          <th style="min-width: 200px" scope="col"><i class="far fa-bookmark"></i>  Description</th>
          <th scope="col"><i class="far fa-trash-alt"></i></th>
        </tr>
        </thead>
        <tbody v-if="getTotalContact > 0">
        <tr v-for="(contact, index) in getFeedbacks" :key="index">
          <th scope="row">{{ index +1 }}</th>
          <td>{{contact.contactName}}</td>
          <td>{{contact.contactMail}}</td>
          <td><span v-if="contact.contactAcceptFeedback"><span class="badge badge-success">Conditions: <i>Accepted!</i></span></span></td>
          <td>{{contact.contactDescription}}</td>
          <td><button class="btn btn-danger btn-sm w-100 contact-delete-button" @click="deleteContact(contact, index)">Delete</button></td>
        </tr>
        </tbody>
        <tbody class="text-center" v-else>
          <h6><i class="fas fa-spinner fa-pulse"></i></h6>
        </tbody>
      </table>
    </div>


  </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import TheSuccessCard from "@/modules/admin/components/assets/stable/cards/TheSuccessCard";

export default {
  name: 'ContactUsMessages',
  components: {
    TheSuccessCard
  },
  computed: {
    ...mapGetters([
        'getFeedbacks',
        'getTotalContact',
        'getDeleteContactStatus'
    ])
  },
   methods: {
    ...mapActions([
        'getContacts',
        'contactDelete'
    ]),
     deleteContact(contact, index) {
       this.contactDelete(contact, index);
     }
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
 width: 100%;
  border-radius: 0 0 10px 10px;
}

.contact-delete-button {
  min-width: 100px;
  border: 1px solid #DC3545;
  font-weight: bold;
  color: #DC3545;
  border-radius: 20px;
  background-color: white;
  transition: 0.4s;
}

.contact-delete-button:hover {
  color: white;
  background-color: #C82333;
  transition: 0.5s;
}
</style>