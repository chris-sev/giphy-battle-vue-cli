<template>
  <div class="leaderboard">
    <h1 class="title is-2 has-text-centered">Leaderboard!</h1>

    <div class="box">
    <table class="table is-striped is-fullwidth">
      <thead>
        <tr>
          <th>Rank</th>
          <th>Gif</th>
          <th>Votes</th>
        </tr>
      </thead>
      <tbody>
        
        <!-- loop through leaderboard -->
        <tr v-if="gifs" v-for="(gif, index) in gifs" :key="index">
          <td>{{ index + 1 }}</td>
          <td>
            <div class="gif-container">
              <img :src="gif.url">
              <div class="caption">{{ gif.caption }}</div>
            </div>
          </td>
          <td>{{ gif.votes }}</td>
        </tr>

      </tbody>
    </table>
    </div>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Leaderboard',
  data() {
    return {
      apiUrl: process.env.VUE_APP_API,
      gifs: null
    }
  },
  methods: {
    async getLeaderboardGifs() {
      const { data } = await axios.get(`${this.apiUrl}/leaderboard`);
      this.gifs = data;
    }
  },
  created() {
    this.getLeaderboardGifs();
  }
}
</script>

<style>
  .leaderboard {
    max-width: 500px;
    margin: 0 auto;
  }

  .caption {
    font-size: 12px;
  }
</style>

