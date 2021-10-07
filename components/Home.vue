<template lang="pug">
v-app#Home(class='mx-0')
  v-container(class='mx-auto px-5 justify center fluid fill-height'
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
  v-container(class='mx-auto px-5 justify center fluid fill-height large_container'
              v-if="$mq === 'lg' || $mq === 'xl'")
    v-row(v-if="$mq === 'lg' || $mq === 'xl'" no-gutters)
      v-col.col-12.amber--text.logo.logo_xl Adupt
      v-col.col-6.amber--text.logo.logo_xl For 
      v-col.col-6.author.title_xl
        h1.text-right Portfolio
      v-col.col-6.amber--text.logo.logo_xl It
      v-col.col-6.author.title_xl
        h2.text-right Hayato Shimizu
</template>

<style scoped lang='scss'>
#Home {
    width: 100%;
}

.logo {
  font-family: 'Gunplay';
}

.author {
  font-family: 'Impact';
}

.logo_xs {
  font-size: 15vh;
}

.title_xs {
  font-size: 5vh;
}

.logo_sm {
  font-size: 20vh;
}

.title_sm {
  font-size: 3.4vh;
}

.logo_xl {
  font-size: 20vh;
}

.title_xl {
  font-size: 6vh;
}

.large_container {
  max-width: 80%;
}

</style>