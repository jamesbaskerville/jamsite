<template>
  <div id="last-name" class="last-name">
    <router-link to='/'>
      <h1>Baskerville</h1>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'LastName',
}
</script>

<style lang="scss"> 
@import '../assets/styles/shared';
.last-name {
  @include code-font();

  a {
    color: var(--color-text, $color-black);
  }
}
</style>