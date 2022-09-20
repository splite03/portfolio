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
