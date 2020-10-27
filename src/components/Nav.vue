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
        v-if="link.icon"
        v-bind:icon="link.icon"
        size="2x" />
      <img v-else
        :src="link.customIcon" />
    </a>
    <a class="grow nav-icon custom-icon"
      target="_blank"
      href="https://www.jemi.app/james">
        <JemiSVG />
      </a>
   </nav>
</template>

<script>
import JemiSVG from '@/assets/icons/jemi';
export default {
  name: 'Nav',
  components: {
    JemiSVG,
  },
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
        },
        {
          id: 3,
          name: '/contact',
          page: '/contact'
        }
      ],
      externalLinks: [
        {
          id: 4,
          icon: ['fab', 'github-square'],
          url: 'https://github.com/jamesbaskerville',
        },
        {
          id: 5,
          icon: ['fab', 'linkedin'],
          url: 'https://www.linkedin.com/in/jamesbaskerville/',
        },
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
  font-size: 18px;
}

.nav .nav-icon {
  margin-bottom: 8px;
}

.custom-icon {
  svg {
    font-size: 2em;
    width: 0.875em;
    height: 1em;
    display: inline-block;
    height: 1em;
    vertical-align: -0.125em;
  }
}

.custom-icon:hover {
  path {
    fill: $color-orange;
  }
}

.router-link-active .nav-link {
  font-weight: 600;
  font-size: 20px;
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