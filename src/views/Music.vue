<template>
  <div class="music">
    <h2>Experiments w/ Music</h2>
    <p>I'm a lifetime lover of music, and I currently sing with the San Francisco Choral Artists. In my free time, I also experimenting with music production and creating songs with my roommates.</p>
    <div class="clyp-container">
      <h3>Better Days</h3>
      <p>experimenting with Logic Pro X</p>
      <div class="iframe-container" >
        <iframe width="100%" height="265" src="https://clyp.it/0eafvrxq/widget" frameborder="0"></iframe>
      </div>
    </div>
    <div class="clyp-container">
      <h3>Honestly Flip</h3>
      <p>a cover of the the Pink Sweats song with roommate Jason Cui producing</p>
      <div class="iframe-container" >
        <iframe width="100%" height="265" src="https://clyp.it/i5fb5ptr/widget" frameborder="0"></iframe>
      </div>
    </div>
    <div class="clyp-container">
      <h3>Soulful Beat</h3>
      <p>a jam with my roommates -- Neil Davey rapping and Jason Cui on production</p>
      <div class="iframe-container" >
        <iframe width="100%" height="265" src="https://clyp.it/5tjft4r3/widget" frameborder="0"></iframe>
      </div>
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
  border-radius: 10px;
}

.clyp-container {
  margin: 2rem 0;

  p {
    font-style: italic;
  }
}
</style>