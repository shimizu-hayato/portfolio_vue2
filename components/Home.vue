<template lang="pug">
#Home
  v-container
    v-row(no-gutters)
      v-col.col-12.amber--text.logo
        transition(name="fade" appear)
          span Adupt
      v-col.col-12.author_logo
        transition(name="fade" appear)
          h1.text-right Portfolio
      v-col.col-12.amber--text.logo
        transition(name="fade" appear)
          span For
      v-col.col-12.author_logo
        transition(name="fade" appear)
          h2.text-right Hayato Shimizu
      v-col.col-12.amber--text.logo
        transition(name="fade" appear)
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
#Home {
  background-color: black;
  color: white;
}

.logo {
  font-family: 'Gunplay';
  font-size:25vmin;
  margin-top: -5%;
  margin-bottom: -5%;
}

.author_logo {
  font-family: 'Impact';
  font-size: 7vmin;
  margin-top: -5%;
  margin-bottom: -5%;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>