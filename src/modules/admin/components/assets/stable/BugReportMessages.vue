<template>
<div class="container-top">
  <div class="text-md-center contact-us-message-top">
    <h1><b>Feedbacks</b></h1>
        <p v-if="getBugDeleteStatus === 200">
          <the-success-card text="Deletion successful!" />
        </p>
        <p class="text-spacing5" v-else>incoming communication messages</p>
    <small v-if="getTotalBug > 0">Total message:  {{ getTotalBug }}</small>
    <small v-else-if="getTotalBug === 0">We haven' Bug!</small>
    <small v-else><i class="fas fa-spinner fa-pulse"></i></small>
  </div>
  <div class="d-flex justify-content-center align-items-center">

    <div>
      <table class="table table-striped table-dark text-left">
        <thead>
        <tr class="text-center table-top">
          <th scope="col">#</th>
          <th scope="col">User Name</th>
          <th scope="col"><i class="fas fa-at"></i> User Mail</th>
          <th scope="col"><i class="fas fa-inbox"></i> Mistake Subject</th>
          <th scope="col"><i class="fas fa-hashtag"></i> Mistake Code</th>
          <th scope="col"><i class="far fa-bookmark"></i> Description</th>
          <th scope="col"><i class="far fa-trash-alt"></i></th>
        </tr>
        </thead>
        <tbody v-if="getTotalBug > 0">
        <tr v-for="(mistakes, index) in getBugMessages" :key="index" class="text-center" >
          <th scope="row">{{ index +1 }}</th>
          <td>{{ mistakes.mistakeHunterName}}</td>
          <td>{{ mistakes.mistakeHunterMail}}</td>
          <td>{{ mistakes.mistakeSubject }}</td>
          <td><span class="badge badge-success w-50"><i class="fas fa-hashtag"></i><i>{{ mistakes.mistakeCode }}</i></span></td>
          <td>{{ mistakes.mistakeDescription}}</td>
          <td><button class="btn btn-danger btn-sm w-100 bug-delete" @click="deleteBug(mistakes, index)">Delete</button></td>
        </tr>
        </tbody>
        <div class="text-center" v-else>
          <h6><i class="fas fa-spinner fa-pulse"></i></h6>
        </div>
      </table>
    </div>                                                          

  </div>
</div>
</template>

<script>
import TheSuccessCard from './cards/TheSuccessCard.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'ContactUsMessages',
  components: {
    TheSuccessCard
  },
  computed: {
    ...mapGetters([
        'getBugMessages',
        'getTotalBug',
        'getBugDeleteStatus',
    ]),
  },
   methods: {
    ...mapActions([
        'fetchBugMessages',
        'deleteBugMessages'
    ]),
     deleteBug(mistakes, index) {
      this.deleteBugMessages(mistakes, index);
     }
   },
  mounted() {
    this.fetchBugMessages();
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


.bug-delete {
  min-width: 100px;
  border: 1px solid #DC3545;
  font-weight: bold;
  color: #DC3545;
  border-radius: 20px;
  background-color: white;
  transition: 0.4s;
}

.bug-delete:hover {
  color: white;
  background-color: #C82333;
  transition: 0.5s;
}

.table-top th {
  min-width: 200px;
}
</style>