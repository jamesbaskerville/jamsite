<template>
  <div class="music">
    <h2>Experiments w/ Music</h2>

    <div class="iframe-container">
      <iframe width="100%" height="265" src="https://clyp.it/0eafvrxq/widget" frameborder="0"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Music',
}
</script>

<style scoped lang="scss">
@import '../assets/styles/shared';

.iframe-container {
  position: relative;
  width: 100%;
  height: 265px;
}

.iframe-container iframe {
  position: relative;
  background: transparent;
  z-index: 1;
  animation: fadeIn 1000ms ease-in;
}
</style>