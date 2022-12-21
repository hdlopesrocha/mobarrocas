<template>
  <div class="wrapper gradient">
    <HeaderComponent />
    <div class="page">
      <router-view></router-view>
    </div>
    <div class="push"></div>
  </div>
  <FooterComponent />
</template>

<script>
import FooterComponent from './components/FooterComponent.vue'
import HeaderComponent from './components/HeaderComponent.vue'

export default {
  name: 'App',  
  mounted() {  
    document.title = 'Aromas de Guidintesta'
  },  
  components: {
    FooterComponent,
    HeaderComponent
  }
}
</script>

<style>
@font-face {
  font-family: "fabfeltscript";
  src: local("fabfeltscript"),
   url(assets/fonts/fabfeltscript-bold.ttf) format("truetype");
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  margin: 0px;
}

.gradient {
  background: repeat url("assets/gradient.png");
  background-size: 100% 100%;
}

.wrapper {
  min-height: 100%;
  margin-bottom: -128px;
}

.push {
  height: 128px;
}

.page {
  padding-top: 32px;
}

html {
  background: repeat url("assets/wood2.png");
}

body {
  background: none;
}

html,
body {
  height: 100%;
  margin: 0px;
}
</style>
