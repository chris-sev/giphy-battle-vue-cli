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
        <div class="navbar-end">
          <a href="/login" class="navbar-item">Login</a>
        </div>
      </div>

    </nav>
    </div>
  </header>  
</template>

<script>
import AuthService from '../services/AuthService.js';

export default {
  name: 'Header',
  data() {
    return {
      user: null
    }
  },
  created() {

  }
}
</script>

<style>

</style>
