<template lang="pug">
v-app#about
  v-container(class="mx-auto fluid fill-height dense")
    v-row(class="titles" no-gutters)
      v-col(cols="12")
        .title_text
          h2(class="text-center") ABOUT
        h3(class="dispaly-3 text-center amber--text") 自己紹介
        //v-row(class="mx-auto" justify="center")
    v-row(v-if="$mq === 'xs' || $mq === 'sm'" no-gutters)
      v-col(cols="12")
        v-layout(justify-center)
          v-avatar(color="amber" size="30vh" class="center")
            v-icon(dark size="30vh") mdi-account-circle
        //v-img(
          :src="require('~/assets/img/user_icon.png')"
          class="ma-auto"
          contain
          max-height="20vw
          max-width="20vw")
      v-col(class="col-12 warp-text")
        v-card#card(light max-height="30vh" class="card block")
          v-card-title 氏名：清水　隼人
          v-card-subtitle 出身地：愛媛県
          v-card-text
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
              //About_modal(:description="description" :dialog="dialog")
              v-card(light)
                v-toolbar
                  v-btn(
                    icon
                    dark
                    @click="dialog = false"
                  )
                    v-icon(class="black--text") mdi-close
                  v-toolbar-title Profile
                v-card-title 氏名：清水隼人（しみずはやと）
                v-spacer
                v-card-subtitle 出身地：愛媛県
                v-card-subtitle 趣味：英語の勉強がてら海外スポーツ鑑賞
                v-card-text(v-html="description")
    v-row(v-if="$mq === 'md' || $mq === 'lg' || $mq === 'xl'")
      v-col(cols="6")
        v-layout(justify-center)
          v-avatar(color="amber" size="45vh" class="center")
            v-icon(dark size="45vh") mdi-account-circle
      v-col(class="col-6 warp-text")
        v-list(dense light max-width="50vh")
          v-list-item
            v-list-item-icon 氏名
            v-list-item-content 清水隼人（しみずはやと）
          v-list-item
            v-list-item-icon 出身地
            v-list-item-content 愛媛県
          v-list-item
            v-list-item-icon 趣味
            v-list-item-content 英語の勉強がてら海外スポーツ鑑賞
          v-list-item
            v-list-item-icon ひとこと<br>
          v-list-item
            p(v-html="description")
</template>

<script>
export default {
  data () {
    return {
      description: `ポートフォリオをご覧いただきありがとうございます。<br> データサイエンティスト事業やAIの開発に携わってきた清水と申します。<br><br>
　今まで経験した解析構築してきたデータ種類は多岐にわたり、必ずデータを目に見える形にして評価してきました。。
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
.title_text {
    font-family: "Gunplay", sans-serif;
    font-size: 8vh;
    text-align: center;
}
/*
  .titles{
    padding-top: 5vh!important;
  }
*/
#about {
    color: #000;
    background-color: white;
}

.container {
  max-width: 85%;
  padding: 0;
}
.card_text {
  height: 4vh;
  overflow-y: hidden;
  word-break: break-all;
  white-space: pre-line;
  text-overflow: ellipsis;
}
</style>
