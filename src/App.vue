<template>
  <div id="app">
    <v-main-wrapper/>
    <router-view/>
  </div>
</template>

<script>
import vMainWrapper from './components/v-main-wrapper.vue';
export default {
  components: { vMainWrapper },
}
</script>

<style lang="scss">

@font-face {
  font-family: "HelveticaNeueCyr";
  src: local("HelveticaNeueCyr"),
   url(../src/assets/fonts/HelveticaRegular.ttf) format("truetype");
}
body {
  font-family: "HelveticaNeueCyr";
  margin: 0;
  padding: 0;
}
</style>
