<template>
  <NavBar/> 
  <router-view/>
  <FooterView/>
</template>

<script>
import NavBar from './components/NavBar.vue';
import FooterView from './components/FooterView.vue';
export default{
  components: {
    NavBar,
    FooterView
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
*{
  margin: 0;
  padding: 0;
}
nav {
  padding: 30px;
  background: black;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
