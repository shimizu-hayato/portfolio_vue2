<template lang="pug">
v-app#content
  v-container(class="mx-auto fluid fill-height")
    v-row(class="titles")
      v-col(cols="12")
        .title_text
          h2(class="text-center" dark) Contact
        h3(class="dispaly-3 text-center amber--text") 連絡
</template>

<style scoped lang="scss">
#content {
    color: #000;
    background-color: white;
    width: 100%;
}
.title_text {
    font-family: "Gunplay", sans-serif;
    font-size: 8vh;
}
</style>
