<template lang="pug">
  v-card(class="ma-0" light height="60vmin")
    v-app-bar(dark :color="bar_color" flat class="ma-0 pa-0")
      template(v-slot:extension)
        v-tabs(
            class="ma-0 fill-width"
            v-model="tab"
            color="white"
            grow
        )
          v-tabs-slider(color="black")
          v-tab(
            v-for="skill in skills"
            :key="skill.title"
            @click='change_bar_color(skill)'
            :color="skill.bar_color"
          ) {{ skill.lang }}
      v-toolbar-title {{title}}
    .content
      v-tabs-items(v-model="tab" light fluid)
        v-tab-item(
            class="tabele_style"
            calculate-widths
            v-for="skill in skills"
            :key="skill.title"
            light)
          v-data-table(
            calculate-widths
            light
            :headers="headers"
            :items="skill.tools"
            class=""
            hide-default-footer
            mobile-breakpoint="0")
            //v-footer(absolute)
          v-divider
          v-card-text(class="card_text") {{skill.comment}}
</template>

<script>
export default {
  name:"TabSkillCard",
  props: {
      source: String,
      skills: Array
  },
  data: () => ({
    tab:null,
    bar_color: null,
    title: "",
    headers: [{text: "技術", align: "end", sortable: false, value: "name", width: "33%"},
              {text: "経験年数", value: "years", align: "end", sortable: false, width: "33%"},
              {text: "level", value: "level", align: "end",sortable: false, width: "33%"}],
  }),
  methods:{
    change_bar_color: function(skill){
      this.bar_color = skill.bar_color;
      this.title = skill.title;
      return false;
    }
  },
  mounted() {
    const skill = this.skills.slice(0,1)[0];
    this.bar_color = skill.bar_color;
    this.title = skill.title;
  }
}
</script>

<style scoped lang="scss">
.card_text {
    height: 10vmin;
    font-size: 2vmin;
    font-weight: 900;
}

.content {
  width: 100%;
}

</style>