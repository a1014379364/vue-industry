<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view></router-view>
  </div>
</template>

<script>
  import NavBar from "@/components/common/navbar/NavBar";

  export default {
    name: "App",
    components:{
      NavBar
    }
  }
</script>

<style>
  @import "assets/css/base.css";
</style>
