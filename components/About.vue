<template lang="pug">
#about
  v-container(class="mx-auto fluid")
    v-row
      v-col(cols="6" class="titles" no-gutters dense)
        .title_text
          h2(class="text-center") About
        h3(class="dispaly-3 text-center amber--text") 自己紹介
      v-col(cols="6")
        v-layout(justify-center)
          v-avatar(color="amber" size="40vmin" class="center")
            v-icon(dark size="40vmin") mdi-account-circle
    v-row(v-if="$mq === 'xs' || $mq === 'sm'" no-gutters class="content_area")
      v-col(class="col-12 warp-text mt-10")
        v-card#card(light max-height="60vmin" class="card block")
          v-list(dense light class="list_text")
            v-list-item
              v-list-item-icon 氏名
              v-list-item-content 清水隼人（しみずはやと）
            v-list-item
              v-list-item-icon 出身地
              v-list-item-content 愛媛県
            v-list-item
              v-list-item-icon 事業内容:
              v-list-item-content データサイエンティスト, プログラミング教育, etc
          v-card-text()
            .card_text(v-html="description")
          v-card-actions
            v-dialog(
              v-model="dialog"
              fullscreen
              hide-overlay
              transition="dialog-bottom-transition"
            )
              template(v-slot:activator="{ on, attrs }")
                v-btn(
                  text
                  color="teal accent-4"
                  @click="dialog = true"
                ) Read More
              v-card(light)
                v-toolbar
                  v-btn(
                    icon
                    dark
                    @click="dialog = false"
                  )
                    v-icon(class="black--text") mdi-close
                  v-toolbar-title Profile
                v-list(dense light)
                  v-list-item
                    v-list-item-icon 氏名
                    v-list-item-content 清水隼人（しみずはやと）
                  v-list-item
                    v-list-item-icon 出身地
                    v-list-item-content 愛媛県
                  v-list-item
                    v-list-item-icon 事業内容:
                    v-list-item-content データサイエンティスト, プログラミング教育, etc
                v-card-text(v-html="description")
    v-row(v-if="$mq === 'md' || $mq === 'lg' || $mq === 'xl'" 
          class="content_area"
          align="center"
          justify="center")
      v-col(class="col-6 warp-text pa-0")
        v-card(dense class="ma-5")
          v-list(dense light class="list_text")
            v-list-item
              v-list-item-icon 氏名:　
              v-list-item-content 清水 隼人(しみず はやと)
            v-divider
            v-list-item
              v-list-item-icon 出身地:
              v-list-item-content 愛媛県
            v-divider
            v-list-item
              v-list-item-icon 事業内容:
            v-list-item
              v-list-item-content データサイエンティスト, プログラミング教育, etc
      v-col(cols="6")
        h2 ひとこと
        p(v-html="description" class="description_text")
</template>

<script>
export default {
  data () {
    return {
      description: `　ポートフォリオをご覧いただきありがとうございます。<br>　データサイエンティスト事業やAIの開発に携わってきた清水と申します。<br><br>
　今まで経験した解析構築してきたデータ種類は多岐にわたり、必ずデータを目に見える形にして評価してきました。
更にインフラ事業にも携わった経験もあり、クラウドでデータ運用する場合のノウハウもあります。<br>
　大量のデータをお持ちであれば１から構築・運用までお役に立てると思います。
どうぞよろしくお願いいたします。`,
      inMove: false,
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
    }
  }
}
</script>

<style scoped lang="scss">
/*
#about {
    color: #000;
    background-color: white;
}
*/
.title_text {
    font-family: "Gunplay", sans-serif;
    font-size: 10vmin;
    margin-bottom: -1vmin;
}


.card_text {
  height: 15vmin;
  font-size: 2vmin;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.list_text {
  font-size: 3vmin;
  font-weight: 900;
}

.description_text {
  font-size: 2vmin;
}

.theme--dark.v-application {
    background: white;
    color: #000;
}
</style>
