<template lang="pug">
v-app#about
  v-container(class="mx-auto px-5 fluid fill-height")
    v-row(class="titles" justify="center")
      v-col(cols="12")
        h2(class="text-h1 text-center") ABOUT
        h3(class="dispaly-3 text-center amber--text") 自己紹介
    v-row(class="mx-10")
      v-col(class="col-12")
        v-img(
          :src="require('~/assets/img/user_icon.png')"
          class="ma-auto"
          contain
          max-height="20vw"
          max-width="20vw")
      v-col(class="col-12 warp-text")
      |  あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ</p>
</template>

<script>
export default {
  data () {
    return {
      section_style: {
        'height': '100%',
      }
    }
  }
}
</script>

<style scoped lang="scss">
:not(.v-icon) {
  h2 {font-family: "Gunplay", sans-serif!important;}
  
  .titles{
    padding-top: 5vh!important;
  }
  
}

#about {
    color: #000;
    background-color: white;
}

.container {
  max-width: 1024px;
}
</style>
