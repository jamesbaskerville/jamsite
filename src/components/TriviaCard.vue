<template>
  <button class="trivia-card" :class="{invisible: invisible}"
       @click="flipCard()">
    <p v-if="!invisible">
      {{ value }}
    </p>
  </button>
</template>

<script>
export default {
  name: 'TriviaCard',
  props: ['id', 'value', 'question', 'answer', 'category'],
  methods: {
    flipCard() {
      const vm = this;
      if (!vm.invisible) {
        this.$emit(
          'flip-card',
          this.question,
          this.answer,
          this.category
        );
        this.invisible = true;
      }
    }
  },
  data() {
    return {
      invisible: false,
    }
  }
}
</script>

<style scoped lang='scss'>
@import '../assets/styles/shared';
.trivia-card {
  border-radius: 16px;
  background-color: $color-blue;
  width: 240px;
  height: 120px;
  font-size: 32px;
  color: $color-white;
  border: none;
}

.trivia-card.invisible {
  background-color: $color-dark-blue;
}
</style>