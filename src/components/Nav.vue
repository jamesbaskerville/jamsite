<template>
  <nav id="nav" class="nav">
    <router-link
      v-for="route in internalLinks" 
      v-bind:key="route.id" 
      :to="`${route.page}`">
      <p class="grow nav-link">
        {{route.name}}
      </p>
    </router-link>
    <a class="grow nav-icon"
      target="_blank"
      v-for="link in externalLinks"
      v-bind:key="link.id"
      :href="`${link.url}`">
      <font-awesome-icon
        v-bind:icon="link.icon"
        size="2x"/>
      </a>
   </nav>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      internalLinks: [
      {
          id: 0,
          name: '/',
          page: '/'
        },
        {
          id: 1,
          name: '/code',
          page: '/code'
        },
        {
          id: 2,
          name: '/music',
          page: '/music'
        }
      ],
      externalLinks: [
        {
          id: 3,
          icon: ['fab', 'github-square'],
          url: 'https://github.com/jamesbaskerville',
        },
        {
          id: 4,
          icon: ['fab', 'linkedin'],
          url: 'https://www.linkedin.com/in/jamesbaskerville/',
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

.nav a:hover {
  color: $color-orange;
}

.nav-link { 
  margin-bottom: 16px;
  font-size: 20px;
}

.nav .nav-icon {
  margin-bottom: 8px;
}

.router-link-exact-active .nav-link {
  font-weight: 600;
  font-size: 24px;
  color: $color-orange;
  &:hover {
    transform: none;
  }
}

.grow {
  transition: .2s ease-in-out;
  &:hover {
    transform: scale(1.1) translateX(5px);
  }
}
</style>