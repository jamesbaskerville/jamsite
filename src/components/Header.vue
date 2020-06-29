<template>
  <div id="header" class="header">
    <h1 class="header-grid-container">
      <span class="col-1">James </span> <span class="col-2">Baskerville</span>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      links: [
        {
          id: 0,
          name: 'home',
          page: '/'
        },
        {
          id: 1,
          name: 'code',
          page: '/code'
        },
        {
          id: 2,
          name: 'music',
          page: '/music'
        }
      ]
    }
  }
}
</script>

<style lang="scss"> 
@import '../assets/styles/shared';
.header {
  @include code-font();
  text-align: left;
}

.header-grid-container {
  display: grid;
}
</style>