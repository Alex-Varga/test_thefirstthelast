<template>
  <Header/>
  <div class="container">
    <div class="v-main-wrapper">
      <v-catalog/>
    </div>
  </div>
  <Footer/>
</template>

<script>
import Header from './header'
import vCatalog from './v-catalog.vue'
import Footer from './footer.vue'
export default {
  name: 'v-main-wrapper',
   components: {
     Header, vCatalog, Footer
   }
}
</script>

<style lang="scss" scoped>
  .v-main-wrapper {
    padding: 64px 0 112px;
  }
  .container {
    margin: 0 104px;
  }
  

  @media (max-width: 767px) {
    .container {
      margin: 0 18px;
    }
  }
</style>