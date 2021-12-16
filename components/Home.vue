<template lang="pug">
#home
  v-container
    v-row(no-gutters)
      v-col.col-12.amber--text.logo.animate__animated.animate__slideInLeft.animate__fast
        span Adupt
      v-col.col-12.author_logo.animate__animated.animate__fadeInUp.animate__delay-4s
        h1.text-right Portfolio
      v-col.col-12.amber--text.logo.animate__animated.animate__slideInLeft.animate__delay-1s.animate__fast
        span For
      v-col.col-12.author_logo.animate__animated.animate__fadeInUp.animate__delay-5s
        h1.text-right Hayato Shimizu
      v-col.col-12.amber--text.logo.animate__animated.animate__slideInLeft.animate__delay-2s.animate__fast
        span It
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  },
  methods: {
    window: onload = function () {
      this.show = true;
    }
  }
}
</script>

<style scoped lang='scss'>
#home {
  background-color: black;
  color: white;
}

.logo {
  font-family: 'Gunplay';
  font-size:25vmin;
  margin-top: -5%;
  margin-bottom: -5%;
  --animate-delay: 0.5s;
}

.author_logo {
  font-family: 'Impact';
  font-size: 6.5vmin;
  margin-top: -5%;
  margin-bottom: -5%;
  --animate-delay: 0.5s;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>