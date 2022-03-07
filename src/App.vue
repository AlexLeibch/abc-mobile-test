<template>
    <router-view></router-view>
</template>



<script>
    import Header from './components/Header.vue'
    import Info from './components/Info.vue'
    import Promo from './components/Promo.vue'
    import Main from './components/Main.vue'
    import Footer from './components/Footer.vue'
    import FirstQuestion from './components/FirstQuestion.vue'
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
<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
