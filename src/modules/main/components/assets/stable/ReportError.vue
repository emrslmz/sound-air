<template>
  <div>
   <div class="container text-xl-center" align="center">
     <div class="report-error-padding"></div>
     <div>
       <h1><b>Did you find our mistake?</b></h1>
       <p class="text-spacing5">fill out the form to help us improve</p>
     </div>

     <div>

       <div class="d-xl-flex justify-content-around align-items-center py-3">
         <div class="col-12 col-xl-6 text-left text-xl-right">
           <h6>Your Name <b>*</b></h6>
         </div>
         <div class="col-12 col-xl-6 form-report-error" align="left">
           <input class="px-3" value="max Stone" type="text">
         </div>
       </div>

       <div class="d-xl-flex justify-content-around align-items-center form-report-error-code-email">
         <div class="col-12 col-xl-6 text-left text-xl-right">
           <h6>Email Address <b>*</b></h6>
         </div>
         <div class="col-12 col-xl-6" align="left">
           <div class="d-xl-flex justify-content-start align-items-center form-report-error-mail" style="border-radius: 10px">
             <i class="fas fa-at py-3 px-3"></i>
             <input class="px-xl-3" value="nick.watson@loop.com" type="email">
           </div>
           <small class="text-gray px-2"><label>Email address is for communication only. <a href="#" class="text-green">Learn more.</a></label></small>
         </div>
       </div>
       

       <div class="d-xl-flex justify-content-around align-items-center py-3">
         <div class="col-12 col-xl-6 text-left text-xl-right">
           <h6>About which subject </h6>
         </div>
         <div class="col-12 col-xl-6 form-report-error" align="left">
           <select class="px-xl-3">
             <option value="#">None</option>
             <option value="#">General</option>
             <option value="#">Not working</option>
             <option value="#">Design error</option>
           </select>
         </div>
       </div>

     <div class="d-xl-flex justify-content-around align-items-center form-report-error-code-email">
       <div class="col-12 col-xl-6 text-left text-xl-right">
         <h6>Do you have an error code?</h6>
       </div>
       <div class="col-12 col-xl-6" align="left">
         <div class="d-xl-flex justify-content-start form-report-error-code" style="border-radius: 10px">
           <i class="fas fa-hashtag py-3 px-3"></i>
           <input class="px-xl-3"  value="example: 57" type="text">
         </div>
         <small class="text-gray px-2"><label>If you have, I can find a solution quickly. <i class="fas fa-circle-notch fa-spin"></i> <a href="#" class="text-green">Heavily reported issues</a></label></small>
       </div>
     </div>


     <div class="d-xl-flex justify-content-around align-items-center py-2">
       <div class="col-12 col-xl-6 text-left text-xl-right">
         <h6>Brief description of the error location <b>*</b></h6>
       </div>
       <div class="col-12 col-xl-6 form-report-error" align="left">
         <textarea class="form-control px-3" type="text" />
       </div>
     </div>

       <div class="d-xl-flex justify-content-around align-items-center py-2">
         <div class="col-12 col-xl-6 text-xl-center"></div>
         <div class="d-flex col-12 col-xl-6">
           <div class="submit-bug-report-button"><button class="btn">Submit</button></div>
         </div>
       </div>



     </div>
   </div>
  </div>
</template>


<style scoped>

.report-error-padding {
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

.form-report-error-mail i {
  width: 40px;
  height: 45px;
  background-color: #F5F8FA;
  color: #7a7b7c;
  border-radius: 8px 0 0 8px;
}

.form-report-error-code i {
  width: 40px;
  height: 45px;
  background-color: #F5F8FA;
  color: #7a7b7c;
  border-radius: 8px 0 0 8px;
}

.form-report-error textarea {
  color: #5E6278;
  outline: 0;
  border: none;
  background-color: #F5F8FA;
  max-width: 340px;
  height: 45px;
  border-radius: 8px;
}

.submit-bug-report-button button {
  border-radius: 10px;
  background-color: #20D489;
  color: white;
  font-weight: bold;
}

.submit-bug-report-button button:hover {
  background-color: #28ffa7;
  font-weight: bold;
  color: white;
}
</style>