<template>
  <loader v-if="!$store.state.loaded"></loader>
  <router-view v-if="$store.state.loaded"/>
</template>

<style>

</style>

<script>
  import Loader from "./components/Loader.vue";

  export default{
    components:{Loader},
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@200;300;400;500;600;700&display=swap');
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Comfortaa',  cursive;
    font-size: 28px;
    font-weight: bold;
    color: var(--color-theme), color 1s;
    scroll-behavior: smooth;
}
:root{
    --background-theme: none;
    --background-navbar-theme: #3E3D3D;
    --background-navbar-drop-theme: rgb(92, 92, 92);
    --color-theme: black;
    --color-navbar-theme: white;
    --deg: 30deg;
    --theme-img-dark:url(/src/assets/theme-dark.png);
    --theme-img-white:url(/src/assets/theme-white.png);
    --theme-img-red:url(/src/assets/theme-red.png);
    --theme-img-yellow:url(/src/assets/theme-yellow.png);
    --theme-img-blue:url(/src/assets/theme-blue.png);
    --text-size: 16px;
}
body{
  height: 100vh;
  width: 98vw;
  background: var(--background-theme);
  color: var(--color-theme);
  transition: background 1s,color 1s;
}
a{
    text-decoration: none;
    color: var(--color-navbar-theme);
}
h1{
    font-size: 96px;
}
.container { 
    max-width: 1300px;
    margin: 0 auto;
}
</style>
