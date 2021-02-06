<template>
  <div>
   <div class="container text-xl-center" align="center">
     <div class="share-app-padding"></div>
     <div>
       <h1><b>Follow us on Social Media</b></h1>
       <p class="text-spacing5">and share</p>
     </div>

      <div class="d-flex row">

        <!--CARD-->
        <div class="col-12 col-md-4" v-for="(social,index) in getSocial" :key="index">
          <div class="card share-card bg-light">
            <div class="card-body text-center d-flex justify-content-center align-items-center" :title="social.socialName">
              <a target="_blank" :href="social.socialLink"><h1><i :class="social.socialClass"></i></h1></a>
            </div>
          </div>
        </div>
        <!--/CARD-->

      </div>

     <div>
       <hr>
       <div>
         <label><small>or</small></label>
         <div>
           <router-link to="contact-us">
             <button class="btn try-now-for-free-button">CONTACT NOW</button>
           </router-link>
         </div>
         
       </div>
     </div>


   </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ShareApp',
  computed: {
    ...mapGetters([
        'getSocial'
    ])

  }
}
</script>


<style scoped>

.share-app-padding {
  padding-top: 200px;
}

.card-body h1 {
  font-size: 72px;
}

.share-card {
  margin-bottom: 25px;
  border-radius: 20px;
  width: 100%;
  min-height: 200px;
  box-shadow: 0 0 10px 2px #cecece;
}


.try-now-for-free-button {
  width: 200px;
  height: 50px;
  border-radius: 25px;
  color: white;
  background-color:  #20D489;
  transition: 0.5s;
}

.try-now-for-free-button:hover {
  background-color: #28ffa7;
  box-shadow: 1px 2px 5px 1px white;
  transition: 0.5s;
}

</style>