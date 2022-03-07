<template>
    <Header/>
    <info/>
    <promo/>
    <Main/>
    <Footer/>
</template>

<script>
    import Header from '../components/Header.vue'
    import Info from '../components/Info.vue'
    import Promo from '../components/Promo.vue'
    import Main from '../components/Main.vue'
    import Footer from '../components/Footer.vue'
    import FirstQuestion from '../components/FirstQuestion.vue'

    export default {
         components: {
      Header,
      Info,
      Promo,
      Main,
      Footer,
      FirstQuestion
      },
    }
</script>

<style scoped>

</style>