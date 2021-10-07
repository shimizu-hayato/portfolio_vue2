<template lang="pug">
v-app#Skills
  v-container(class="mx-auto fluid fill-height pa-0")
    v-row(class="titles" no-gutters dense)
      v-col(cols="12")
        .title_text
          h2(class="text-center") Skills
        h3(class="dispaly-3 text-center amber--text") 技術
    v-row(v-if="$mq === 'lg' || $mq === 'xl'" class="ma-0")
      v-col(cols="4")
        PythonSkill
      v-col(cols="4")
        WebSkill
      v-col(cols="4")
        InfraSkill
</template>

<style scoped lang="scss">
.title_text {
    font-family: "Gunplay", sans-serif;
    font-size: 8vh;
    margin-bottom: -1vh;
}
#Skills {
    width: 100%;
}
</style>