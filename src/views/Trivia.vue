<template>
  <div class="trivia">
    <div class="header">
      <h1 v-if="shouldShowQuestion || shouldShowAnswer">
        {{categoryText}}
      </h1>
      <h1 v-else>Trivia</h1>
    </div>
    <Scoreboard class="scoreboard"/>
    <div class="game-board" :class="{inactive: shouldShowQuestion || shouldShowAnswer}">
      <div class="card-grid">
        <div v-for="category in categories"
            v-bind:key="category.id"
            class="category">
          <div class="category-title">
            <h2>{{category.title}}</h2>
          </div>
          <div class="category-cards">
            <TriviaCard @flip-card="setActiveCard"
              v-for="card in category.cards"
              v-bind:key="card.id"
              :category="category.title"
              :value="card.value"
              :question="card.question"
              :answer="card.answer" />
          </div>
        </div>
      </div>
    </div>
    <div class="question-card" :class="{active: shouldShowQuestion}">
      <div class="question">
        <p>{{questionText}}</p>
      </div>
      <button @click="showAnswer">Show Answer</button>
    </div>
    <div class="answer-card" :class="{active: shouldShowAnswer}">
      <div class="answer">
        <p>{{answerText}}</p>
      </div>
      <div class="answer-card__button-row">
        <span class="point-value">
          +{{ this.activePoints }}
        </span>
        <button v-for="playerName in playerNames"
          @click="addScore(playerName)"
          class="success-button">
          {{ playerName }}
        </button>
      </div>
      <div class="answer-card__button-row">
        <span class="point-value">
          –{{ this.activePoints }}
        </span>
        <button v-for="playerName in playerNames"
          @click="subtractScore(playerName)"
          class="fail-button">
          {{ playerName }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import TriviaCard from '../components/trivia/TriviaCard.vue';
import Scoreboard from '../components/trivia/Scoreboard.vue';
export default {
  name: 'Trivia',
  components: {
    Scoreboard,
    TriviaCard,
  },
  computed: {
     playerNames() {
      return this.$store.state.playerScores.map((p) => p.name);
    },
    questionText() {
      return this.activeCard ? this.activeCard.question : '';
    },
    answerText() {
      return this.activeCard ? this.activeCard.answer : '';
    },
    categoryText() {
      return this.activeCard ? this.activeCard.category : '';
    },
    activePoints() {
      return this.activeCard ? this.activeCard.value : 0;
    },

  },
  methods: {
    setActiveCard(card) {
      this.activeCard = card;
      this.shouldShowQuestion = true;
    },
    showAnswer() {
      this.shouldShowQuestion = false;
      this.shouldShowAnswer = true;
    },
    closeAnswer() {
      this.activeCard = null;
      this.shouldShowAnswer = false;
    },
    cardFromClue(clue) {
      return {
        id: clue.id,
        value: clue.value || 600, // 600s seem to be missing...
        question: clue.question,
        answer: clue.answer,
      }
    },
    addScore(playerName) {
      this.$store.commit(
        'updateScore',
        { playerName, scoreDelta: this.activePoints }
      );
      this.closeAnswer();
    },
    subtractScore(playerName, points) {
      this.$store.commit(
        'updateScore',
        { playerName, scoreDelta: -1 * this.activePoints }
      );
      this.closeAnswer();
    }
  },
  async created() {
    const vm = this;
    const categoryIds = await fetch('https://jservice.io/api/random?count=5')
      .then((response) => response.json())
      .then((data) => data.map(q => q.category_id));

    console.log("category ids:", categoryIds);

    let categories = [];

    await Promise.all(categoryIds.map(async (id) => {
      const cluesForCategory = await fetch(`https://jservice.io/api/category?id=${id}`)
        .then((response) => response.json())
        .then((data) => {
          return {
            id: data.id,
            title: data.title,
            cards: data.clues
              .slice(0, 5)
              .map(c => vm.cardFromClue(c))
              .sort(c => c.value)
              .reverse(),
          };
        });

      categories = categories.concat(cluesForCategory);
    }));

    this.categories = categories;
  },
  data() {
    return {
      name: 'hi',
      activeCard: null,
      shouldShowQuestion: false,
      shouldShowAnswer: false,
      categories: [],
    };
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/shared';

.trivia {
  display: grid;
  grid: "header header" 120px
        "left   main  "  8fr
        "footer footer" 1fr
        / 2fr 8fr;
  margin: 0 20px;
  column-gap: 24px;
}

.header {
  grid-area: header;
  background-color: $color-dark-blue;
  width: 100%;
  display: grid;
  justify-items: center;
  align-items: center;
  justify-self: center;
  align-self: center;
  border-radius: 16px;
}

.scoreboard {
  grid-area: left;
  background-color: $color-dark-blue;
  justify-items: center;
  align-items: center;
  justify-self: center;
  align-self: center;
  border-radius: 16px;
  width: 100%;
  height: 100%;
}

.game-board {
  grid-area: main;
  display: grid;
  margin-top: 24px;
  justify-content: stretch;
}

.game-board.inactive {
  display: none;
}

.spacer {
  grid-area: right;
}

.card-grid {
  display: grid;
  justify-items: center;
  justify-content: center;
  grid: "cat1 cat2 cat3 cat4 cat5" 1fr
        / 1fr 1fr 1fr 1fr 1fr;
  grid-auto-flow: column;
  grid-gap: 24px;
  justify-items: stretch;
}

.category-title {
  text-align: center;
  border: solid 1px $color-white;
  height: 120px;

}

.category-cards {
  margin-top: 24px;
  display: grid;
  grid: "card1" 1fr
        "card2" 1fr
        "card3" 1fr
        "card4" 1fr
        "card5" 1fr
        / 1fr;
  grid-gap: 24px;
}

.question-card, .answer-card {
  margin: 32px;
  display: none;
  font-size: 48px;
  grid-area: main;
  text-align: center;
  background-color: $color-blue;
  border-radius: 16px;
  justify-content: center;
  align-content: center;

  grid: "question" 4fr
        "footer"   1fr
        / 1fr;
}

.question-card button {
  margin-top: 32px;
  background-color: $color-dark-blue;
  color: $color-white;
  padding: 16px;
  font-size: 24px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border: none;
}

.answer-card .answer-card__button-row {
  font-size: 36px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 24px;
  margin-bottom: 16px;

  .point-value {
    margin-right: 36px;
  }

  button {
    color: $color-white;
    padding: 16px;
    font-size: 24px;
    border-radius: 16px;
    border: none;
  }

  button.success-button {
    background-color: $color-dark-blue;
  }

  button.fail-button {
    background-color: $color-orange;
  }
}

.question-card.active, .answer-card.active {
  display: grid;
}

.question, .answer {
  display: grid;
  justify-content: center;
  align-content: center;
}

// Scores
</style>
