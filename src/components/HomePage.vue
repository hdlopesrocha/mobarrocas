<template>
  <div class="row justify-content-center">
    <div class="col-12">
      <div class="font">Aromas de um Alentejo diferente!</div>
    </div>
    <div class="col-12 col-lg-6">
      <div class="card">
        <div class="card-body">
          <div class="card-text text-center">
            <b>Atalaia - Gavião | Alentejo - Portugal</b> <br>
            <a
              href="mailto:chambelisidro@hotmail.com?subject=Aromas%20de%20Guidintesta">chambelisidro@hotmail.com</a>
            <br>
            <a href="tel:+351939426186">+351 939 426 186</a> <br>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: String
  }
}
</script>

<style scoped>

.font { 
  font-family: "fabfeltscript";
  src: url("../assets/fonts/fabfeltscript-bold.ttf"); 
  color: rgb(220, 204, 120);
  text-align: center;
  font-size: 64px;
  margin-bottom: 32px;
}

h3 {
  color: rgb(220, 204, 120);
}

b {
  color: rgb(34, 74, 49);
}

.card {
  margin-bottom: 16px;
}

#map {
  height: 100%;
}

#cf {
  position: relative;
  width: 100%;
  margin: 0 auto;
}

#cf img {
  position: absolute;
  left: 0;
  -webkit-transition: opacity 1s ease-in-out;
  -moz-transition: opacity 1s ease-in-out;
  -o-transition: opacity 1s ease-in-out;
  transition: opacity 1s ease-in-out;
}
</style>
