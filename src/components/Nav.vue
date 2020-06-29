<template>
  <nav id="nav" class="nav">
    <router-link
      v-for="route in links" 
      v-bind:key="route.id" 
      :to="`${route.page}`">
      <p class="grow nav-link">
        {{route.name}}
      </p>
    </router-link>
   </nav>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      links: [
        {
          id: 0,
          name: 'home',
          page: '/home'
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
.nav {
  display: grid;
  align-items: start;
  @include code-font();
}

.nav-link { 
  margin-bottom: 16px;
  font-size: 18px;
}

.router-link-exact-active .nav-link {
  font-weight: 600;
  font-size: 24px;
  &:hover {
    transform: none;
  }
}

.grow {
  transition: all .2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
}
</style>