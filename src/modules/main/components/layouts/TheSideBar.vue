<template>
  <div class="sidebar-body">
    <div class="d-flex justify-content-around align-items-center bg-dark px-3 py-3">
      <router-link to="/">
        <div class="sidebar-top-box">
            <div class="d-flex justify-content-center align-items-center py-3">
                <h3 class="side-bar-icon"><i class="fas fa-home text-dark"></i></h3>
            </div>
        </div>
      </router-link>
      <div class="sidebar-top-box">
        <div class="d-flex justify-content-center align-items-center py-3" @click="showStopwatch = !showStopwatch">
            <h3 class="side-bar-icon"><i class="fas fa-stopwatch text-dark"></i></h3>
        </div>
      </div>

      <!-- MOBILE PLATFORM BUTTON -->
      <div class="sidebar-top-box">
           <div class="d-flex justify-content-center align-items-center py-3 side-bar-icon" data-toggle="collapse" data-target="#sidebar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" title="Click for more pages on mobile platforms.">
              <h3 class="side-bar-icon">
                <i class="fas fa-caret-down text-dark"></i>
              </h3>
             <router-link to="play">
              <h3 class="side-bar-icon">
                <i class="fas fa-stream text-dark"></i>
              </h3>
             </router-link>
           </div>
      </div>
      <!-- /MOBILE PLATFORM BUTTON -->

      <div class="sidebar-top-box">
        <router-link to="according-to-weather">
          <div class="d-flex justify-content-center align-items-center py-3">
             <h3 class="side-bar-icon"><i class="fas fa-search-location text-dark"></i></h3>
          </div>
        </router-link>
      </div>

    </div>


    <!-- MOBILE PLATFORM BUTTON -->
    <div class="navbar navbar-expand-lg navbar-dark bg-dark mobile-device-side-bar-device">
      <div class="collapse navbar-collapse" id="sidebar">
        <div>
          <div class="side-bar-middle-title text-white" v-if="showStopwatch">
            <the-stopwatch />
          </div>
        </div>

        <div>
          <router-link to="news">
            <div class="side-bar-middle-title text-white">
              <h5><span><i class="fas fa-bullhorn"></i></span> Last updates</h5>
            </div>
          </router-link>
        </div>

        <div>
          <router-link to="report-error">
            <div class="side-bar-middle-title text-white">
              <h5><span><i class="fas fa-bug"></i></span> Report error or solution</h5>
            </div>
          </router-link>
        </div>

        <div>
          <router-link to="privacy-and-terms">
            <div class="side-bar-middle-title text-white">
              <h5><span><i class="fas fa-search"></i></span> Privacy & Terms</h5>
            </div>
          </router-link>
        </div>

        <div class="side-bar-middle-custom-hr"><hr></div>

        <div>
          <div class="side-bar-middle-title text-white ">
            <h5 class="disabled"><span><i class="fas fa-file-contract"></i></span> User agreement</h5>
          </div>
        </div>

        <div>
          <router-link to="FAQ">
            <div class="side-bar-middle-title text-white">
              <h5><span><i class="far fa-question-circle"></i></span> FAQ</h5>
            </div>
          </router-link>
        </div>

        <div>
          <router-link to="share">
            <div class="side-bar-middle-title text-white">
              <h5><span><i class="fas fa-share-alt"></i></span> Share the app!</h5>
            </div>
          </router-link>
        </div>

        <div>
          <router-link to="rate-us">
            <div class="side-bar-middle-title text-white">
              <h5><span><i class="fas fa-medal text-gold"></i></span> Rate us</h5>
            </div>
          </router-link>
        </div>

      </div>
    </div>

    <!-- /MOBILE PLATFORM BUTTON -->


    <div class="flex-column side-bar-middle py-4 px-3">
        <div class="container">
           <div class="side-bar-middle-title text-white" v-if="showStopwatch">
              <the-stopwatch />
           </div>
          <router-link to="news">
            <div class="side-bar-middle-title text-white">
                <h5><span><i class="fas fa-bullhorn"></i></span> Last updates</h5>
            </div>
          </router-link>
          <router-link to="report-error">
            <div class="side-bar-middle-title text-white">
              <h5><span><i class="fas fa-bug"></i></span> Report error or solution</h5>
            </div>
          </router-link>
          <router-link to="privacy-and-terms">
            <div class="side-bar-middle-title text-white">
              <h5><span><i class="fas fa-search"></i></span> Privacy & Terms</h5>
            </div>
          </router-link>

          <div class="side-bar-middle-custom-hr"><hr></div>

          <div class="side-bar-middle-title text-white ">
            <h5 class="disabled"><span><i class="fas fa-file-contract"></i></span> User agreement</h5>
          </div>
          <router-link to="FAQ">
            <div class="side-bar-middle-title text-white">
              <h5><span><i class="far fa-question-circle"></i></span> FAQ</h5>
            </div>
          </router-link>
          <router-link to="share">
            <div class="side-bar-middle-title text-white">
              <h5><span><i class="fas fa-share-alt"></i></span> Share the app!</h5>
            </div>
          </router-link>
          <router-link to="rate-us">
            <div class="side-bar-middle-title text-white">
              <h5><span><i class="fas fa-medal text-gold"></i></span> Rate us</h5>
            </div>
          </router-link>

        </div>
    </div>
    <!-- FOOTER-->
    <div class="footer-sidebar">
<!--      <div class="d-flex justify-content-around">-->
<!--        <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="false">Tweet</a>-->

<!--        <iframe src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&layout=button&size=small&width=67&height=20&appId" width="67" height="20" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">Share</iframe>-->
<!--      </div>-->
      <the-footer />
    </div>
    <!-- FOOTER-->

  </div>
</template>

<script>
import TheFooter from './TheFooter.vue';
import TheStopwatch from './TheStopwatch.vue';

export default {
  name: 'SideBar',
  components: {
    TheFooter,
    TheStopwatch
  },
  data() {
    return {
        showStopwatch: false,
    }
  }
}
</script>

<style scoped>

.sidebar-body {
  position: absolute;
  background-color: #343A40;
  min-height: 93vh;
  width: 300px;
  display: block;
  border-radius: 0 0 40px 0;
}

@media (max-width: 768px) {
  .sidebar-body {
    display: inline;
    position: relative;
  }
  .side-bar-middle {         /* last update vb */
    display: none;
  }
  .footer-sidebar {
    position: absolute;
    display: none;
  }
}

.fa-stream {
  display: none;
}

.fa-caret-down {
  display: inline;
}

.mobile-device-side-bar-device {
  display: block;
}

@media (min-width: 768px) {
  .mobile-device-side-bar-device {
    display: none;
  }
  .fa-stream {
    display: inline;
  }
  .fa-caret-down {
    display: none;
  }
}

.sidebar-top-box {
  border-radius: 20px;
  border: 1px solid white;
  box-shadow: 0 0 5px white;
  background-color: #FCFAF7;
  width: 55px;
  height: 70px;
  transition: 0.5s;
}

.sidebar-top-box:hover {
  border-radius: 25px;
  box-shadow: 0 0 10px white;
  cursor: pointer;
  transition: 0.5s;
}

.side-bar-icon i {
  opacity: 0.8;
  transition: 0.6s;
}
.side-bar-icon i:hover {
  opacity: 1;
  transition: 0.6s;
}

.side-bar-middle-custom-hr {
  background-color: white;
}

.side-bar-middle-title h5 {
  font-size: 15px;
  display: inline;
  opacity: 0.8;
  text-decoration: none;
}

.side-bar-middle-title h5:hover {
  opacity: 1;
  text-decoration: none;

}

</style>