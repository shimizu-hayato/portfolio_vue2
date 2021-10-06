<template lang="pug">
v-card(light)
  v-toolbar
    v-btn(
      icon
      dark
      @click="dialog = false"
    )
      v-icon(class="black--text") mdi-close
    v-toolbar-title Settings
</template>

<script>
export default {
  data () {
    return {
      props:["description", "dialog"]
    }
  }
}
</script>