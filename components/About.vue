<template lang="pug">
v-app#about
  v-container(class="mx-auto fluid fill-height")
    v-row(class="titles")
      v-col(cols="12")
        h2(class="text-center") ABOUT
        h3(class="dispaly-3 text-center amber--text") 自己紹介
        //v-row(class="mx-auto" justify="center")
      v-col(cols="12")
        v-layout(justify-center)
          v-avatar(color="amber" size="30vmin" class="center")
            v-icon(dark size="30vmin") mdi-account-circle
        //v-img(
          :src="require('~/assets/img/user_icon.png')"
          class="ma-auto"
          contain
          max-height="20vw
          max-width="20vw")
      v-col(class="col-12 warp-text")
        v-card#card(light max-height="40vh" class="card")
          v-card-title プロフィール
          v-card-subtitle 氏名：清水　隼人<br>出身地：愛媛県{{inMove}}
          v-card-text(v-html="description")
</template>

<script>
export default {
  data () {
    return {
      description: `ポートフォリオをご覧いただきありがとうございます。<br> データサイエンティスト事業やAIの開発に携わってきた清水と申します。<br>
趣味は英語の勉強がてら海外スポーツ鑑賞で特にNFLを生中継で夜中に見ることが多いです。<br><br>
今まで経験した解析構築してきたデータ種類は多岐にわたり、必ずデータを目に見える形にして評価してきました。。
更にインフラ事業にも携わった経験もあり、クラウドでデータ運用する場合のノウハウもあります。
大量のデータをお持ちであれば１から構築・運用までお役に立てると思います。
どうぞよろしくお願いいたします。`,
      inMove: false
    }
  }
}
</script>

<style scoped lang="scss">
:not(.v-icon) {
  h2 {font-family: "Gunplay", sans-serif!important;}
  /*
  .titles{
    padding-top: 5vh!important;
  }
  */
  
}

#about {
    color: #000;
    background-color: white;
}

.container {
  max-width: 1024px;
}
.card {
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
