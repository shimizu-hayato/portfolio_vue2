<template lang="pug">
v-app#about
  v-container(class="mx-auto fluid fill-height")
    v-row(class="titles")
      v-col(cols="12")
        .title_text
          h2(class="text-center") ABOUT
        h3(class="dispaly-3 text-center amber--text") 自己紹介
        //v-row(class="mx-auto" justify="center")
      v-col(cols="12" v-if="$mq === 'xs' || $mq === 'sm'")
        v-layout(justify-center)
          v-avatar(color="amber" size="30vh" class="center")
            v-icon(dark size="30vh") mdi-account-circle
        //v-img(
          :src="require('~/assets/img/user_icon.png')"
          class="ma-auto"
          contain
          max-height="20vw
          max-width="20vw")
      v-col(class="col-12 warp-text" v-if="$mq === 'xs' || $mq === 'sm'")
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
                v-card-title 氏名：清水　隼人
                v-spacer
                v-card-subtitle 出身地：愛媛県
                v-card-subtitle 趣味：NFLを見ること
                v-card-text(v-html="description")
      v-col(cols="6" v-if="$mq === 'md' || $mq === 'lg' || $mq === 'xl'")
        v-layout(justify-center)
          v-avatar(color="amber" size="40vh" class="center")
            v-icon(dark size="40vh") mdi-account-circle
        //v-img(
          :src="require('~/assets/img/user_icon.png')"
          class="ma-auto"
          contain
          max-height="20vw
          max-width="20vw")
      v-col(class="col-6 warp-text" v-if="$mq === 'md' || $mq === 'lg' || $mq === 'xl'")
        v-card#card(light max-height="60vh" class="card block")
          v-card-title 氏名：清水　隼人
          v-card-subtitle 出身地：愛媛県
          v-card-text(v-html="description")
                
                      
</template>

<script>
export default {
  data () {
    return {
      description: `ポートフォリオをご覧いただきありがとうございます。<br> データサイエンティスト事業やAIの開発に携わってきた清水と申します。<br>
　趣味は英語の勉強がてら海外スポーツ鑑賞で特にNFLを生中継で夜中に見ることが多いです。<br><br>
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
  max-width: 1024px;
}
.card_text {
  height: 4vh;
  overflow-y: hidden;
  word-break: break-all;
  white-space: pre-line;
  text-overflow: ellipsis;
}
</style>
