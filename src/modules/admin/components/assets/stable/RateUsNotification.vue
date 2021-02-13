<template>
  <div class="container-top">
    <div class="text-md-center contact-us-message-top">
      <h1><b>Rates</b></h1>
      <p class="text-spacing5">incoming votes</p>
       <div class="container">
         <div class="row">
           <div class="col-12 col-xl-8">
             <table class="table table-striped table-dark">
               <thead>
               <tr>
                 <th scope="col">#</th>
                 <th scope="col">Rate Icon</th>
                 <th scope="col">Rate Point</th>
                 <th scope="col"><i class="far fa-trash-alt"></i></th>
               </tr>
               </thead>
               <tbody>
               <tr v-for="(rate,index) in getRate" :key="index">
                 <th scope="row">{{ index +1 }}</th>
                 <td><h6><i :class="rate.rateAnimals"></i></h6></td>
                 <td>{{ rate.ratePoint }}</td>
                 <td><button class="btn btn-danger btn-sm w-100 bug-delete-button" @click="deleteRate(rate, index)">Delete</button></td>
               </tr>
               </tbody>
             </table>
           </div>


           <div class="col-12 col-xl-4">
             <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
               <div class="card-header">Rate Status</div>
               <div class="card-body text-left">
                 <h5 class="card-title">Total Rate: {{ getTotalRate }} </h5>
                 <h5 class="card-title">Total Rate Point: </h5>
                 <div class="progress">
                   <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>

    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: 'RateUsNotificatin',
  computed: {
    ...mapGetters([
        'getRate',
        'getTotalRate'
    ])
  },
  methods: {
    ...mapActions([
        'fetchRate',
        'deleteRate'
    ]),
    deleteRate(rate, index) {
      this.deleteRate(rate, index);
    }
  },
  mounted() {
    this.fetchRate();
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

.bug-delete-button {
  min-width: 100px;
  border: 1px solid #DC3545;
  font-weight: bold;
  color: #DC3545;
  border-radius: 20px;
  background-color: white;
  transition: 0.4s;
}

.bug-delete-button:hover {
  color: white;
  background-color: #C82333;
  transition: 0.5s;
}

.table-top th {
  min-width: 200px;
}
</style>