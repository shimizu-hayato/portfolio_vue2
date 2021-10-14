<template lang="pug">
#content
  v-container(class="mx-auto fluid")
    v-row(class="titles")
      v-col(cols="12")
        .title_text
          h2(class="text-center" dark) Contact
        h3(class="dispaly-3 text-center amber--text") 連絡
    
    v-form(@submit.prevent class="fill-height" ref="form")
      v-row(class="mx-auto")
        v-overlay(
          :absolute="absolute"
          :value="loading || send_result"
        )
          v-progress-circular(
            :size="100"
            :width="8"
            color="amber"
            indeterminate
            v-if="!send_result"
          ) 
          span(v-if="!send_result" class="text-h3 mx-5 amber--text") sending...
          v-row(v-if="send_result" align-content="center" justify="center")
            v-col(cols="12" class="text-h1 send_enter text-center green--text") 送信完了しました
            v-col(cols="12" class="text-center")
              v-btn(@click="close_overlay") OK 
        v-col(cols="6" md="6")
          v-text-field(
            v-model="name"
            :rules="nameRules"
            :counter="10"
            label="名前"
            name="entry.938458302"
            id="entry.938458302"
            required
            outlined
            height="1vh"
          )
        v-col(cols="6" md="6")
          v-text-field(
            v-model="email"
            :rules="emailRules"
            label="email"
            name="entry.60496047"
            id="entry.60496047"
            required
            outlined
            height="5vh"
          )
        v-col(cols="12" md="12")
          v-textarea(
            v-model="textarea"
            :rules="textareaRules"
            label="お問い合わせ内容"
            name="entry.1279892730"
            id="entry.1279892730"
            value=""
            :counter="400"
            outlined
            no-resize
            :rows="rows"
          )
        v-col(cols="12" md ="12")
          v-btn(dark class="mr-5 mb-5" @click="submit") 送信
          v-btn(light class="mr-5 mb-5" @click="clear") クリア
</template>

<script>
export default {
    name: 'contact',
    data () {
      return {
        rows:null,
        absolute: true,
        loading: false,
        send_result: false,
        valid: false,
        name: '',
        nameRules: [
          v => !!v || '名前は必須です',
          v => v.length <= 10 || 'Name must be less than 10 characters',
        ],
        email: '',
        emailRules: [
          v => !!v || 'メールアドレスは必須です',
          v => /.+@.+/.test(v) || 'E-mail must be valid',
        ],
        textarea: '',
        textareaRules: [
          v => !!v || 'お問い合わせ内容は必須です',
          v => v.length <= 400 || 'Name must be less than 400 characters',
        ]
      }
    },
    methods: {
      async submit() {
        const params = new URLSearchParams();
        params.append('ifq',"")
        params.append('entry.938458302', this.name)
        params.append('entry.60496047', this.email)
        params.append('entry.1279892730', this.textarea)
        const CORS_PROXY = this.$config.cors_proxy
        const GOOGLE_FORM = this.$config.form_url_public
        this.loading = true;
        await this.$axios.post(CORS_PROXY + GOOGLE_FORM, params)
        .then(function (response) {
          if (response) {console.log("hoge")}
        })
        .catch(function (error) {
          if (error) {console.log("error")}
        })
        .finally(() => {
          this.loading = false;
          this.send_result = true;
        });
      },
      clear () {
        this.name = ''
        this.email = ''
        this.textarea = ''
        this.$refs.form.resetValidation()
      },
      close_overlay() {
        this.loading = false;
        this.send_result = false;
        this.clear()
      }
    }, 
    mounted() {
      console.log(window.innerHeight+'px');
      console.log(window.innerWidth+'px');
      if (window.innerWidth < window.innerHeight){
        this.rows = Math.floor(window.innerWidth / 70)
      } else {
        this.rows = Math.floor(window.innerHeight / 70)
      }
    }
  }
</script>

<style scoped lang="scss">
#content {
    width: 100%;
}
.titles {
  margin-bottom: 1vmin;
}

.theme--dark.v-application {
    background: white;
    color: #000;
}

</style>
