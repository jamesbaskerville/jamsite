import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    playerScores: []
  },
  mutations: {
    addPlayer (state, playerName) {
      const playerExists = !!state.playerScores.find(
        (el) => el.name === playerName
      );
      if (!playerExists) {
        state.playerScores.push({
          name: playerName,
          score: 0,
        })
      }
    },
    updateScore(state, args) {
      const { playerName, scoreDelta } = args;
      const player = state.playerScores.find(
        (el) => el.name === playerName
      );
      console.log(scoreDelta);
      if (player) {
        player.score += scoreDelta;
      }
    }
  },

})
