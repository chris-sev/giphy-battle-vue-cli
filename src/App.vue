<template>
  <div id="app">
    <Header />

    <Hero color="is-info">
      <Create />
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
import './assets/styles.css';

export default {
  name: 'app',
  components: {
    Hero,
    Header,
    Create,
    Battle,
    Leaderboard
  }
}
</script>

<style>

</style>
