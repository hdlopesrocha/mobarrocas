<template>
    <div class="header">
        <div class="logo row align-items-center justify-content-center">
          <div class="col-4 col-lg-2">
            <img src="../assets/logo.png"/>
          </div>
        </div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container">
            <div class="navbar-nav">
              <div class="nav-item">
                <router-link to="/" class="nav-link">Home</router-link>
              </div>
              <div class="nav-item">
                <router-link to="/products" class="nav-link">Aromas</router-link>
              </div>
            </div>
          </div>
        </nav>
      </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.header {
  background: repeat-x url("../assets/plants2.png");
  width: 100%;
  height: auto;
}

.router-link-active {
  font-weight: bold;
}

.logo {
  padding: 32px;
}

.logo img {
  width: 100%;
  height: auto;
}

</style>