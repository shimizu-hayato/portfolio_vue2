<template lang="pug">
v-app
  full-page(ref="fullpage" :options="options" id="fullpage")
    .section.black
      Home(v-show="home_page")
    .section
      About(v-show="about_page")
    .section.black
      Skills(v-show="skills_page")
    .section
      Contact(v-show="contact_page")
</template>

<script>
export default {
  data() {
    return {
      options: {
        //licenseKey: 'YOUR_KEY_HEERE',
        //menu: '#menu',
        anchors: ['page1', 'page2', 'page3', 'page4'],
        afterLoad: this.afterLoad,
        sectionsColor: ['#000', '#fff', '#000', '#fff']
      },
      active_page: null,
      home_page: false,
      about_page: false,
      skills_page: false,
      contact_page: false
    }
  },
  methods: {
    afterLoad() {
      console.log(fullpage_api.getActiveSection())
      var page_num = fullpage_api.getActiveSection().index
      if (page_num == 0) {
        this.home_page = true;
      } else if (page_num == 1) {
        this.about_page = true;
      } else if (page_num == 2) {
        this.skills_page = true;
      } else if (page_num == 3) {
        this.contact_page = true;
      }
    }
  }
}
</script>

<style scoped lang='scss'>
h2 {
  position: fixed;
}

p {
  font-size: 1em;
}

.red {
  background-color: #ab4545;
}

.black {
  background-color: #000;
}
.blue {
  background-color: #237ad4;
}

.green {
  background-color: #68c368;
}

.white {
  background-color: #fff
}
</style>