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
          <div class="card card-twitter">
          <!--<div class="not-found-images" style="background-image: url('/images/img/image-not-found.png')"></div>-->
          <div class="card-body">
            <a class="twitter-timeline" href="https://twitter.com/SoundAiir?ref_src=twsrc%5Etfw">Tweets by SoundAiir</a>
            <p class="card-text">You can find the latest developments on our twitter.</p>
          </div>
        </div>
        <!--/SMALL PHOTOS AREA-->

        </div>
        <div class="col-12 col-md-8">

        <!--BIG PHOTOS AREA-->
          <div class="card">
            <div class="not-found-images" style="background-image: url('/images/news/news_new_sound_addded.png')"></div>
            <div class="card-body">
              <h5 class="card-title">News Sound</h5>
              <p class="card-text">15+ new sounds have been added to Sound AIR! <a href="play">Click</a> here to try the sounds.</p>
            </div>
          </div>
        <!--/BIG PHOTOS AREA-->

          <!--BIG PHOTOS AREA-->
          <div class="card mt-3">
            <div class="not-found-images" style="background-image: url('/images/news/news_sound_air_is_available.jpg')"></div>
            <div class="card-body" >
              <h5 class="card-title">Sound AIR is now available!</h5>
              <p class="card-text">Explore now! <a target="_blank" href="https://bit.ly/3pj50j4">Click</a> </p>
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

.card-twitter {
  border-radius: 20px 0 0 20px;
  width: 100%;
  box-shadow: 0 0 10px 2px #cecece;
  overflow: auto;
  max-height: 620px;
}

</style>