<template>
  <div>
    <div class="container text-xl-center" align="center">
      <div class="rate-us-page"></div>
      <div>
        <h1><b>Rate US!</b></h1>
        <p class="text-spacing5">Vote us to improve!</p>
      </div>

      <div>
        <h4>Select one of the creatures below to rate us. <br> According to the explanation below</h4>
        <small>Please be fair when using your vote!</small>
      </div>
      <div class="d-flex justify-content-center pt-5">
        <div class="vote-group">
          <h2><i class="fas fa-fish text-fish"></i></h2>
          <strong>I do not like<br> <small>It wasn't nice</small></strong>
        </div>
        <div class="vote-group">
          <h2><i class="fas fa-cat text-cat"></i></h2>
          <strong>Ungrateful cat <br> <small>Neither bad nor beautiful</small></strong>
        </div>
        <div class="vote-group">
          <h2><i class="fas fa-spider text-spider"></i></h2>
          <strong>Should be improved Spider <br> <small>It would be nice if it improved</small></strong>
        </div>
        <div class="vote-group">
          <h2><i class="fas fa-dragon text-dragon"></i></h2>
          <strong>EXTRAORDINARY <br> <small>Unbelievable</small></strong>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.rate-us-page {
  padding-top: 100px;
}

.vote-group {
  padding: 0 20px 0 20px;
}

.vote-group h2 {
  font-size: 40px;
}

.vote-group small {
  font-size: 8px;
}
</style>