<template lang="pug">
#Skills
  v-container(class="mx-auto fluid")
    v-row
      v-col(cols="12" class="titles" no-gutters dense)
        .title_text
          h2(class="text-center") Skills
        h3(class="dispaly-3 text-center amber--text") 技術
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
            { name: 'tensorflow', years: 5, level: '★★★★' },
            { name: 'pandas', years: 6, level: '★★★★' },
            { name: 'scikit-learn', years: 4, level: '★★★★' },
            { name: 'scrapy', years: 2, level: '★★★' },],
          "comment": `Pythonが一番業務経験が長く特にデータ関連における業務には自信があります。`
        },
        {
          "title": "コーディング",
          "lang": "Web",
          "bar_color": "red",
          "tools":[    
            { name: 'html/css', years: 2, level: '★★★' },
            { name: 'javascript', years: 2, level: '★★' },
            { name: 'Vue', years: 2, level: '★★' },
            { name: 'Nuxt', years: 1, level: '★' }],
          "comment": "WebはVueを主に使ってきました。このポートフォリオもvueを扱って作成しています。"
        },
        {
          "title": "インフラ",
          "lang": "AWS",
          "bar_color": "amber",
          "tools":[    
            { name: 'AWS', years: 5, level: '★★★★★' },
            { name: 'EC2', years: 3, level: '★★★★' },
            { name: 'RDS', years: 3, level: '★★★★' },
            { name: 'S3', years: 3, level: '★★★' }],
          "comment": "インフラはAWSを中心に大手ITでの業務経験があり基盤構築やデータベースの構築セキュリティなどのノウハウがあります。"
        }
      ] 
    }
  }
}
</script>

<style scoped lang="scss">
.title_text {
    font-family: "Gunplay", sans-serif;
    font-size: 8vmin;
    margin-bottom: -1vmin;
}
#Skills {
    width: 100%;
    background-color: black;
    color: white;
}
</style>
