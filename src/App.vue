<template>
  <div id="app">
    <Header :isLoggedIn="isLoggedIn" />

    <Hero color="is-info">
      <Create :isLoggedIn="isLoggedIn"/>
    </Hero>

    <Hero color="is-light">
      <Battle />
    </Hero>

    <Hero color="is-dark">
      <Leaderboard />
    </Hero>

  </div>
</template>

<script>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Create from './components/Create.vue'
import Battle from './components/Battle.vue'
import Leaderboard from './components/Leaderboard.vue'
import AuthService from './auth.js'
import './assets/styles.css';

export default {
  name: 'app',
  mixins: [AuthService],
  components: {
    Hero,
    Header,
    Create,
    Battle,
    Leaderboard
  },
  created() {
    this.handleAuthentication();
    this.checkSession();
  },
}
</script>

<style>

</style>
