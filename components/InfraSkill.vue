<template lang="pug">
  v-card(class="ma-3" light min-height="60vh")
    v-app-bar(dark color="amber")
      v-toolbar-title インフラ(AWS)
    v-container
      v-data-table(
        light
        :headers="headers"
        :items="skills"
        class=""
        hide-default-footer)
      v-footer(absolute class="")
        v-card-text(class="card_text") Pythonはああああああああああああああああああああああああああ
</template>

<script>
export default {
  name: "InfraSkill",
  props: {
      source: String,
  },
  data: () => ({
    headers: [{text: "技術", align: "end", sortable: false, value: "name"},
              {text: "経験年数", value: "years", align: "end", sortable: false,},
              {text: "level", value: "level", align: "end",sortable: false,}],
    skills: [
      { name: 'AWS', years: 4, level: '★★★★★' },
      { name: 'EC2', years: 4, level: '★★' },
      { name: 'RDS', years: 4, level: '★★★★' },
      { name: 'S3', years: 4, level: '★★★' },
    ],
  }),
}
</script>

<style scoped lang="scss">
.card_text {
    height: 10vh;
    font-size: 1.5vh;
    padding: 0;
}
</style>