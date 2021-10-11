<template lang="pug">
#Home
  //-v-container(class='mx-auto px-5 justify center fluid fill-height'
              v-if="$mq === 'xs' || $mq === 'md' || $mq === 'sm'")
    v-row(v-if="$mq === 'xs'" no-gutters)
      v-col.col-12.amber--text.logo.logo_xs Adupt
      v-col.col-12.amber--text.logo.logo_xs For 
      v-col.col-12.amber--text.logo.logo_xs It
      v-col.col-12.author.title_xs
        h1.text-right Portfolio
      v-col.col-12.author.title_xs
        h2.text-right Hayato Shimizu
    v-row(v-if="$mq === 'md' || $mq === 'sm'" no-gutters)
      v-col.col-12.amber--text.logo.logo_sm Adupt
      v-col.col-12.amber--text.logo.logo_sm For 
      v-col.col-6.amber--text.logo.logo_sm It
      v-col.col-6.author.title_sm
        h1.text-right Portfolio
        h2.text-right Hayato Shimizu
  //-v-container(class='mx-auto px-5 justify center fluid fill-height large_container'
              v-if="$mq === 'lg' || $mq === 'xl'")
  v-container
    v-row(no-gutters)
      v-col.col-12.amber--text.logo Adupt
      v-col.col-12.author_logo
        h1.text-right Portfolio
      v-col.col-12.amber--text.logo For
      v-col.col-12.author_logo
        h2.text-right Hayato Shimizu
      v-col.col-12.amber--text.logo It
</template>

<style scoped lang='scss'>
.container{
  min-width: 100vmin;
  min-height: 100vmin;
  max-width: 100vmin;
  max-height: 100vmin;
  margin: 0!important;
  padding: 3vmin;
  background-color:black;
  color: white
}

.logo {
  font-family: 'Gunplay';
  font-size:25vmin;
  margin-top: -5%;
  margin-bottom: -5%;
}

.author_logo {
  font-family: 'Impact';
  font-size: 7.5vmin;
  margin-top: -5%;
  margin-bottom: -5%;
}
</style>