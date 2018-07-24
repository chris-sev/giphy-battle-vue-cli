<template>
  <header>
    <div class="container">
    <nav class="navbar" role="navigation" aria-label="main navigation">

      <!-- logo -->
      <div class="navbar-brand">
        <a class="navbar-item" href="/">🐵🙊🙉🙈 GIF BATTLE</a>
      </div>

      <!-- menu -->
      <div class="navbar-menu is-active">
        <div class="navbar-end" v-if="!isLoggedIn">
          <a @click="login" class="navbar-item">Login</a>
        </div>
        <div class="navbar-end" v-if="isLoggedIn">
          <a @click="logout" class="navbar-item">Logout</a>
        </div>
      </div>

    </nav>
    </div>
  </header>  
</template>

<script>
import AuthService from '../auth.js';

export default {
  name: 'Header',
  mixins: [AuthService],
  props: ['isLoggedIn'],
  data() {
    return {
      isLoggedIn: false
    }
  },
  created() {

  }
}
</script>

<style>

</style>
