<template>
  <span>
    {{ this.animatedNumber }}
  </span>
</template>

<script>
import gsap from 'gsap';

export default {
  name: 'AnimatedNumber',
  props: { value: { default: 0 } },
  data() {
    return {
      tweenedNumber: 0,
    };
  },
  computed: {
    animatedNumber() {
      return this.tweenedNumber.toFixed(0);
    }
  },
  watch: {
    value(newValue) {
      gsap.to(this.$data, {
        duration: 0.5,
        tweenedNumber: newValue,
      });
    }
  }
}
</script>
