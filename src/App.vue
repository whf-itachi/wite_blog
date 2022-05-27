<script setup>
import Home from "./views/Home.vue"  // Home 是对引入的Home.vue起的名字
import NavbarVue from "./components/Navbar.vue";
</script>

<template>
  <NavbarVue />
  <!-- <Home /> -->
  <router-view></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #042443;
}
</style>
