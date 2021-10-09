<template lang="pug">
v-app#Skills
  v-container(class="mx-auto fluid fill-height pa-0")
    v-row(class="titles" no-gutters dense)
      v-col(cols="12")
        .title_text
          h2(class="text-center") Skills
        h3(class="dispaly-3 text-center amber--text") 技術
    v-row(v-if="$mq === 'lg' || $mq === 'xl'"
          class="ma-0")
      v-col(cols="4" 
            v-for="skill in skills" 
            :key="skill.title"
            class="pa-0")
        SkillCard(:skill="skill")
    v-row(v-if="$mq === 'md' || $mq === 'xs' || $mq === 'sm'"
          class="ma-0")
      v-col(cols="12")
        TabSkillCards(:skills="skills")
</template>

<script>
export default {
  name: "Skills",
  Component: () => import("~/components/SkillCard.vue"),
  data () {
    return {
      skills: [
        {
          "title": "AI・データサイエンス",
          "lang": "Python",
          "bar_color": "blue",
          "tools":[    
            { name: 'Python', years: 9, level: '★★★★★' },
            { name: 'tensorflow', years: 4, level: '★★' },
            { name: 'pandas', years: 4, level: '★★' },
            { name: 'scikit-learn', years: 4, level: '★★★★' },
            { name: 'scrapy', years: 4, level: '★★★' },
            { name: 'fastapi', years: 4, level: '★★★' }],
          "comment": "Pythonは…"
        },
        {
          "title": "コーディング",
          "lang": "Web",
          "bar_color": "red",
          "tools":[    
            { name: 'html/css', years: 4, level: '★★★★★' },
            { name: 'javascript', years: 4, level: '★★' },
            { name: 'Vue', years: 4, level: '★★★★' },
            { name: 'Nuxt', years: 4, level: '★★★' }],
          "comment": "Webは…"
        },
        {
          "title": "インフラ",
          "lang": "AWS",
          "bar_color": "amber",
          "tools":[    
            { name: 'AWS', years: 4, level: '★★★★★' },
            { name: 'EC2', years: 4, level: '★★' },
            { name: 'RDS', years: 4, level: '★★★★' },
            { name: 'S3', years: 4, level: '★★★' }],
          "comment": "インフラは…"
        }
      ] 
    }
  }
}
</script>

<style scoped lang="scss">
.title_text {
    font-family: "Gunplay", sans-serif;
    font-size: 8vh;
    margin-bottom: -1vh;
}
#Skills {
    width: 100%;
    background-color: black;
    color: white;
}
</style>