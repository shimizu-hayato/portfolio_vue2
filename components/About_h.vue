<template lang="pug">
#about
  v-container(class="mx-auto px-0 justify center fluid")
    v-row(class="titles" no-gutters)
      v-col(cols="12")
        .title_text
          h2(class="text-center") ABOUT
        h3(class="dispaly-3 text-center amber--text") 自己紹介
        //v-row(class="mx-auto" justify="center")
    v-row(v-if="$mq === 'md' || $mq === 'lg' || $mq === 'xl'" justify="center" class="content_area")
      v-col(cols="6")
        v-layout(justify-center)
          v-avatar(color="amber" size="40vh" class="center")
            v-icon(dark size="40vh") mdi-account-circle
      v-col(class="col-6 warp-text pa-0")
        v-list(dense light max-width="45vmax")
          v-list-item
            v-list-item-icon 氏名
            v-list-item-content 清水隼人（しみずはやと）
          v-list-item
            v-list-item-icon 出身地
            v-list-item-content 愛媛県
          v-list-item
            v-list-item-icon 趣味
            v-list-item-content 英語の勉強がてらNFL観戦
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
    margin-bottom: -5vh;
}
/*
  .titles{
    padding-top: 5vh!important;
  }
*/
#about {
    width: 100%;
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

.content_area {
  margin-top: 10vh;
}
</style>