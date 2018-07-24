<template>
  <div class="gif-creator">
    <h1 class="title is-2 has-text-centered">Create a Gif!</h1>

    <!-- random gif -->
    <div class="box">
      
      <!-- create the gif here -->
      <div class="gif-container" v-if="gif">
        <a class="refresh" @click="getRandomGif">🔄</a>
        <img :src="gif.url">
        <div class="caption">{{ caption }}</div>
      </div>

      <input 
        type="text" 
        class="input is-large" 
        placeholder="Caption me"
        v-if="isLoggedIn"
        v-model="caption">

      <a class="button is-large is-info is-outlined"
        v-if="isLoggedIn" 
        @click="createCaptionedGif">
          Create The Thing
      </a>
      <a 
        class="button is-info is-outlined" 
        v-if="!isLoggedIn"
        @click="login">
          Login to Create
      </a>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import AuthService from '../auth.js';

export default {
  name: 'Create',
  mixins: [AuthService], 
  props: ['isLoggedIn'],
  data() {
    return {
      apiUrl: process.env.VUE_APP_API,
      gif: null,
      caption: ''
    }
  },
  methods: {
    async getRandomGif() {
      const { data } = await axios.get(`${this.apiUrl}/random`)
      this.gif = data;
    },
    async createCaptionedGif() {
      await axios.post(`${this.apiUrl}/`, {
        id:      this.gif.id,
        url:     this.gif.url,
        caption: this.caption,
        votes:   0
      });
      this.caption = '';
      this.getRandomGif();
    }
  },
  created() {
    this.getRandomGif();
  }
}
</script>

<style scoped>
  .gif-creator {
    max-width: 400px;
    margin: 0 auto;
  }

  .box {
    position: relative;
  }

  .refresh {
    position: absolute;
    top: 10px;
    right: 10px;
  }

  .input {
    margin-bottom: 15px;
    margin-top: 15px;
  }
</style>

