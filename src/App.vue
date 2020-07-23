<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style lang="scss">
@import 'assets/styles/shared';

body {
  background-color: var(--color-background, $color-white);
}

/* global styles */
#app {
  @include prose-font();
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--color-text, $color-black);
}

a {
  text-decoration: none;
  color: var(--color-main, $color-blue);
}

p {
  margin: 0;
}
</style>
