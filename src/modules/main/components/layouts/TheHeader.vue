<template>
  <div>
    <div class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="text-white px-md-4 mx-md-5">
        <h5>Sound AIR</h5>
      </div>
      <div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#header" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>

      <div class="collapse navbar-collapse" id="header">
        <div class="navbar-nav mr-auto"></div>

       <div class="d-xl-flex text-center align-items-center justify-content-center">
        <div class="d-flex justify-content-center align-items-center">
          <router-link to="category">
            <div class="header-button mx-2 my-2"><button class="btn btn-sm"><i class="far fa-calendar-alt"></i> Categories <span class="badge badge-success">soon</span></button></div>
          </router-link>
          <router-link to="play">
            <div class="header-button mx-2 my-2"><button class="btn btn-sm"><i class="far fa-play-circle"></i> Sounds</button></div>
          </router-link>
        </div>
        <div class="d-flex justify-content-center align-items-center">
          <router-link to="contact-us"><div class="header-button mx-2 my-2"><button class="btn btn-sm"><i class="far fa-comments"></i> Contact us</button></div>  </router-link>
          <div><input class="dark-mode-button mx-2 mt-2" type="checkbox" checked></div>
        </div>
       </div>
      </div>
    </div>
  </div>
</template>


<style scoped>

.header-button button {
  background-color: white;
  color: #343A40;
  border-radius: 10px;
  font-weight: bold;
  transition: 0.4s;
}

.header-button button:hover {
  background-color: #20D489;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  transition: 0.4s;
}

.router-link-active button {
  background-color: #20D489;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  transition: 0.4s;
}
/****************************************/
/*APPLE CHECKBOX STYLE */
input.dark-mode-button {
  position: relative;
  appearance: none; outline: none;
  width: 50px; height: 30px;
  background-color: #ffffff; border: 1px solid #D9DADC;
  border-radius: 50px; box-shadow: inset -20px 0 0 0 #ffffff;
  transition-duration: 200ms;
}


input.dark-mode-button:after {
  content: "";
  position: absolute;
  top: 0; left: 1px;
  width: 26px; height: 26px;
  background-color: transparent;
  border-radius: 50%; box-shadow: 2px 4px 6px rgba(0,0,0,0.2);
}


input.dark-mode-button:checked {
  border-color: #20d489;
  box-shadow: inset 20px 0 0 0 #20d489;
}


input.dark-mode-button:checked:after {
  left: 20px;
  box-shadow: -2px 4px 3px rgba(0,0,0,0.05);
}

/*APPLE CHECKBOX STYLE */
/****************************************/

</style>