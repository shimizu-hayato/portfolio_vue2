<template lang="pug">
  v-card(class="ma-3" light min-height="60vh")
    v-app-bar(dark color="blue")
      v-toolbar-title AI・データサイエンス(Python)
    v-container
      v-data-table(
        light
        :headers="headers"
        :items="skills"
        class=""
        hide-default-footer)
      v-footer(absolute )
        v-card_text(class="card_text") Pythonはああああああああああああああああああああああああああ
</template>

<script>
export default {
  name: "PythonSkill",
  props: {
      source: String,
  },
  data: () => ({
    headers: [{text: "技術", align: "end", sortable: false, value: "name"},
              {text: "経験年数", value: "years", align: "end", sortable: false,},
              {text: "level", value: "level", align: "end",sortable: false,}],
    skills: [
      { name: 'Python', years: 9, level: '★★★★★' },
      { name: 'tensorflow', years: 4, level: '★★' },
      { name: 'pandas', years: 4, level: '★★' },
      { name: 'scikit-learn', years: 4, level: '★★★★' },
      { name: 'scrapy', years: 4, level: '★★★' },
      { name: 'fastapi', years: 4, level: '★★★' },
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