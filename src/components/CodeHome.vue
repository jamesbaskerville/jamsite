<template>
  <div class="code">
    <h2>Random Coding Projects</h2>
    <div class="code-container">
      <h3>Trivia (<router-link :to="{ name: 'Trivia' }">link</router-link>)</h3>
      <p>A 5x5 trivia game based on Jeopardy that pulls random questions from <a href="https://jservice.io" target="_blank">jservice.io</a>. Pretty functional, but needs score tracking and better question sourcing / handling of daily doubles.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CodeHome'
}
</script>

<style scoped lang="scss">
@import '../assets/styles/shared';

.code-container {
  margin: 2rem 0;

  a {
    color: $color-orange;
  }
}
</style>
