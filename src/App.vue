<template>
  <div id="app">
    <div class="container">
      <FirstName class="header left"></FirstName>
      <LastName class="header middle"></LastName>
      <Nav class="nav left"></Nav>
      <router-view class="content middle"/>
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
  background-color: $color-white;
}

/* global styles */
#app {
  @include prose-font();
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $color-black;
}

a {
  text-decoration: none;
  color: $color-blue;
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
  grid-template-columns: 112px 80%;
}

.left {
  grid-column: 1 / 2;
}

.middle {
  grid-column: 2 / 3;
}

.header {
  grid-row: 1 / 2;
}

.nav {
  grid-row: 2 / 3;
}

.connect {
  grid-row: 3 / 4;
}

.content {
  grid-row: 2 / 4;
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
