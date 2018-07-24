<template>
  <div>
    <h1 class="title is-2 has-text-centered">Fight!</h1>

    <div class="columns" v-if="gifs">

      <div class="column is-half" v-for="gif in gifs" :key="gif.id">
        <div class="box">
          <div class="gif-container">
            <img :src="gif.url">
            <div class="caption">{{ gif.caption }}</div>
          </div>
        </div>

        <a 
          class="button is-warning is-large" 
          @click="voteOnGif(gif.id)">
            Vote!
        </a>
      </div>

    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Battle',
  data() {
    return {
      apiUrl: process.env.VUE_APP_API,
      gifs: null
    }
  },
  methods: {
    async getBattleGifs() {
      const { data } = await axios.get(`${this.apiUrl}/versus`);
      this.gifs      = data;
    },
    async getLeaderboardGifs() {
      const { data } = await axios.get(`${this.apiUrl}/leaderboard`);
      this.gifs = data;
    },
    async voteOnGif(id) {
      await axios.post(`${this.apiUrl}/vote`, { id });
      this.getBattleGifs(); 
      this.getLeaderboardGifs();
    }
  },
  created() {
    this.getBattleGifs();
  }
}
</script>

<style>
  img {
    height: 300px;
  } 
</style>

