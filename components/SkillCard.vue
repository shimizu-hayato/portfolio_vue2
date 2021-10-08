<template lang="pug">
  v-card(class="ma-3" light min-height="60vh")
    v-app-bar(dark :color="skill.bar_color")
      v-toolbar-title {{skill.title}}
    v-container
      v-data-table(
        light
        :headers="headers"
        :items="skill.tools"
        class=""
        hide-default-footer)
      v-footer(absolute )
        v-card_text(class="card_text") {{skill.comment}}
</template>

<script>
export default {
  props: {
      source: String,
      skill: Object
  },
  data: () => ({
    headers: [{text: "技術", align: "end", sortable: false, value: "name"},
              {text: "経験年数", value: "years", align: "end", sortable: false,},
              {text: "level", value: "level", align: "end",sortable: false,}],
  }),
}
</script>