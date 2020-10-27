<template>
  <div class="scoreboard">
    <div class="player"
      v-for="player in players"
      :key="player.name">
      <span class="name">{{player.name}}</span>
      <span class="score">{{player.score}}</span>
    </div>
    <form class="add-player" @submit.prevent="addPlayer">
      <input class="add-player-input"
        type="text"
        maxlength="15"
        v-model="newPlayerName"
        placeholder="Player name" 
      >
    </form>
  </div>
</template>

<script>
export default {
  name: 'TriviaCard',
  methods: {
    addPlayer() {
      const newPlayer = Object.freeze({
        name: this.newPlayerName,
        score: 1000,
      });
      this.players.push(newPlayer);
      this.newPlayerName = '';
    }
  },
  data() {
    return {
      newPlayerName: '',
      players: [],
    }
  }
}
</script>

<style scoped lang='scss'>
@import '@/assets/styles/shared';

.player {
  display: grid;
  grid-auto-flow: row;
  grid: "name score" 1fr
        "input input" 1fr 
       / 1fr  1fr;

  font-size: 24px;
  margin: 24px;
}

.score {
  justify-self: end;
}

.center {
  margin: 0 auto;
}

.add-player input {
  font-size: 24px;
  line-height: 24px;
  margin: 24px;
}
</style>
