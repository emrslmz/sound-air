<template>
  <div>
    <div class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div>
        <h5>Sound AIR</h5>
      </div>
      <div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="navbar-nav mr-auto"></div>

       <div class="d-flex align-items-center justify-content-center">
         <h5><button class="btn btn-sm header-button mx-2">Contact us</button></h5>
         <h5><button class="btn btn-sm header-button mx-2">Contact us</button></h5>
         <h5><input class="dark-mode-button mx-2 mt-2" type="checkbox"></h5>
       </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.header-button {
  min-width: 100px;
  color: #343A40;
  border-radius: 15px;
  background-color: white;
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