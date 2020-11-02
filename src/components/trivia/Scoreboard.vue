<template>
  <div class="scoreboard">
    <div class="player"
      v-for="player in players"
      :key="player.name">
      <span class="name">{{player.name}}</span>
      <AnimatedInteger class="score" :value="player.score"/>
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
import AnimatedInteger from '../AnimatedInteger.vue';
import { mapGetters } from 'vuex';
export default {
  name: 'Scoreboard',
  components: {
    AnimatedInteger,
  },
  methods: {
    addPlayer() {
      this.$store.commit('addPlayer', this.newPlayerName);
      this.newPlayerName = '';
    },
  },
  computed: {
    players() {
      return this.$store.state.playerScores;
    }
  },
  data() {
    return {
      newPlayerName: '',
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
