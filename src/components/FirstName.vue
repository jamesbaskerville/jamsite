<template>
  <div id="first-name" class="header">
    <h1>James</h1>
  </div>
</template>

<script>
export default {
  name: 'FirstName',
}
</script>

<style lang="scss"> 
@import '../assets/styles/shared';
.header {
  @include code-font();
  text-align: left;
}
</style>