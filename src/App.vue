<template>
  <div class="wrapper gradient">
    <HeaderComponent />
    <router-view></router-view>
    <div class="push"></div>
  </div>
  <FooterComponent />
</template>

<script>
import FooterComponent from './components/FooterComponent.vue'
import HeaderComponent from './components/HeaderComponent.vue'

export default {
  name: 'App',
  components: {
    FooterComponent,
    HeaderComponent
  }
}
</script>

<style>
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
