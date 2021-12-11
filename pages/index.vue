<template lang="pug">
v-app
  full-page(ref="fullpage" :options="options" id="fullpage")
    .section.black
      Home
    .section
      About
    .section.black
      Skills
    .section
      Contact
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
    }
  },
  methods: {
  }
})
</script>

<style scoped lang='scss'>
h2 {
  position: fixed;
}

p {
  font-size: 1em;
}

.red {
  background-color: #ab4545;
}

.black {
  background-color: #000;
}
.blue {
  background-color: #237ad4;
}

.green {
  background-color: #68c368;
}

.white {
  background-color: #fff
}
</style>