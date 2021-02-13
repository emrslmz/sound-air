<template>
  <div class="container-top">
    <div class="text-md-center contact-us-message-top">
      <h1><b>Rates</b></h1>
      <p v-if="getBugDeleteStatus === 200">
        <the-success-card text="Deletion successful!" />
      </p>
      <p class="text-spacing5" v-else>incoming votes</p>
       <div class="container">
         <div class="row">
           <div class="col-12 col-xl-8">
             <table class="table table-striped table-dark">
               <thead>
               <tr>
                 <th scope="col">#</th>
                 <th scope="col">Rate Icon</th>
                 <th scope="col">Rate Point</th>
               </tr>
               </thead>
               <tbody>
               <tr>
                 <th scope="row">1</th>
                 <td>Mark</td>
                 <td>Otto</td>
               </tr>
               </tbody>
             </table>
           </div>


           <div class="col-12 col-xl-4">
             <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
               <div class="card-header">Header</div>
               <div class="card-body">
                 <h5 class="card-title">Dark card title</h5>
                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
               </div>
             </div>
           </div>
         </div>
       </div>

    </div>
  </div>
</template>


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