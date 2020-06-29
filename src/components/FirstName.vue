<template>
  <div id="first-name" class="first-name">
    <router-link to='/'>
      <h1>James</h1>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'FirstName',
}
</script>

<style lang="scss"> 
@import '../assets/styles/shared';
.first-name {
  @include code-font();

  a {
    color: $color-black;
  }
}
</style>