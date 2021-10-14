<template lang="pug">
#Home
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
#Home {
  background-color: black;
  color: white;
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