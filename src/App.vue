<template>
  <div class="corpo">
    <Header />
    <transition name="pagina">
      <router-view></router-view>
    </transition>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/base/Header.vue'
import Footer from './components/base/Footer'

export default {
  components: { Header, Footer },
}
</script>

<style lang="scss">

  body {
    font-family: Helvetica, sans-serif;
    width: 100%;
    margin: 0 auto;
  }
</style>