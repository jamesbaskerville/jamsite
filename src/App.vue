<template>
  <div id="app">
    <div class="container">
      <FirstName class="header col-1"></FirstName>
      <LastName class="header col-2"></LastName>
      <Nav class="nav col-1"></Nav>
      <router-view class="content"/>
    </div>
  </div>
</template>

<script>
import FirstName from '@/components/FirstName';
import LastName from '@/components/LastName';
import Nav from '@/components/Nav';
export default {
  name: 'Home',
  components: {
    'FirstName': FirstName,
    'LastName': LastName,
    'Nav': Nav,
  }
}
</script>

<style lang="scss">
@import 'assets/styles/shared';

body {
  background-color: whitesmoke;
}

/* global styles */
#app {
  @include prose-font();
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $color-black;
}

a,
a:visited {
  color: $color-black;
}

p {
  margin: 0;
}

.container {
  margin: 0 24px;
  display: grid;
  /* header, nav, body, footer */
  grid-template-rows: 10% 10% 70% 10%;

  /* nav, body */
  grid-template-columns: 120px 70%;
}

.col-1 {
  grid-column-start: 1;
  grid-column-end: 2;
}

.col-2 {
  grid-column-start: 2;
  grid-column-end: 3;
}

.header {
  grid-row-start: 1;
  grid-row-end: 2;
}

.nav {
  grid-row-start: 2;
  grid-row-end: 3;
}

.content {
  grid-column-start: 2;
  grid-row-start: 2;
  grid-row-end: 4;
}

/* main content shared styles */
.content h2 {
  margin-top: 0;
  margin-bottom: 16px;
}

.content p {
  margin-bottom: 8px;
}
</style>
