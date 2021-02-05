<template>
  <div>
   <div class="container text-xl-center" align="center">
     <div class="last-updates-padding"></div>
     <div>
       <h1><b>Is there something to tell us?</b></h1>
       <p class="text-spacing5">your feedback is valuable to us.</p>
     </div>

     <div>

       <div class="d-xl-flex justify-content-around align-items-center py-3">
         <div class="col-12 col-xl-6 text-xl-center">
           <h6>Your Name <b>*</b></h6>
         </div>
         <div class="col-12 col-xl-6 form-report-error" align="left">
           <input class="px-3" value="max_stone"  type="text">
         </div>
       </div>

       <div class="d-xl-flex justify-content-around align-items-center form-report-error-code-email">
         <div class="col-12 col-xl-6 text-xl-center">
           <h6>Email Address <b>*</b></h6>
         </div>
         <div class="col-12 col-xl-6" align="left">
           <div class="d-xl-flex justify-content-start">
             <div style="border-radius: 10px">
               <i class="fas fa-at py-3 px-3"></i>
               <input class="px-xl-3"  value="nick.watson@loop.com" type="email">
             </div>
           </div>
           <small class="text-gray px-2"><label>Email address is for communication only. <a href="#" class="text-green">Learn more.</a></label></small>
         </div>
       </div>
       

       <div class="d-xl-flex justify-content-around align-items-center py-3">
         <div class="col-12 col-xl-6 text-xl-center">
           <h6>About which subject </h6>
         </div>
         <div class="col-12 col-xl-6 form-report-error" align="left">
           <select class="px-xl-3">
             <option value="#">None</option>
             <option value="#">General</option>
             <option value="#">Turkish</option>
             <option value="#">Russi</option>
           </select>
         </div>
       </div>
     </div>

     <div class="d-xl-flex justify-content-around align-items-center form-report-error-code-email">
       <div class="col-12 col-xl-6 text-xl-center">
         <h6>Do you have an error code?</h6>
       </div>
       <div class="col-12 col-xl-6" align="left">
         <div class="d-xl-flex justify-content-start">
           <div style="border-radius: 10px">
             <i class="fas fa-hashtag py-3 px-3"></i>
             <input class="px-xl-3"  value="nick.watson@loop.com" type="text">
           </div>
         </div>
         <small class="text-gray px-2"><label>Email address is for communication only. <a href="#" class="text-green">Learn more.</a></label></small>
       </div>
     </div>



   </div>
  </div>
</template>


<style scoped>

.last-updates-padding {
  padding-top: 100px;
}


.form-report-error select {
  color: #5E6278;
  outline: 0;
  border: none;
  background-color: #F5F8FA;
  min-width: 340px;
  height: 45px;
  border-radius: 8px;
}


.form-report-error input {
  color: #5E6278;
  outline: 0;
  border: none;
  background-color: #F5F8FA;
  min-width: 340px;
  height: 45px;
  border-radius: 8px;
}

.form-report-error-code-email input {
  color: #5E6278;
  outline: 0;
  border: none;
  background-color: #F5F8FA;
  min-width: 300px;
  height: 45px;
  border-radius: 0 8px 8px 0;
}

.form-report-error-code-email i {
  width: 40px;
  height: 45px;
  background-color: #F5F8FA;
  color: #7a7b7c;
  border-radius: 8px 0 0 8px;
}
</style>