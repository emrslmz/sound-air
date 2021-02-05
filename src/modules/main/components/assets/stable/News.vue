<template>
  <div>
   <div class="container text-xl-center" align="center">
     <div class="last-updates-padding"></div>
     <div>
       <h1><b>What's new about our application</b></h1>
       <p class="text-spacing5">here are the innovations we have added</p>
     </div>

      <div class="d-flex row">
        <div class="col-12 col-md-4">

        <!--SMALL PHOTOS AREA-->
          <div class="card">
            <div class="not-found-images" style="background-image: url('/images/img/image-not-found.png')"></div>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        <!--/SMALL PHOTOS AREA-->

        </div>
        <div class="col-12 col-md-8">

        <!--BIG PHOTOS AREA-->
          <div class="card">
            <div class="not-found-images" style="background-image: url('/images/img/image-not-found.png')"></div>
            <div class="card-body" >
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        <!--/BIG PHOTOS AREA-->

        </div>

      </div>
   </div>
  </div>
</template>


<style scoped>

.last-updates-padding {
  padding-top: 100px;
}

.not-found-images {
  border-radius: 20px 20px 0 0;
  background-position: center;
  /*background-attachment: fixed;*/
  background-repeat: no-repeat;
  background-size: 800px;
  min-width: 300px;
  height: 200px;
}

.card {
  border-radius: 20px;
  width: 100%;
  min-height: 200px;
  box-shadow: 0 0 10px 2px #cecece;
}

</style>