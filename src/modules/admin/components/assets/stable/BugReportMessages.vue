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
          <th style="min-width: 200px" scope="col">User Name</th>
          <th style="min-width: 200px" scope="col"><i class="fas fa-at"></i> User Mail</th>
          <th style="min-width: 200px" scope="col"><i class="fas fa-inbox"></i> Mistake Subject</th>
          <th style="min-width: 200px" scope="col"><i class="fas fa-hashtag"></i> Mistake Code</th>
          <th style="min-width: 200px" scope="col"><i class="far fa-bookmark"></i> Description</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(mistakes, index) in getBugMessages" :key="index">
          <th scope="row">{{ index +1 }}</th>
          <td>{{ mistakes.mistakeHunterName}}</td>
          <td>{{ mistakes.mistakeHunterMail}}</td>
          <td>{{ mistakes.mistakeSubject }}</td>
          <td><span class="badge badge-success w-50"><i class="fas fa-hashtag"></i><i>{{ mistakes.mistakeCode }}</i></span></td>
          <td>{{mistakes.mistakeDescription}}</td>
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
        'getBugMessages',
    ])
  },
   methods: {
    ...mapActions([
        'fetchBugMessages',
    ]),
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
</style>