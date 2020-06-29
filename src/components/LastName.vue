<template>
  <div id="last-name" class="header">
    <h1>Baskerville</h1>
  </div>
</template>

<script>
export default {
  name: 'LastName',
}
</script>

<style lang="scss"> 
@import '../assets/styles/shared';
.header {
  @include code-font();
  text-align: left;
}
</style>