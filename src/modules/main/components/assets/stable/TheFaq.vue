<template>
  <div>
   <div class="container text-xl-center" align="center">
     <div class="faq-page-padding"></div>
     <div>
       <h1><b>Frequently Asked Questions</b></h1>
       <p class="text-spacing5">you can find some of the issues you are facing here</p>
     </div>

      <div class="d-flex justify-content-center align-items-center row">

        <!--CARD-->
        <div class="col-12 col-md-4" v-for="(faq,index) in getFAQ" :key="index">
          <div class="card faq-page-card">
            <div class="card-header py-3" :class="faq.status === 'normal' ? 'bg-light' : 'bg-danger'">
             <h4><b><span v-if="faq.status === 'errorCode'"><small>Error Code:</small> <i class="fab fa-slack-hash"></i></span>{{ faq.title }}</b></h4>
            </div>
            <div class="card-body">
              <p class="card-text text-left">{{ faq.description }}</p>
            </div>
          </div>
        </div>
        <!--/CARD-->

      </div>
   </div>
  </div>
</template>


<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Faq',
  computed: {
    ...mapGetters([
        'getFAQ',
    ])
  }
}
</script>


<style scoped>

.faq-page-padding {
  padding-top: 100px;
}

.card-body {
  font:16px Georgia, 'Times New Roman';
}

.card-text {
  font-size: 18px;
  text-indent:1cm;
}

.faq-page-card {
  margin-bottom: 100px;
  border-radius: 0 0 20px 20px;
  width: 100%;
  min-height: 400px;
  box-shadow: 0 0 10px 2px #cecece;
}

</style>